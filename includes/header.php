<?php
/**
 * Master Header Include
 * Univentis Medicare Limited
 */
require_once __DIR__ . '/config.php';
?>
<!doctype html>
<html lang="en">
<head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-LVWML7NEK2"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-LVWML7NEK2');
    </script>

    <?php include __DIR__ . '/meta.php'; ?>
    <?php include __DIR__ . '/styles.php'; ?>
</head>
<body>
    <?php include __DIR__ . '/topbar.php'; ?>
    <?php include __DIR__ . '/navbar.php'; ?>
