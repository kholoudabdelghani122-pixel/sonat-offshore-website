const moreReadCarousel = document.querySelector("[data-more-read-carousel]");
const moreReadControls = document.querySelectorAll("[data-carousel-direction]");

moreReadControls.forEach((control) => {
  control.addEventListener("click", () => {
    if (!moreReadCarousel) return;

    const direction = control.dataset.carouselDirection === "next" ? 1 : -1;
    moreReadCarousel.scrollBy({ left: direction * 444, behavior: "smooth" });
  });
});
