document.addEventListener("DOMContentLoaded", () => {
    conts elementosCarousel = document.querySelectorAll(".carousel");
    M.Carousel.init(elementosCarousel, {
        duration: 150
    });
});