<?php
/**
 * Master Footer Include
 * Univentis Medicare Limited
 */
require_once __DIR__ . '/config.php';
?>
  <!-- Start Footer -->
  <footer class="footer-area">
    <div class="container-fluid px-lg-5">
      <!-- Footer Top CTA -->
      <div class="footer-top-cta">
        <div class="row align-items-center">
          <div class="col-lg-7">
            <h3 class="h2 fw-bold mb-2">
              Ready to improve global healthcare?
            </h3>
            <p class="mb-0 opacity-75">
              Connect with us today for partnerships, careers, or queries.
            </p>
          </div>
          <div class="col-lg-5 text-lg-end mt-4 mt-lg-0">
            <a href="contact.php" class="btn btn-teal px-5 py-3 rounded-pill fw-bold">Get In Touch <i
                class="fas fa-paper-plane ms-2"></i></a>
          </div>
        </div>
      </div>

      <div class="row g-5">
        <!-- Company Info -->
        <div class="col-lg-4 col-md-6">
          <img src="./assets/img/Logo Footer.webp" alt="Univentis Logo" class="footer-logo-main mb-4" />
          <p class="text-light-grey small mb-4 footer-company-desc">
            Univentis Medicare Limited delivers world-class quality
            healthcare. We are committed to achieving maximum wellness
            worldwide, formulating secure products for a healthier future.
          </p>
          <div class="social-circle-links">
            <a href="<?php echo htmlspecialchars($socialFacebook); ?>" target="_blank" rel="noopener" class="social-circle-btn" title="Facebook" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="<?php echo htmlspecialchars($socialInstagram); ?>" target="_blank" rel="noopener" class="social-circle-btn" title="Instagram" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="<?php echo htmlspecialchars($socialYoutube); ?>" target="_blank" rel="noopener" class="social-circle-btn" title="YouTube" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
            <a href="<?php echo htmlspecialchars($socialLinkedin); ?>" target="_blank" rel="noopener" class="social-circle-btn" title="LinkedIn" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="col-lg-2 col-md-6 ps-lg-4">
          <h5 class="footer-title">Company</h5>
          <ul class="footer-links-list">
            <li>
              <a href="about.php"><i class="fas fa-chevron-right"></i> About Us</a>
            </li>
            <li>
              <a href="products.php"><i class="fas fa-chevron-right"></i> Our Products</a>
            </li>
            <li>
              <a href="subsidiaries.php"><i class="fas fa-chevron-right"></i> Subsidiaries</a>
            </li>
            <li>
              <a href="career.php"><i class="fas fa-chevron-right"></i> Join Our Team</a>
            </li>
          </ul>
        </div>

        <!-- Support Links -->
        <div class="col-lg-2 col-md-6">
          <h5 class="footer-title">Support</h5>
          <ul class="footer-links-list">
            <li>
              <a href="investor_relations.php"><i class="fas fa-chevron-right"></i> Investor Relations</a>
            </li>
            <li>
              <a href="contact.php"><i class="fas fa-chevron-right"></i> Contact Us</a>
            </li>
            <li>
              <a href="#"><i class="fas fa-chevron-right"></i> Privacy Policy</a>
            </li>
            <li>
              <a href="#"><i class="fas fa-chevron-right"></i> Terms of Use</a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="col-lg-4 col-md-6">
          <h5 class="footer-title">Contact Details</h5>
          <div class="contact-info-item">
            <div class="contact-info-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="contact-info-text">
              <b>Registered Office</b>
              <?php echo htmlspecialchars($registeredAddress); ?>
            </div>
          </div>
          <div class="contact-info-item">
            <div class="contact-info-icon">
              <i class="fas fa-phone-alt"></i>
            </div>
            <div class="contact-info-text">
              <b>Phone Number</b>
              <?php echo htmlspecialchars($phone1); ?>
            </div>
          </div>
          <div class="contact-info-item">
            <div class="contact-info-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="contact-info-text">
              <b>Email Address</b>
              <?php echo htmlspecialchars($infoEmail); ?>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom-premium">
      <div class="container-fluid px-lg-5">
        <div class="row align-items-center">
          <div class="col-md-6">
            <p class="footer-copyright mb-0">
              <?php echo $copyrightText; ?>
            </p>
          </div>
          <div class="col-md-6 text-md-end">
            <div class="footer-bottom-links">
              <a href="#">Sitemap</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- End Footer -->

  <?php include __DIR__ . '/scripts.php'; ?>
</body>
</html>
