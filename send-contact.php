<?php
/**
 * Contact Form Backend Processor
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
    echo json_encode(['success' => true, 'message' => 'Your inquiry has been submitted successfully.']);
    exit;
}

// CSRF Token Validation
if (empty($_POST['csrf_token']) || empty($_SESSION['csrf_token']) || !hash_equals($_SESSION['csrf_token'], $_POST['csrf_token'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Security token verification failed. Please refresh the page and try again.']);
    exit;
}

// Input sanitization and validation
$name = isset($_POST['full_name']) ? trim(strip_tags($_POST['full_name'])) : '';
$email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL) : false;
$phone = isset($_POST['phone']) ? trim(strip_tags($_POST['phone'])) : '';
$subject = isset($_POST['subject']) ? trim(strip_tags($_POST['subject'])) : '';
$message = isset($_POST['message']) ? trim(strip_tags($_POST['message'])) : '';

// Validation checks
if (empty($name)) {
    echo json_encode(['success' => false, 'message' => 'Name is required.']);
    exit;
}
if (!$email) {
    echo json_encode(['success' => false, 'message' => 'A valid email address is required.']);
    exit;
}
if (empty($message)) {
    echo json_encode(['success' => false, 'message' => 'Message is required.']);
    exit;
}

// Retrieve sender details
$dateTime = date('Y-m-d H:i:s');
$ipAddress = $_SERVER['REMOTE_ADDR'] ?? 'UNKNOWN';
$userAgent = $_SERVER['HTTP_USER_AGENT'] ?? 'UNKNOWN';

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
    .label { font-weight: bold; color: #0f1341; width: 30%; }
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
      <div class='title'>New Contact Inquiry</div>
      <table class='field-table'>
        <tr>
          <td class='label'>Name:</td>
          <td class='value'>$name</td>
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
          <td class='label'>Subject:</td>
          <td class='value'>$subject</td>
        </tr>
        <tr>
          <td class='label'>Message:</td>
          <td class='value'>" . nl2br(htmlspecialchars($message)) . "</td>
        </tr>
        <tr>
          <td class='label'>Submitted From:</td>
          <td class='value'>Univentis Medicare Website</td>
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
      <div class='title'>Thank You for Contacting Us</div>
      <div class='greeting'>Dear $name,</div>
      <p>Thank you for contacting us.</p>
      <p>Our team has received your message and will contact you soon.</p>
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
    // 1. Send Email to Admin (Company)
    $mail = SmtpMailer::getMailer();
    $mail->addAddress('contact@univentismedicare.co.in');
    $mail->addReplyTo($email, $name);
    
    $mail->isHTML(true);
    $mail->Subject = 'New Contact Inquiry - Univentis Medicare Website';
    $mail->Body    = $adminHtml;
    $mail->AltBody = "New Contact Inquiry\n\nName: $name\nEmail: $email\nPhone: $phone\nSubject: $subject\nMessage: $message\nDate: $dateTime\nIP: $ipAddress";

    $mail->send();

    // 2. Send Optional Confirmation Copy to Visitor
    try {
        $confirmMail = SmtpMailer::getMailer();
        $confirmMail->addAddress($email, $name);
        $confirmMail->isHTML(true);
        $confirmMail->Subject = 'Thank You for Contacting Univentis Medicare Limited';
        $confirmMail->Body    = $visitorHtml;
        $confirmMail->AltBody = "Dear $name,\n\nThank you for contacting us.\nOur team has received your message and will contact you soon.\n\nRegards,\nUniventis Medicare Limited";
        
        $confirmMail->send();
    } catch (\Exception $confirmEx) {
        // Log confirmation sending error but do not fail the request
        SmtpMailer::logError("Confirmation email failed to send to $email: " . $confirmEx->getMessage());
    }

    echo json_encode(['success' => true, 'message' => 'Thank you! Your message has been sent successfully.']);

} catch (\Exception $e) {
    SmtpMailer::logError("SMTP send-contact error: " . $e->getMessage());
    echo json_encode([
        'success' => false, 
        'message' => 'Failed to send message. Please try again later or contact us directly at contact@univentismedicare.co.in.'
    ]);
}
