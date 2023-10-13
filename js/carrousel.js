// JavaScript para el carrusel
const carousel = document.getElementById("carousel");
const images = document.querySelectorAll(".imagenesCarrousel");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const dots = document.getElementById("dots").querySelectorAll(".dot");
let currentIndex = 0;

function showImage(index) {
    images[currentIndex].style.display = "none";
    dots[currentIndex].classList.remove("active");
    currentIndex = index;
    images[currentIndex].style.display = "block";
    dots[currentIndex].classList.add("active");
}

prevButton.addEventListener("click", () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(prevIndex);
});

nextButton.addEventListener("click", () => {
    const nextIndex = (currentIndex + 1) % images.length;
    showImage(nextIndex);
});

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        showImage(index);
    });
});

showImage(0);
