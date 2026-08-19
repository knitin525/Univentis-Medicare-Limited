<?php
$pageTitle = "Responsive QA Checklist - Univentis Medicare Limited";
$pageDescription = "Responsive Quality Assurance checklist and guidance for testing the Univentis Medicare Limited website layout across mobile, tablet, and desktop breakpoints.";
$pageKeywords = "Univentis QA checklist, responsive testing, website quality assurance, mobile breakpoints, tablet testing";
include 'includes/header.php';
?>

<div class="container py-5 checklist-container">
    <style>
      .checklist-container h1,
      .checklist-container h2 {
        color: #0f1341;
        font-weight: 700;
      }
      .checklist-container .meta {
        font-size: 0.95rem;
        color: #444;
      }
      .checklist-container .section {
        margin-top: 24px;
        margin-bottom: 24px;
      }
      .checklist-container .note {
        font-size: 0.95rem;
        color: #666;
      }
      .checklist-container table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 15px;
        margin-bottom: 25px;
      }
      .checklist-container th,
      .checklist-container td {
        border: 1px solid #ddd;
        padding: 12px;
        text-align: left;
        vertical-align: middle;
      }
      .checklist-container th {
        background: #f5f7fb;
        color: #0f1341;
        font-weight: 600;
      }
      .checklist-container .placeholder {
        height: 80px;
        border: 2px dashed #cbd5e1;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #6b7280;
        font-size: 0.85rem;
        background: #fafbfc;
        border-radius: 8px;
      }
      .checklist-container .muted {
        color: #6b7280;
        font-size: 0.95rem;
      }
      .checklist-container .small {
        font-size: 0.9rem;
      }
      .checklist-container .btn-print {
        display: inline-block;
        padding: 12px 24px;
        background: #0f1341;
        color: #fff;
        text-decoration: none;
        border-radius: 6px;
        font-weight: 600;
        transition: all 0.3s ease;
      }
      .checklist-container .btn-print:hover {
        background: #46c3e8;
        color: #fff;
      }
    </style>

    <h1>Responsive QA Checklist — Univentis</h1>
    <p class="meta">
      File: <strong>responsive-checklist.php</strong> — Open in browser and use
      Print → Save as PDF to produce a PDF copy.
    </p>

    <div class="section">
      <h2>Setup</h2>
      <ol>
        <li>
          Serve the site from the workspace root (folder:
          <strong>Univentis Medicare Limited</strong>), e.g.:
          <pre class="muted bg-light p-3 border rounded mt-2">
php -S localhost:8000</pre>
        </li>
        <li>
          Open: <strong>http://localhost:8000/products.php</strong> (or other
          pages listed below).
        </li>
      </ol>
    </div>

    <div class="section">
      <h2>Breakpoints</h2>
      <ul class="small">
        <li>Mobile small: 360 × 800 (or 375 × 812)</li>
        <li>Mobile large: 412 × 915</li>
        <li>Tablet: 768 × 1024</li>
        <li>Small laptop: 1024 × 1366</li>
        <li>Desktop: 1366 × 768 and 1440 × 900</li>
      </ul>
    </div>

    <div class="section">
      <h2>Pages to test</h2>
      <p class="small">
        index.php, products.php, products-single.php, about.php,
        career.php, contact.php, subsidiaries.php, thankyou.php
      </p>
    </div>

    <div class="section">
      <h2>Checks (mark Pass/Fail) & screenshot placeholders</h2>
      <div class="table-responsive">
        <table>
          <thead>
            <tr>
              <th>Check</th>
              <th>Pass/Fail</th>
              <th>Notes</th>
              <th>Screenshot</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Navbar</strong><br />logo visible, hamburger toggles,
                links readable
              </td>
              <td></td>
              <td class="small">Open and closed states at mobile width</td>
              <td>
                <div class="placeholder">
                  screenshot: products-375-navbar-open.png
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Top bar & social links</strong><br />no overflow,
                visibility correct
              </td>
              <td></td>
              <td class="small">
                Top bar hides on small screens (d-none d-md-block)
              </td>
              <td>
                <div class="placeholder">screenshot: products-360-topbar.png</div>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Product control bar</strong><br />filters wrap, search
                usable
              </td>
              <td></td>
              <td class="small">Filters should stack, no horizontal scroll</td>
              <td>
                <div class="placeholder">
                  screenshot: products-412-filters.png
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Product grid / cards</strong><br />images scale, cards
                stack/align
              </td>
              <td></td>
              <td class="small">Check 1–2 columns on small devices</td>
              <td>
                <div class="placeholder">screenshot: products-375-grid.png</div>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Sidebar vs content</strong><br />sidebar stacks or moves
                above content
              </td>
              <td></td>
              <td class="small">No overlap at <=768px</td>
              <td>
                <div class="placeholder">
                  screenshot: products-768-sidebar.png
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Brand carousel / logos</strong><br />logos scale, controls
                usable
              </td>
              <td></td>
              <td class="small">Check at 1024px</td>
              <td>
                <div class="placeholder">
                  screenshot: products-1024-brands.png
                </div>
              </td>
            </tr>
            <tr>
              <td><strong>Footer</strong><br />columns stack on mobile</td>
              <td></td>
              <td class="small">Contact info legible</td>
              <td>
                <div class="placeholder">screenshot: products-375-footer.png</div>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Typography & spacing</strong><br />titles wrap, no clipped
                text
              </td>
              <td></td>
              <td class="small">Check headings and buttons for clipping</td>
              <td>
                <div class="placeholder">
                  screenshot: products-375-typography.png
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Images / assets</strong><br />not stretched; webp loads
              </td>
              <td></td>
              <td class="small">Close-up of a product image</td>
              <td>
                <div class="placeholder">screenshot: products-412-image.png</div>
              </td>
            </tr>
            <tr>
              <td>
                <strong>No horizontal scroll</strong><br />page fits viewport
              </td>
              <td></td>
              <td class="small">Full-page responsive screenshot</td>
              <td>
                <div class="placeholder">
                  screenshot: products-viewport-full.png
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="section">
      <h2>How to take screenshots</h2>
      <ol>
        <li>Open DevTools (F12) → Toggle device toolbar (Ctrl+Shift+M)</li>
        <li>Choose the target device size or enter custom dimensions</li>
        <li>
          For UI component screenshots: capture open/closed states (e.g., navbar
          open)
        </li>
        <li>
          Use DevTools menu → More tools → Capture screenshot or use OS
          screenshot tool
        </li>
        <li>Save images using the file names in the placeholders above</li>
      </ol>
    </div>

    <div class="section">
      <h2>
        Quick fix snippets (add to
        <span class="muted">assets/css/responsive-fixes.css</span>)
      </h2>
      <pre class="muted bg-light p-3 border rounded mt-2">
/* Navbar overlap fix */
@media (max-width: 575.98px) {
  .navbar-brand { flex: 0 0 auto; }
  .navbar-collapse { width: 100%; }
}

/* Product image size */
.product-img-box img { max-height: 140px; object-fit: contain; }</pre>
    </div>

    <div class="mt-4 pt-3 border-top">
      <p class="note mb-4">
        Once you finish the checks, attach a small report listing any fails with
        screenshots. I can apply final tweaks or generate a minified responsive
        stylesheet and/or a bundled local Bootstrap if you prefer.
      </p>
      <p>
        <a
          class="btn-print"
          href="#"
          onclick="
            window.print();
            return false;
          "
          >Print / Save as PDF</a
        >
      </p>
    </div>
</div>

<?php include 'includes/footer.php'; ?>
