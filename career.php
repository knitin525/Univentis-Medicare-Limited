<?php
$pageTitle = "Careers - Univentis Medicare Limited";
include 'includes/header.php';
?>

<section class="careers-hero text-white">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 m-auto text-center">
            <div class="careers-hero-content">
              <span class="intro-badge border-white text-white mb-3 careers-hero-badge">We Are Hiring</span>
              <h1 class="display-4 fw-bold mb-2">Careers at Univentis</h1>
              <p class="lead mb-0 careers-hero-lead">Join Our Journey of Innovation &amp; Growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="careers-intro-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 intro-content-wrapper">
            <span class="intro-badge">Join Our Team</span>
            <h2 class="intro-title">
              Built on <br />Pharmaceutical Excellence
            </h2>
            <p class="intro-lead">
              At Univentis Medicare, we believe our people are our greatest
              strength. We provide a vibrant work environment where curiosity is
              encouraged and professional growth is a reality.
            </p>
            <div class="intro-description">
              Whether you are an industry veteran or a fresh graduate, we offer
              a platform to innovate and contribute to the global healthcare
              landscape. Join a team dedicated to improving lives through
              high-quality pharmaceutical excellence.
            </div>

            <div class="intro-highlights">
              <div class="intro-highlight-item">
                <div class="intro-highlight-icon">
                  <i class="fas fa-rocket"></i>
                </div>
                <div class="intro-highlight-text">
                  Rapid Growth
                  <span class="intro-highlight-text-sub"
                    >Expand your career boundaries</span
                  >
                </div>
              </div>
              <div class="intro-highlight-item">
                <div class="intro-highlight-icon">
                  <i class="fas fa-flask"></i>
                </div>
                <div class="intro-highlight-text">
                  Innovation First
                  <span class="intro-highlight-text-sub"
                    >R&amp;D driven environment</span
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="intro-image-container">
              <img
                src="assets/img/hr_carrear_Hero.webp"
                alt="Company Culture"
                class="img-fluid intro-image-main"
              />
              <div class="intro-experience-badge">
                <h3>20+</h3>
                <span>Years of Legacy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5 bg-light">
      <div class="container py-4">
        <div class="text-center mb-5">
          <h2 class="h2 dark-blue-text fw-bold">Why Join Univentis?</h2>
          <div class="heading-line mx-auto mb-3"></div>
          <p class="text-muted">
            Explore the benefits of being part of our global team.
          </p>
        </div>

        <div class="row g-4">
          <div class="col-lg-3 col-md-6">
            <div class="career-feature-card">
              <div class="career-feature-icon">
                <i class="fas fa-chart-line"></i>
              </div>
              <h4 class="h5 dark-blue-text fw-bold">Growth Opportunities</h4>
              <p class="text-muted small">
                We prioritize internal promotions and provide clear pathways for
                career advancement.
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="career-feature-card">
              <div class="career-feature-icon">
                <i class="fas fa-graduation-cap"></i>
              </div>
              <h4 class="h5 dark-blue-text fw-bold">
                Learning &amp; Development
              </h4>
              <p class="text-muted small">
                Access regular training and workshops to keep your skills sharp
                in a fast-evolving industry.
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="career-feature-card">
              <div class="career-feature-icon">
                <i class="fas fa-users"></i>
              </div>
              <h4 class="h5 dark-blue-text fw-bold">Inclusive Work Culture</h4>
              <p class="text-muted small">
                Our collaborative environment ensures that every voice is heard
                and valued.
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="career-feature-card">
              <div class="career-feature-icon">
                <i class="fas fa-lightbulb"></i>
              </div>
              <h4 class="h5 dark-blue-text fw-bold">Innovation Focus</h4>
              <p class="text-muted small">
                Be part of cutting-edge pharmaceutical breakthroughs and
                market-specific strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="application-form" class="py-5 bg-light">
      <div class="container py-4">
        <div class="row">
          <div class="col-lg-7 m-auto">
            <div class="premium-form-container">
              <h3 class="h3 dark-blue-text fw-bold mb-4 text-center careers-form-title">
                Application Form
              </h3>
              <form
                id="careers-form"
                action="send-career.php"
                method="POST"
                enctype="multipart/form-data"
                novalidate
              >
                <!-- CSRF Token -->
                <input type="hidden" name="csrf_token" value="<?php echo htmlspecialchars($_SESSION['csrf_token']); ?>">

                <!-- Honeypot spam protection (hidden from humans) -->
                <div class="d-none">
                  <label for="career-website">Leave this field blank</label>
                  <input type="text" id="career-website" name="website" tabindex="-1" autocomplete="off" />
                </div>

                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label class="form-label-custom" for="career-first-name"
                      >First Name</label
                    >
                    <input
                      id="career-first-name"
                      name="first_name"
                      type="text"
                      class="form-control form-control-premium"
                      placeholder="Enter first name"
                      required
                    />
                  </div>
                  <div class="col-md-6 mb-3">
                    <label class="form-label-custom" for="career-last-name"
                      >Last Name</label
                    >
                    <input
                      id="career-last-name"
                      name="last_name"
                      type="text"
                      class="form-control form-control-premium"
                      placeholder="Enter last name"
                      required
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label class="form-label-custom" for="career-email"
                      >Email Address</label
                    >
                    <input
                      id="career-email"
                      name="email"
                      type="email"
                      class="form-control form-control-premium"
                      placeholder="Enter email"
                      required
                    />
                  </div>
                  <div class="col-md-6 mb-3">
                    <label class="form-label-custom" for="career-phone"
                      >Phone Number</label
                    >
                    <input
                      id="career-phone"
                      name="phone"
                      type="tel"
                      class="form-control form-control-premium"
                      placeholder="+91"
                      required
                    />
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label-custom" for="career-position"
                    >Position Applying For</label
                  >
                  <select
                    id="career-position"
                    name="position"
                    class="form-control form-control-premium"
                    required
                  >
                    <option value="">Select Position</option>
                    <option>Territory Manager</option>
                    <option>QC Analyst</option>
                    <option>Product Executive</option>
                    <option>Others</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label class="form-label-custom" for="career-address"
                    >Address</label
                  >
                  <input
                    id="career-address"
                    name="address"
                    type="text"
                    class="form-control form-control-premium"
                    placeholder="Enter your full address"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label-custom" for="career-resume"
                    >Upload Resume (PDF/DOC)</label
                  >
                  <input
                    id="career-resume"
                    name="resume"
                    type="file"
                    class="form-control form-control-premium"
                    accept=".pdf,.doc,.docx"
                    required
                  />
                </div>
                <div class="mb-4">
                  <label class="form-label-custom" for="career-cover-letter"
                    >Message / Cover Letter</label
                  >
                  <textarea
                    id="career-cover-letter"
                    name="cover_letter"
                    class="form-control form-control-premium"
                    rows="4"
                    placeholder="Tell us more about yourself"
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-teal w-100 py-3 fw-bold">
                  Apply Now <i class="fas fa-paper-plane ms-2"></i>
                </button>
                <div class="form-feedback" hidden></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

<?php include 'includes/footer.php'; ?>
