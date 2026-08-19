document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header-area");

  const startCounterAnimation = () => {
    const counters = document.querySelectorAll(".counter");
    if (!counters.length) {
      return;
    }

    const speed = 100;
    const updateCounter = (counter) => {
      const target = Number(counter.getAttribute("data-target")) || 0;
      const current = Number(counter.innerText.replace(/,/g, "")) || 0;
      const increment = target / speed;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment).toLocaleString();
        window.setTimeout(() => updateCounter(counter), 20);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };

    const statsSection = document.getElementById("stats-counter-section");
    if (!statsSection) {
      counters.forEach(updateCounter);
      return;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            counters.forEach(updateCounter);
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    observer.observe(statsSection);
  };

  const setupScrollNav = () => {
    if (!header) return;

    const topBar = document.querySelector(".top-bar-area");
    // set CSS variable for top bar height so CSS transforms can shift header up without layout jumps
    const setTopBarHeightVar = () => {
      const height = topBar ? topBar.offsetHeight : 0;
      document.documentElement.style.setProperty(
        "--site-topbar-height",
        `${height}px`,
      );
    };
    setTopBarHeightVar();
    window.addEventListener("resize", setTopBarHeightVar, { passive: true });
    let lastScroll = window.scrollY || 0;
    let ticking = false;
    const threshold = 80; // start hiding after user scrolls past this

    const handle = () => {
      const current = window.scrollY || 0;
      const delta = current - lastScroll;

      // ignore very small deltas to avoid flicker
      if (Math.abs(delta) < 5) {
        lastScroll = current;
        return;
      }

      if (delta > 0 && current > threshold) {
        // scrolling down
        header.classList.add("nav-shrink");
        header.classList.add("nav-shadow");
        if (topBar) topBar.classList.add("top-bar-hidden");
      } else {
        // scrolling up
        header.classList.remove("nav-shrink");
        if (topBar) topBar.classList.remove("top-bar-hidden");
        if (current <= 10) header.classList.remove("nav-shadow");
      }

      lastScroll = current <= 0 ? 0 : current;
    };

    // use rAF for efficient throttling
    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            handle();
            ticking = false;
          });
          ticking = true;
        }
      },
      { passive: true },
    );

    // initial state
    handle();
  };


  // setupProductFilters removed in favor of performance-optimized in-memory implementation in product-renderer.js


  const setupHomeProductFilters = () => {
    const homeProductGrid = document.getElementById("home-product-grid");
    const filterBtns = document.querySelectorAll(
      ".product-filters .filter-btn",
    );
    const cards = homeProductGrid?.querySelectorAll("[data-brand]");

    if (!homeProductGrid || !filterBtns.length || !cards?.length) {
      return;
    }

    const filterProducts = (filter) => {
      let count = 0;
      cards.forEach((card) => {
        const brand = card.dataset.brand;
        if (filter === "all") {
          // If "all" filter, display only the first 9 products in total
          if (count < 9) {
            card.style.display = "block";
            count++;
          } else {
            card.style.display = "none";
          }
        } else if (brand === filter) {
          // If division specific filter, display all products matching (which is 9 per division)
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    };

    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filter = btn.dataset.filter;

        // Update active button
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        filterProducts(filter);
      });
    });

    // Run initially to display only the top 9 balanced products when loading index
    filterProducts("all");
  };

  const setupForms = () => {
    const openMailDraft = (recipient, subject, body) => {
      const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
    };

    const clearFeedback = (form) => {
      const target = form.querySelector(".form-feedback");
      if (!target) {
        return;
      }

      target.hidden = true;
      target.textContent = "";
      target.className = "form-feedback";
    };

    const showFeedback = (form, message, type) => {
      const target = form.querySelector(".form-feedback");
      if (!target) {
        return;
      }

      target.textContent = message;
      target.className = `form-feedback form-feedback-${type}`;
      target.hidden = false;
    };

    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        clearFeedback(contactForm);

        if (!contactForm.reportValidity()) {
          return;
        }

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin ms-2"></i>';

        const data = new FormData(contactForm);

        fetch('send-contact.php', {
          method: 'POST',
          body: data
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(res => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;

          if (res.success) {
            showFeedback(contactForm, res.message, "success");
            contactForm.reset();
            window.location.href = 'thankyou.php';
          } else {
            showFeedback(contactForm, res.message, "error");
          }
        })
        .catch(err => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
          showFeedback(
            contactForm,
            "An error occurred. Please try again later or contact us directly.",
            "error"
          );
        });
      });
    }

    const careersForm = document.getElementById("careers-form");
    if (careersForm) {
      careersForm.addEventListener("submit", (event) => {
        event.preventDefault();
        clearFeedback(careersForm);

        if (!careersForm.reportValidity()) {
          return;
        }

        const resumeInput = careersForm.querySelector('input[type="file"]');
        const resumeFile = resumeInput?.files?.[0];
        const allowedExtensions = ["pdf", "doc", "docx"];
        const maxSize = 5 * 1024 * 1024;

        if (!resumeFile) {
          showFeedback(
            careersForm,
            "Please attach your resume before you submit the application.",
            "error"
          );
          return;
        }

        const extension = resumeFile.name.split(".").pop().toLowerCase();
        if (!allowedExtensions.includes(extension)) {
          showFeedback(
            careersForm,
            "Only PDF and Word documents are allowed.",
            "error"
          );
          return;
        }

        if (resumeFile.size > maxSize) {
          showFeedback(
            careersForm,
            "Please upload a file smaller than 5 MB.",
            "error"
          );
          return;
        }

        const submitBtn = careersForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin ms-2"></i>';

        const data = new FormData(careersForm);

        fetch('send-career.php', {
          method: 'POST',
          body: data
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(res => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;

          if (res.success) {
            showFeedback(careersForm, res.message, "success");
            careersForm.reset();
            window.location.href = 'thankyou.php';
          } else {
            showFeedback(careersForm, res.message, "error");
          }
        })
        .catch(err => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
          showFeedback(
            careersForm,
            "An error occurred. Please try again later or contact us directly.",
            "error"
          );
        });
      });
    }
  };

  const setupProductGallery = () => {
    const mainImage = document.getElementById("product-detail-main");
    const thumbnailButtons = document.querySelectorAll("[data-gallery-image]");

    if (!mainImage || !thumbnailButtons.length) {
      return;
    }

    thumbnailButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const image = button.getAttribute("data-gallery-image");
        const alt = button.getAttribute("data-gallery-alt") || "Product image";

        mainImage.src = image;
        mainImage.alt = alt;

        thumbnailButtons.forEach((item) => item.classList.remove("is-active"));
        button.classList.add("is-active");
      });
    });
  };

  const setupMobileMenu = () => {
    const navbarCollapse = document.getElementById("univentisNavbar");
    const body = document.body;

    if (!navbarCollapse) return;

    // Create Backdrop if not exists
    let backdrop = document.querySelector(".navbar-backdrop");
    if (!backdrop) {
      backdrop = document.createElement("div");
      backdrop.className = "navbar-backdrop";
      body.appendChild(backdrop);
    }

    // Function to safely get or create BS Collapse instance
    const getBsCollapse = () => {
      if (typeof bootstrap !== "undefined" && bootstrap.Collapse) {
        return (
          bootstrap.Collapse.getInstance(navbarCollapse) ||
          new bootstrap.Collapse(navbarCollapse, { toggle: false })
        );
      }
      return null;
    };

    // Sync Backdrop and Body Scroll using Bootstrap Events
    navbarCollapse.addEventListener("show.bs.collapse", () => {
      backdrop.classList.add("show");
      body.style.overflow = "hidden";
    });

    navbarCollapse.addEventListener("hide.bs.collapse", () => {
      backdrop.classList.remove("show");
      body.style.overflow = "";
    });

    // Handle backdrop click to close
    backdrop.addEventListener("click", () => {
      const bsCollapse = getBsCollapse();
      if (bsCollapse) {
        bsCollapse.hide();
      } else {
        navbarCollapse.classList.remove("show");
        backdrop.classList.remove("show");
        body.style.overflow = "";
      }
    });
  };

  const setupBackToTop = () => {
    // Create button element
    const btn = document.createElement("button");
    btn.className = "back-to-top";
    btn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    btn.setAttribute("aria-label", "Back to Top");
    document.body.appendChild(btn);

    const handleScroll = () => {
      if (window.scrollY > 400) {
        btn.classList.add("show");
      } else {
        btn.classList.remove("show");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    btn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  };

  startCounterAnimation();
  setupScrollNav();
  setupHomeProductFilters();
  setupForms();
  setupProductGallery();
  setupMobileMenu();
  setupBackToTop();
});
