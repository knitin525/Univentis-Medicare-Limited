<?php
/**
 * SMTP Mail Helper Class
 * Univentis Medicare Limited
 */

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once __DIR__ . '/../vendor/autoload.php';

class SmtpMailer {
    /**
     * Get a preconfigured PHPMailer instance.
     * 
     * @return PHPMailer
     * @throws Exception
     */
    public static function getMailer() {
        // Load settings
        $configPath = __DIR__ . '/../config/mail.php';
        if (!file_exists($configPath)) {
            throw new Exception("Configuration file config/mail.php is missing.");
        }
        $config = require $configPath;

        $mail = new PHPMailer(true);

        // Server settings
        $mail->isSMTP();
        $mail->Host       = $config['SMTP_HOST'];
        $mail->SMTPAuth   = true;
        $mail->Username   = $config['SMTP_USERNAME'];
        $mail->Password   = $config['SMTP_PASSWORD'];
        
        $secure = strtolower($config['SMTP_SECURE']);
        if ($secure === 'ssl') {
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        } elseif ($secure === 'tls') {
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        } else {
            $mail->SMTPSecure = '';
            $mail->SMTPAutoTLS = false;
        }
        
        $mail->Port       = $config['SMTP_PORT'];
        $mail->CharSet    = 'UTF-8';

        // Timeout settings
        $mail->Timeout    = 20;

        // Default Sender
        $mail->setFrom($config['FROM_EMAIL'], $config['FROM_NAME']);

        return $mail;
    }

    /**
     * Log SMTP or general mail errors securely.
     * 
     * @param string $message
     * @return void
     */
    public static function logError($message) {
        $logDir = __DIR__ . '/../logs';
        if (!is_dir($logDir)) {
            mkdir($logDir, 0755, true);
        }
        $logFile = $logDir . '/mail_errors.log';
        $timestamp = date('Y-m-d H:i:s');
        $ip = $_SERVER['REMOTE_ADDR'] ?? 'UNKNOWN';
        $logMessage = "[$timestamp] [IP: $ip] ERROR: $message" . PHP_EOL;
        file_put_contents($logFile, $logMessage, FILE_APPEND);
    }
}
