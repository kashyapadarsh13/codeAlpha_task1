const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    lightbox.classList.add("show");
    lightboxImg.src = images[currentIndex].src;
}

function closeLightbox() {
    lightbox.classList.remove("show");
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;
    lightboxImg.src = images[currentIndex].src;
}

/* Close Lightbox when clicking outside */
window.onclick = function(event) {
    if (event.target === lightbox) {
        closeLightbox();
    }
};

/* Add keyboard controls */
document.addEventListener("keydown", function(event) {
    if (lightbox.classList.contains("show")) {
        if (event.key === "ArrowLeft") {
            changeImage(-1);
        } else if (event.key === "ArrowRight") {
            changeImage(1);
        } else if (event.key === "Escape") {
            closeLightbox();
        }
    }
});