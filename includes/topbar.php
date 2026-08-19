<?php
/**
 * Top Bar Component
 * Univentis Medicare Limited
 */
require_once __DIR__ . '/config.php';
?>
    <!-- Start Top Bar -->
    <section class="top-bar-area d-none d-md-block">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6 top-left-content">
                    <p>
                        Need Help? Talk to an Expert <span class="fa fa-phone"></span> <?php echo htmlspecialchars($phone1); ?>
                    </p>
                </div>
                <div class="col-md-6 text-end top-right-content">
                    <div class="social-links d-inline-block">
                        <a href="<?php echo htmlspecialchars($socialFacebook); ?>" target="_blank" rel="noopener" title="Facebook" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="<?php echo htmlspecialchars($socialInstagram); ?>" target="_blank" rel="noopener" title="Instagram" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="<?php echo htmlspecialchars($socialYoutube); ?>" target="_blank" rel="noopener" title="YouTube" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                        <a href="<?php echo htmlspecialchars($socialLinkedin); ?>" target="_blank" rel="noopener" title="LinkedIn" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
