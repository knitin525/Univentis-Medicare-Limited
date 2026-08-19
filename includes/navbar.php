<?php
/**
 * Navigation Bar Component
 * Univentis Medicare Limited
 */
$currentPage = basename($_SERVER['SCRIPT_NAME']);
?>
    <!-- Header -->
    <header class="header-area shadow-sm sticky-top">
        <nav class="navbar navbar-expand-lg navbar-light bg-white p-0">
            <div class="container d-flex justify-content-between align-items-center">
                <a class="navbar-brand" href="index.php">
                    <img src="./assets/img/logo.png" alt="Univentis Logo" class="univentis-logo" />
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#univentisNavbar"
                    aria-controls="univentisNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="univentisNavbar">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link <?php echo ($currentPage == 'about.php') ? 'active' : ''; ?>" href="about.php">ABOUT US</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link <?php echo ($currentPage == 'products.php' || $currentPage == 'products-single.php') ? 'active' : ''; ?>" href="products.php">PRODUCTS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link <?php echo ($currentPage == 'subsidiaries.php') ? 'active' : ''; ?>" href="subsidiaries.php">SUBSIDIARIES</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link <?php echo ($currentPage == 'investor_relations.php') ? 'active' : ''; ?>" href="investor_relations.php">INVESTOR RELATIONS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link <?php echo ($currentPage == 'career.php') ? 'active' : ''; ?>" href="career.php">CAREERS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link <?php echo ($currentPage == 'contact.php') ? 'active' : ''; ?>" href="contact.php">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
