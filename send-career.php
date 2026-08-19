<?php
/**
 * Careers Form Backend Processor
 * Univentis Medicare Limited
 */

header('Content-Type: application/json; charset=UTF-8');

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

require_once __DIR__ . '/includes/smtp.php';

// Validate HTTP Method
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method Not Allowed']);
    exit;
}

// Honeypot Spam Protection
if (!empty($_POST['website'])) {
    // Silently succeed to trick spam bots
    echo json_encode(['success' => true, 'message' => 'Your application has been submitted successfully.']);
    exit;
}

// CSRF Token Validation
if (empty($_POST['csrf_token']) || empty($_SESSION['csrf_token']) || !hash_equals($_SESSION['csrf_token'], $_POST['csrf_token'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Security token verification failed. Please refresh the page and try again.']);
    exit;
}

// Input sanitization
$firstName = isset($_POST['first_name']) ? trim(strip_tags($_POST['first_name'])) : '';
$lastName = isset($_POST['last_name']) ? trim(strip_tags($_POST['last_name'])) : '';
$email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL) : false;
$phone = isset($_POST['phone']) ? trim(strip_tags($_POST['phone'])) : '';
$position = isset($_POST['position']) ? trim(strip_tags($_POST['position'])) : '';
$address = isset($_POST['address']) ? trim(strip_tags($_POST['address'])) : '';
$coverLetter = isset($_POST['cover_letter']) ? trim(strip_tags($_POST['cover_letter'])) : '';

$fullName = trim($firstName . ' ' . $lastName);

// Validation checks
if (empty($firstName) || empty($lastName)) {
    echo json_encode(['success' => false, 'message' => 'First Name and Last Name are required.']);
    exit;
}
if (!$email) {
    echo json_encode(['success' => false, 'message' => 'A valid email address is required.']);
    exit;
}
if (empty($phone)) {
    echo json_encode(['success' => false, 'message' => 'Phone number is required.']);
    exit;
}
if (empty($position)) {
    echo json_encode(['success' => false, 'message' => 'Please select the position you are applying for.']);
    exit;
}

// Validate Phone Format (10 digits)
if (!preg_match('/^[0-9]{10}$/', $phone)) {
    echo json_encode(['success' => false, 'message' => 'Please enter a valid 10-digit phone number.']);
    exit;
}

// File Upload Validation and Handling
if (!isset($_FILES['resume']) || $_FILES['resume']['error'] !== UPLOAD_ERR_OK) {
    $errCode = $_FILES['resume']['error'] ?? null;
    $errMsg = "Please upload a valid resume file.";
    if ($errCode === UPLOAD_ERR_INI_SIZE || $errCode === UPLOAD_ERR_FORM_SIZE) {
        $errMsg = "The uploaded file exceeds the maximum allowed size.";
    }
    echo json_encode(['success' => false, 'message' => $errMsg]);
    exit;
}

$file = $_FILES['resume'];
$fileName = basename($file['name']);
$fileSize = $file['size'];
$fileTmpName = $file['tmp_name'];

// 1. Validate File Size (Max 5 MB)
$maxSize = 5 * 1024 * 1024;
if ($fileSize > $maxSize) {
    echo json_encode(['success' => false, 'message' => 'Please upload a file smaller than 5 MB.']);
    exit;
}

// 2. Validate File Extension
$extension = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));
$allowedExtensions = ['pdf', 'doc', 'docx'];
if (!in_array($extension, $allowedExtensions)) {
    echo json_encode(['success' => false, 'message' => 'Only PDF and Word documents (.doc, .docx) are allowed.']);
    exit;
}

// 3. Validate MIME Type (Prevent spoofing)
$allowedMimeTypes = [
    'application/pdf',
    'application/msword', // .doc
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
    'application/vnd.ms-office', // occasional .doc fallback
    'application/octet-stream' // fallback binary
];

$detectedMimeType = '';
if (function_exists('finfo_open')) {
    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $detectedMimeType = finfo_file($finfo, $fileTmpName);
    finfo_close($finfo);
} elseif (function_exists('mime_content_type')) {
    $detectedMimeType = mime_content_type($fileTmpName);
}

if (!empty($detectedMimeType) && !in_array($detectedMimeType, $allowedMimeTypes)) {
    echo json_encode(['success' => false, 'message' => 'Invalid file content. Please upload a genuine PDF or Word document.']);
    exit;
}

// 4. Secure File Saving
$uploadDir = __DIR__ . '/uploads/resume/';
if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0755, true);
}

// Prevent directory traversal/injection in target file path
$dateStr = date('Ymd_His');
$uniqueId = bin2hex(random_bytes(4));
$newFileName = "resume_{$dateStr}_{$uniqueId}.{$extension}";
$destPath = $uploadDir . $newFileName;

// Ensure file does not already exist
if (file_exists($destPath)) {
    $newFileName = "resume_{$dateStr}_" . bin2hex(random_bytes(6)) . ".{$extension}";
    $destPath = $uploadDir . $newFileName;
}

if (!move_uploaded_file($fileTmpName, $destPath)) {
    echo json_encode(['success' => false, 'message' => 'Failed to save the resume. Please try again.']);
    exit;
}

// Retrieve details
$dateTime = date('Y-m-d H:i:s');
$ipAddress = $_SERVER['REMOTE_ADDR'] ?? 'UNKNOWN';

// Admin email body
$adminHtml = "
<html>
<head>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #333333; background-color: #f4f6f8; margin: 0; padding: 20px; }
    .email-container { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e1e4e6; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05); }
    .header { background-color: #0f1341; padding: 20px; text-align: center; border-bottom: 3px solid #46c3e8; }
    .logo { height: 50px; max-width: 100%; object-fit: contain; }
    .content { padding: 30px; }
    .title { color: #0f1341; font-size: 20px; font-weight: bold; margin-bottom: 20px; border-bottom: 1px solid #e1e4e6; padding-bottom: 10px; }
    .field-table { width: 100%; border-collapse: collapse; }
    .field-table td { padding: 10px 0; border-bottom: 1px solid #f0f2f5; vertical-align: top; }
    .label { font-weight: bold; color: #0f1341; width: 35%; }
    .value { color: #333333; }
    .footer { background-color: #f8fafc; padding: 20px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; }
    .footer a { color: #46c3e8; text-decoration: none; }
  </style>
</head>
<body>
  <div class='email-container'>
    <div class='header'>
      <img class='logo' src='https://univentismedicare.co.in/assets/img/logo.png' alt='Univentis Medicare Limited Logo' />
    </div>
    <div class='content'>
      <div class='title'>New Job Application</div>
      <table class='field-table'>
        <tr>
          <td class='label'>Job Position:</td>
          <td class='value'>$position</td>
        </tr>
        <tr>
          <td class='label'>Applicant Name:</td>
          <td class='value'>$fullName</td>
        </tr>
        <tr>
          <td class='label'>Email:</td>
          <td class='value'><a href='mailto:$email'>$email</a></td>
        </tr>
        <tr>
          <td class='label'>Phone:</td>
          <td class='value'>$phone</td>
        </tr>
        <tr>
          <td class='label'>Address:</td>
          <td class='value'>$address</td>
        </tr>
        <tr>
          <td class='label'>Message/Cover Letter:</td>
          <td class='value'>" . nl2br(htmlspecialchars($coverLetter)) . "</td>
        </tr>
        <tr>
          <td class='label'>Submitted From:</td>
          <td class='value'>Univentis Medicare Website (Careers)</td>
        </tr>
        <tr>
          <td class='label'>Date & Time:</td>
          <td class='value'>$dateTime</td>
        </tr>
        <tr>
          <td class='label'>IP Address:</td>
          <td class='value'>$ipAddress</td>
        </tr>
      </table>
    </div>
    <div class='footer'>
      <p>&copy; " . date('Y') . " Univentis Medicare Limited. All Rights Reserved.</p>
      <p>Website: <a href='https://univentismedicare.co.in'>univentismedicare.co.in</a> | Phone: +91 1724194500 | Email: info@univentismedicare.co.in</p>
    </div>
  </div>
</body>
</html>
";

// Visitor confirmation body
$visitorHtml = "
<html>
<head>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #333333; background-color: #f4f6f8; margin: 0; padding: 20px; }
    .email-container { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e1e4e6; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05); }
    .header { background-color: #0f1341; padding: 20px; text-align: center; border-bottom: 3px solid #46c3e8; }
    .logo { height: 50px; max-width: 100%; object-fit: contain; }
    .content { padding: 30px; }
    .title { color: #0f1341; font-size: 20px; font-weight: bold; margin-bottom: 20px; border-bottom: 1px solid #e1e4e6; padding-bottom: 10px; }
    .greeting { font-size: 16px; margin-bottom: 15px; }
    .footer { background-color: #f8fafc; padding: 20px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; }
    .footer a { color: #46c3e8; text-decoration: none; }
  </style>
</head>
<body>
  <div class='email-container'>
    <div class='header'>
      <img class='logo' src='https://univentismedicare.co.in/assets/img/logo.png' alt='Univentis Medicare Limited Logo' />
    </div>
    <div class='content'>
      <div class='title'>Job Application Received</div>
      <div class='greeting'>Dear $fullName,</div>
      <p>Thank you for applying for the position of <strong>$position</strong> at Univentis Medicare Limited.</p>
      <p>Our HR team has received your application along with your resume, and will review your profile shortly.</p>
      <p>Regards,</p>
      <p><strong>Univentis Medicare Limited</strong></p>
    </div>
    <div class='footer'>
      <p>&copy; " . date('Y') . " Univentis Medicare Limited. All Rights Reserved.</p>
      <p>Website: <a href='https://univentismedicare.co.in'>univentismedicare.co.in</a> | Phone: +91 1724194500 | Email: info@univentismedicare.co.in</p>
    </div>
  </div>
</body>
</html>
";

try {
    // 1. Send Application to HR
    $mail = SmtpMailer::getMailer();
    $mail->addAddress('hr@univentis.in');
    $mail->addCC('sales@univentis.in');
    $mail->addReplyTo($email, $fullName);
    
    // Attach file
    $mail->addAttachment($destPath, "resume_" . str_replace(' ', '_', $fullName) . ".{$extension}");

    $mail->isHTML(true);
    $mail->Subject = "New Job Application - $position";
    $mail->Body    = $adminHtml;
    $mail->AltBody = "New Job Application\n\nPosition: $position\nName: $fullName\nEmail: $email\nPhone: $phone\nAddress: $address\nDate: $dateTime\nIP: $ipAddress";

    $mail->send();

    // 2. Send Optional Confirmation Copy to Visitor
    try {
        $confirmMail = SmtpMailer::getMailer();
        $confirmMail->addAddress($email, $fullName);
        $confirmMail->isHTML(true);
        $confirmMail->Subject = 'Thank You for Your Job Application';
        $confirmMail->Body    = $visitorHtml;
        $confirmMail->AltBody = "Dear $fullName,\n\nThank you for applying for the position of $position at Univentis Medicare Limited.\nOur HR team has received your application and will review your profile shortly.\n\nRegards,\nUniventis Medicare Limited";
        
        $confirmMail->send();
    } catch (\Exception $confirmEx) {
        SmtpMailer::logError("Career confirmation email failed to send to $email: " . $confirmEx->getMessage());
    }

    echo json_encode(['success' => true, 'message' => 'Your application has been submitted successfully.']);

} catch (\Exception $e) {
    SmtpMailer::logError("SMTP send-career error: " . $e->getMessage());
    echo json_encode([
        'success' => false, 
        'message' => 'Failed to submit application. Please try again later or contact us directly at hr@univentis.in.'
    ]);
}
