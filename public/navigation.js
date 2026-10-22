const navigationLinks = document.querySelectorAll(
  ".site-nav__links a[href^='#'], .mobile-nav__panel a[href^='#']",
);
const siteHeader = document.querySelector(".site-header");
const heroImage = document.querySelector(".hero__image");
const newsHero = document.querySelector(".news-hero");
const newsPostHero = document.querySelector(".news-post-hero");
const contactPageHero = document.querySelector(".contact-page-hero");
const digitalPlatformHero = document.querySelector(".digital-platform-hero");
const careersHero = document.querySelector(".careers-hero");
const aboutPageHero = document.querySelector(".about-page-hero");
const careerApplicationHero = document.querySelector(".career-application-hero");
const servicesPageHero = document.querySelector(".services-page-hero");

function setActiveNavigation(hash) {
  const activeHash = hash && hash !== "#" ? hash : "#home";

  navigationLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === activeHash;

    link.classList.toggle("site-nav__link--active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    setActiveNavigation(link.getAttribute("href"));

    const mobileMenu = link.closest(".mobile-nav");
    if (mobileMenu) mobileMenu.removeAttribute("open");
  });
});

window.addEventListener("hashchange", () => setActiveNavigation(window.location.hash));
setActiveNavigation(window.location.hash);

function updateStickyHeader() {
  if (!siteHeader) return;

  const stickyStart = heroImage
    ? heroImage.getBoundingClientRect().top + window.scrollY
    : newsHero
      ? newsHero.getBoundingClientRect().top + window.scrollY + 32
      : newsPostHero
        ? newsPostHero.getBoundingClientRect().top + window.scrollY + 32
        : contactPageHero
          ? contactPageHero.getBoundingClientRect().top + window.scrollY + 32
        : digitalPlatformHero
          ? digitalPlatformHero.getBoundingClientRect().top + window.scrollY + 32
        : careersHero
          ? careersHero.getBoundingClientRect().top + window.scrollY + 32
        : aboutPageHero
          ? aboutPageHero.getBoundingClientRect().top + window.scrollY + 32
        : careerApplicationHero
          ? careerApplicationHero.getBoundingClientRect().top + window.scrollY + 32
        : servicesPageHero
          ? servicesPageHero.getBoundingClientRect().top + window.scrollY + 32
      : 0;
  siteHeader.classList.toggle("site-header--fixed", window.scrollY >= stickyStart);
}

window.addEventListener("scroll", updateStickyHeader, { passive: true });
window.addEventListener("resize", updateStickyHeader);
updateStickyHeader();

document.querySelectorAll(".career-application__date input[type='date']").forEach((input) => {
  const dateLabel = input.closest(".career-application__date")?.querySelector(".career-application__date-label");
  if (!dateLabel) return;

  input.addEventListener("change", () => {
    if (!input.value) {
      dateLabel.textContent = "dd / mm / yyyy";
      return;
    }

    const [year, month, day] = input.value.split("-");
    dateLabel.textContent = `${day} / ${month} / ${year}`;
  });
});

document.querySelectorAll(".career-application__upload input[type='file']").forEach((input) => {
  const uploadLabel = input.closest(".career-application__upload")?.querySelector("span");
  if (!uploadLabel) return;

  input.addEventListener("change", () => {
    const filenames = Array.from(input.files || []).map((file) => file.name);
    uploadLabel.textContent = filenames.length ? filenames.join(", ") : input.name === "cv"
      ? "CLICK TO UPLOAD YOUR CV."
      : "CLICK TO UPLOAD CERTIFICATION AND DOCUMENTS";
  });
});
