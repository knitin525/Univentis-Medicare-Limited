<?php
/**
 * Dynamic Meta Tags File
 * Univentis Medicare Limited
 */
require_once __DIR__ . '/config.php';

$title = isset($pageTitle) ? $pageTitle : "$siteName | Leading Pharmaceutical Company in India";
$description = isset($pageDescription) ? $pageDescription : "Univentis Medicare Limited is a premier pharmaceutical company dedicated to providing high-quality, innovative healthcare solutions across India.";
$keywords = isset($pageKeywords) ? $pageKeywords : "Univentis Medicare, pharmaceutical company, quality medicines";
$canonical = isset($canonicalUrl) ? $canonicalUrl : "$baseUrl" . $_SERVER['REQUEST_URI'];
?>
    <title><?php echo htmlspecialchars($title); ?></title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="<?php echo htmlspecialchars($description); ?>" />
    <meta name="keywords" content="<?php echo htmlspecialchars($keywords); ?>" />
    <meta name="author" content="<?php echo htmlspecialchars($siteName); ?>" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="<?php echo htmlspecialchars($canonical); ?>" />
    <meta property="og:title" content="<?php echo htmlspecialchars($title); ?>" />
    <meta property="og:description" content="<?php echo htmlspecialchars($description); ?>" />
    <meta property="og:image" content="<?php echo htmlspecialchars($baseUrl); ?>/assets/img/logo.png" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="<?php echo htmlspecialchars($canonical); ?>" />
    <meta property="twitter:title" content="<?php echo htmlspecialchars($title); ?>" />
    <meta property="twitter:description" content="<?php echo htmlspecialchars($description); ?>" />
    <meta property="twitter:image" content="<?php echo htmlspecialchars($baseUrl); ?>/assets/img/logo.png" />
