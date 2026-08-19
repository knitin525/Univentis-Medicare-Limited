<?php
$pageTitle = "Contact Us - Univentis Medicare Limited";
include 'includes/header.php';
?>

<section class="contact-hero text-white">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 m-auto text-center">
            <h1 class="display-4 fw-bold mb-3">Contact Us</h1>
            <p class="lead">We're Here to Help You and Your Wellness</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5 mt-n5 position-relative z-index-10">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-4">
            <div class="contact-info-box">
              <div class="contact-icon-circle">
                <i class="fas fa-phone-alt"></i>
              </div>
              <h4 class="h5 fw-bold dark-blue-text mb-3">Call Us</h4>
              <p class="text-muted small mb-0">+91 1724194500</p>
              <p class="text-muted small mb-0">+91 7876892509</p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="contact-info-box">
              <div class="contact-icon-circle">
                <i class="fas fa-envelope-open-text"></i>
              </div>
              <h4 class="h5 fw-bold dark-blue-text mb-3">Email Us</h4>
              <p class="text-muted small mb-0">hr@univentis.in</p>
              <p class="text-muted small mb-0">sales@univentis.in</p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="contact-info-box">
              <div class="contact-icon-circle">
                <i class="fas fa-map-marked-alt"></i>
              </div>
              <h4 class="h5 fw-bold dark-blue-text mb-3">Visit Office</h4>
              <p class="text-muted small mb-0">
                Phase-1, Panchkula, Haryana, India
              </p>
              <p class="text-muted small mb-0">
                10:00 AM - 06:30 PM (Sunday Closed)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-7">
            <div class="premium-form-container">
              <h3 class="h3 dark-blue-text fw-bold mb-4">Send Us a Message</h3>
              <form id="contact-form" action="send-contact.php" method="POST" novalidate>
                <!-- CSRF Token -->
                <input type="hidden" name="csrf_token" value="<?php echo htmlspecialchars($_SESSION['csrf_token']); ?>">
                
                <!-- Honeypot spam protection (hidden from humans) -->
                <div class="d-none">
                  <label for="contact-website">Leave this field blank</label>
                  <input type="text" id="contact-website" name="website" tabindex="-1" autocomplete="off" />
                </div>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label class="form-label-custom" for="contact-full-name"
                      >Full Name</label
                    >
                    <input
                      id="contact-full-name"
                      name="full_name"
                      type="text"
                      class="form-control form-control-premium"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div class="col-md-6 mb-3">
                    <label class="form-label-custom" for="contact-email"
                      >Email Address</label
                    >
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      class="form-control form-control-premium"
                      placeholder="Email@example.com"
                      required
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label class="form-label-custom" for="contact-phone"
                      >Phone Number</label
                    >
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      class="form-control form-control-premium"
                      placeholder="+91"
                      required
                    />
                  </div>
                  <div class="col-md-6 mb-3">
                    <label class="form-label-custom" for="contact-subject"
                      >Subject</label
                    >
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      class="form-control form-control-premium"
                      placeholder="How can we help?"
                      required
                    />
                  </div>
                </div>
                <div class="mb-4">
                  <label class="form-label-custom" for="contact-message"
                    >Message</label
                  >
                  <textarea
                    id="contact-message"
                    name="message"
                    class="form-control form-control-premium"
                    rows="5"
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-teal px-5 py-3 fw-bold">
                  Send Message <i class="fas fa-paper-plane ms-2"></i>
                </button>
                <div class="form-feedback" hidden></div>
              </form>
            </div>
          </div>

          <div class="col-lg-5">
            <div class="ps-lg-4">
              <h3 class="h3 dark-blue-text fw-bold mb-5">Our Locations</h3>

              <div class="mb-5">
                <h5 class="fw-bold text-teal mb-3">
                  <i class="fas fa-building me-2"></i> Corporate Office
                  (Panchkula)
                </h5>
                <p class="text-muted">
                  Plot No. 320, Industrial Area, Phase-1, Panchkula, Haryana,
                  India - 134113.
                </p>
              </div>

              <div class="mb-5">
                <h5 class="fw-bold text-teal mb-3">
                  <i class="fas fa-industry me-2"></i> Registered Office (Plant)
                </h5>
                <p class="text-muted">
                  Plot No. L6, MIDC Road, Taloja, Raigarh (MH), Panvel,
                  Maharashtra, India - 410208.
                </p>
              </div>

              <div class="p-4 bg-light rounded-3">
                <h6 class="fw-bold dark-blue-text mb-2">Working Hours</h6>
                <p class="text-muted small mb-1">
                  Monday - Saturday: 10:00 AM - 06:30 PM
                </p>
                <p class="text-muted small mb-0">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container pb-5">
      <div class="map-container-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.493556628391!2d76.83652217557822!3d30.6763865746115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f8b07e8ae03ed%3A0x66f978520ee43b87!2sUniventis%20Medicare%20Ltd!5e0!3m2!1sen!2sin!4v1777117818564!5m2!1sen!2sin"
          width="100%"
          height="450"
          class="map-iframe"
          allowfullscreen=""
          loading="lazy"
          title="Google Maps Location of Univentis Medicare Ltd"
        ></iframe>
      </div>
    </section>

<?php include 'includes/footer.php'; ?>
