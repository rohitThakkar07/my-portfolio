document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const sunIcon = document.getElementById("sun-icon");
  const moonIcon = document.getElementById("moon-icon");
  const body = document.body;

  const updateThemeIcons = () => {
    if (body.getAttribute("data-bs-theme") === "dark") {
      sunIcon.style.display = "inline";
      moonIcon.style.display = "none";
    } else {
      sunIcon.style.display = "none";
      moonIcon.style.display = "inline";
    }
  };

  themeToggleBtn.addEventListener("click", () => {
    if (body.getAttribute("data-bs-theme") === "dark") {
      body.setAttribute("data-bs-theme", "light");
    } else {
      body.setAttribute("data-bs-theme", "dark");
    }
    updateThemeIcons();
  });

  updateThemeIcons();

  const downloadToast = document.getElementById("downloadToast");
  const toast = new bootstrap.Toast(downloadToast);
  document.getElementById("downloadPdfBtn").addEventListener("click", () => {
    console.log("Show");
    toast.show();
  });

  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");

  const activateNavLink = (id) => {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
    const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
    if (activeLink) {
      activeLink.classList.add("active");
    }
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activateNavLink(entry.target.id);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});
