<?php
$pageTitle = "Our Pharmaceutical Products | Univentis Medicare Limited";
$pageDescription = "Explore the comprehensive range of high-quality pharmaceutical products from Univentis Medicare Limited. Our portfolio includes tablets, capsules, injectables, and wellness solutions.";
$pageKeywords = "Univentis products, pharma portfolio, tablets, capsules, medical supplies India";
include 'includes/header.php';
?>

<div class="modal fade bg-white" id="templatemo_search" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="w-100 pt-1 mb-5 text-right">
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <form action="" method="get" class="modal-content modal-body border-0 p-0">
      <div class="input-group mb-2">
        <input type="text" class="form-control" id="inputModalSearch" name="q" placeholder="Search ..." />
        <button type="submit" class="input-group-text bg-success text-light">
          <i class="fa fa-fw fa-search text-white"></i>
        </button>
      </div>
    </form>
  </div>
</div>

<div class="product-page-container">
  <div class="container">
    <!-- Product Control Bar: Brand Filters + Search -->
    <div class="product-control-bar">
      <div class="control-bar-brands">
        <button class="brand-filter-btn active" data-brand="all">
          All
        </button>
        <button class="brand-filter-btn" data-brand="ultima">Ultima</button>
        <button class="brand-filter-btn" data-brand="optima">Optima</button>
        <button class="brand-filter-btn" data-brand="innoventis">
          Innoventis
        </button>
      </div>
      <div class="control-bar-search">
        <i class="fa fa-search control-search-icon"></i>
        <input type="text" class="control-search-input" placeholder="Search by Brand & Salt Name..."
          aria-label="Search products" />
      </div>
    </div>

    <!-- Premium Category Header Bar -->
    <div class="category-header-bar">
      <div class="row align-items-center">
        <div class="col-lg-2">
          <div class="all-products-title">
            <h2>All Products</h2>
            <div class="title-divider"></div>
          </div>
        </div>
        <div class="col-lg-10">
          <div class="category-selection-grid">
            <!-- Row 1 -->
            <div class="category-row-premium">
              <label class="category-item-premium">
                <input type="checkbox" class="category-checkbox category-checkbox-custom" data-category="tablets"
                  checked />
                <div class="category-content-top">
                  <div class="category-icon-premium">
                    <i class="fas fa-tablets"></i>
                  </div>
                  <span class="category-label-premium">Tablets</span>
                </div>
              </label>
              <label class="category-item-premium">
                <input type="checkbox" class="category-checkbox category-checkbox-custom" data-category="capsules"
                  checked />
                <div class="category-content-top">
                  <div class="category-icon-premium">
                    <i class="fas fa-capsules"></i>
                  </div>
                  <span class="category-label-premium">Capsules</span>
                </div>
              </label>
              <label class="category-item-premium">
                <input type="checkbox" class="category-checkbox category-checkbox-custom" data-category="soft-gels"
                  checked />
                <div class="category-content-top">
                  <div class="category-icon-premium">
                    <i class="fas fa-pills"></i>
                  </div>
                  <span class="category-label-premium">Softgels</span>
                </div>
              </label>
              <label class="category-item-premium">
                <input type="checkbox" class="category-checkbox category-checkbox-custom" data-category="injections"
                  checked />
                <div class="category-content-top">
                  <div class="category-icon-premium">
                    <i class="fas fa-syringe"></i>
                  </div>
                  <span class="category-label-premium">Injections</span>
                </div>
              </label>
              <label class="category-item-premium">
                <input type="checkbox" class="category-checkbox category-checkbox-custom" data-category="liquids"
                  checked />
                <div class="category-content-top">
                  <div class="category-icon-premium">
                    <i class="fas fa-prescription-bottle"></i>
                  </div>
                  <span class="category-label-premium">Liquid</span>
                </div>
              </label>
            </div>
            <!-- Row 2 -->
            <div class="category-row-premium">
              <label class="category-item-premium">
                <input type="checkbox" class="category-checkbox category-checkbox-custom" data-category="oral-powder"
                  checked />
                <div class="category-content-top">
                  <div class="category-icon-premium">
                    <i class="fas fa-mortar-pestle"></i>
                  </div>
                  <span class="category-label-premium">Sachets</span>
                </div>
              </label>
              <label class="category-item-premium">
                <input type="checkbox" class="category-checkbox category-checkbox-custom" data-category="topicals"
                  checked />
                <div class="category-content-top">
                  <div class="category-icon-premium">
                    <i class="fas fa-pump-medical"></i>
                  </div>
                  <span class="category-label-premium">Ointments</span>
                </div>
              </label>
              <label class="category-item-premium">
                <input type="checkbox" class="category-checkbox category-checkbox-custom" data-category="respules-mdis"
                  checked />
                <div class="category-content-top">
                  <div class="category-icon-premium">
                    <i class="fas fa-lungs"></i>
                  </div>
                  <span class="category-label-premium">Respules</span>
                </div>
              </label>
              <label class="category-item-premium">
                <input type="checkbox" class="category-checkbox category-checkbox-custom" data-category="drops-sprays"
                  checked />
                <div class="category-content-top">
                  <div class="category-icon-premium">
                    <i class="fas fa-eye-dropper"></i>
                  </div>
                  <span class="category-label-premium">Drops</span>
                </div>
              </label>
              <label class="category-item-premium">
                <input type="checkbox" class="category-checkbox category-checkbox-custom" data-category="ortho-support"
                  checked />
                <div class="category-content-top">
                  <div class="category-icon-premium">
                    <i class="fas fa-mitten"></i>
                  </div>
                  <span class="category-label-premium">Ortho Support</span>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div id="product-card-grid" class="row g-4 text-start">
          <!-- Cards are now dynamically generated by product-renderer.js -->
        </div>

        <div class="row pt-5" id="load-more-container">
          <div class="col-12 text-center">
            <button id="load-more-btn" class="btn btn-teal btn-lg rounded-0 px-5 shadow-sm">Load More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<section class="excellence-cta-area py-5 border-top border-bottom bg-light-soft">
  <div class="container py-2">
    <div class="excellence-card-wrapper position-relative overflow-hidden">
      <!-- Background Glow Elements -->
      <div class="excellence-card-glow-1"></div>
      <div class="excellence-card-glow-2"></div>

      <div class="row align-items-center g-4 position-relative z-index-1">
        <div class="col-lg-4 text-center text-lg-start">
          <span class="excellence-badge mb-3">
            <i class="fas fa-file-pdf text-danger me-2"></i>Official Catalogues Available
          </span>
          <h2 class="excellence-title text-white fw-bold mb-3">
            Ready to Experience Healthcare Excellence?
          </h2>
          <p class="excellence-desc text-white-50 mb-0">
            Explore our comprehensive range of generic pharmaceutical formulations. Download the official, updated
            catalogues detailing all dosage forms, packaging, and compositions.
          </p>
        </div>

        <div class="col-lg-8">
          <div class="row g-3 justify-content-center">
            <!-- Univentis Catalogue -->
            <div class="col-md-6 d-flex justify-content-center">
              <div class="pdf-download-card w-100">
                <div class="pdf-file-info d-flex align-items-center mb-3">
                  <div class="pdf-icon-box me-3">
                    <i class="fas fa-file-pdf pdf-pulsing-icon"></i>
                    <div class="pdf-icon-pulse-ring"></div>
                  </div>
                  <div class="pdf-text-box text-start">
                    <div class="pdf-division-tag text-uppercase fw-bold text-teal">Univentis Catalogue</div>
                    <div class="pdf-name fw-bold text-white mb-0">Univentis Catalogue 2026-27.pdf</div>
                    <div class="pdf-details text-white-50 small">Format: PDF | Size: ~107 MB</div>
                  </div>
                </div>
                <a href="assets/img/Univentis Catalogue 2026-27.pdf" target="_blank"
                  class="btn btn-excellence-download w-100 py-3 rounded-3">
                  <span class="me-2">Open Univentis Catalogue</span>
                  <i class="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>

            <!-- Innoventis Catalogue -->
            <div class="col-md-6 d-flex justify-content-center">
              <div class="pdf-download-card w-100">
                <div class="pdf-file-info d-flex align-items-center mb-3">
                  <div class="pdf-icon-box me-3">
                    <i class="fas fa-file-pdf pdf-pulsing-icon"></i>
                    <div class="pdf-icon-pulse-ring"></div>
                  </div>
                  <div class="pdf-text-box text-start">
                    <div class="pdf-division-tag text-uppercase fw-bold text-teal">Innoventis Catalogue</div>
                    <div class="pdf-name fw-bold text-white mb-0">Innoventis Catalogue 2026-27.pdf</div>
                    <div class="pdf-details text-white-50 small">Format: PDF | Size: ~53 MB</div>
                  </div>
                </div>
                <a href="assets/img/Innoventis Catalogue 2026-27.pdf" target="_blank"
                  class="btn btn-excellence-download w-100 py-3 rounded-3">
                  <span class="me-2">Open Innoventis Catalogue</span>
                  <i class="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="brands-section py-5">
  <div class="container py-3">
    <div class="row text-center mb-4">
      <div class="col-lg-7 mx-auto">
        <span class="brands-subtitle-badge mb-2">FLAGSHIP DIVISIONS</span>
        <h2 class="brands-section-title fw-bold">Our Flagship Brands</h2>
        <div class="brands-title-line my-3 mx-auto"></div>
        <p class="text-muted">
          Explore the flagship brand families that anchor our broader pharmaceutical portfolio, delivering safety,
          efficiency, and clinical excellence.
        </p>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-11 mx-auto position-relative">
        <!-- Modern Styled Bootstrap Carousel -->
        <div id="premiumBrandsCarousel" class="carousel slide premium-brands-carousel" data-bs-ride="carousel"
          data-bs-interval="6000">
          <!-- Carousel Indicators -->
          <div class="carousel-indicators premium-carousel-indicators mb-0">
            <button type="button" data-bs-target="#premiumBrandsCarousel" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#premiumBrandsCarousel" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#premiumBrandsCarousel" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
          </div>

          <div class="carousel-inner pb-5">
            <!-- Slide 1 (Active) -->
            <div class="carousel-item active">
              <div class="row g-4 justify-content-center">
                <!-- Brand 1: Ultima -->
                <div class="col-lg-4 col-md-6 col-sm-10 d-flex">
                  <div class="premium-brand-card w-100">
                    <div class="brand-card-inner">
                      <div class="brand-card-img-wrapper">
                        <img class="img-fluid brand-card-logo" src="assets/img/Brand Names/Brand-01.webp"
                          alt="Ultima Division" />
                      </div>

                    </div>
                  </div>
                </div>

                <!-- Brand 2: Optima -->
                <div class="col-lg-4 col-md-6 col-sm-10 d-flex">
                  <div class="premium-brand-card w-100">
                    <div class="brand-card-inner">
                      <div class="brand-card-img-wrapper">
                        <img class="img-fluid brand-card-logo" src="assets/img/Brand Names/Brand-02.webp"
                          alt="Optima Division" />
                      </div>

                    </div>
                  </div>
                </div>

                <!-- Brand 3: Innoventis -->
                <div class="col-lg-4 col-md-6 col-sm-10 d-flex">
                  <div class="premium-brand-card w-100">
                    <div class="brand-card-inner">
                      <div class="brand-card-img-wrapper">
                        <img class="img-fluid brand-card-logo" src="assets/img/Brand Names/Brand-03.webp"
                          alt="Innoventis Division" />
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Slide 2 -->
            <div class="carousel-item">
              <div class="row g-4 justify-content-center">
                <!-- Brand 4: Ventoran -->
                <div class="col-lg-4 col-md-6 col-sm-10 d-flex">
                  <div class="premium-brand-card w-100">
                    <div class="brand-card-inner">
                      <div class="brand-card-img-wrapper">
                        <img class="img-fluid brand-card-logo" src="assets/img/Brand Names/Brand-04.webp"
                          alt="Ventoran Brand" />
                      </div>

                    </div>
                  </div>
                </div>

                <!-- Brand 5: UML Care -->
                <div class="col-lg-4 col-md-6 col-sm-10 d-flex">
                  <div class="premium-brand-card w-100">
                    <div class="brand-card-inner">
                      <div class="brand-card-img-wrapper">
                        <img class="img-fluid brand-card-logo" src="assets/img/Brand Names/Brand-05.webp"
                          alt="UML Care" />
                      </div>

                    </div>
                  </div>
                </div>

                <!-- Brand 6: Nutraventis -->
                <div class="col-lg-4 col-md-6 col-sm-10 d-flex">
                  <div class="premium-brand-card w-100">
                    <div class="brand-card-inner">
                      <div class="brand-card-img-wrapper">
                        <img class="img-fluid brand-card-logo" src="assets/img/Brand Names/Brand-06.webp"
                          alt="Nutraventis Brand" />
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Slide 3 -->
            <div class="carousel-item">
              <div class="row g-4 justify-content-center">
                <!-- Brand 7: Pulmo-UML -->
                <div class="col-lg-4 col-md-6 col-sm-10 d-flex">
                  <div class="premium-brand-card w-100">
                    <div class="brand-card-inner">
                      <div class="brand-card-img-wrapper">
                        <img class="img-fluid brand-card-logo" src="assets/img/Brand Names/Brand-07.webp"
                          alt="Respiratory Care" />
                      </div>

                    </div>
                  </div>
                </div>

                <!-- Brand 8: Derma-UML -->
                <div class="col-lg-4 col-md-6 col-sm-10 d-flex">
                  <div class="premium-brand-card w-100">
                    <div class="brand-card-inner">
                      <div class="brand-card-img-wrapper">
                        <img class="img-fluid brand-card-logo" src="assets/img/Brand Names/Brand-08.webp"
                          alt="Derma Care" />
                      </div>

                    </div>
                  </div>
                </div>

                <!-- Brand 9: Cardio-UML -->
                <div class="col-lg-4 col-md-6 col-sm-10 d-flex">
                  <div class="premium-brand-card w-100">
                    <div class="brand-card-inner">
                      <div class="brand-card-img-wrapper">
                        <img class="img-fluid brand-card-logo" src="assets/img/Brand Names/Brand-09.webp"
                          alt="Cardiovascular Division" />
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Carousel Controls (Previous/Next) -->
          <button class="carousel-control-prev premium-carousel-prev" type="button"
            data-bs-target="#premiumBrandsCarousel" data-bs-slide="prev">
            <span class="brand-arrow-btn" aria-hidden="true">
              <svg class="brand-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                stroke-linecap="round" stroke-linejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next premium-carousel-next" type="button"
            data-bs-target="#premiumBrandsCarousel" data-bs-slide="next">
            <span class="brand-arrow-btn" aria-hidden="true">
              <svg class="brand-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Dynamic Product Generation Scripts -->
<script src="assets/js/product-data.js"></script>
<script src="assets/js/product-renderer.js"></script>

<?php include 'includes/footer.php'; ?>