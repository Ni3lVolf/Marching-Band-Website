let currentSlideIndex = 0;
let slides = [];
let totalSlides = 0;

window.onload = function() {
    slides = document.querySelectorAll('.slide');
    totalSlides = slides.length;
    if (totalSlides > 0) {
        setInterval(showNextSlide, 3000); // FIX: Capitalized 'I' in setInterval
    }
};

function showNextSlide() {
    if (totalSlides === 0) return;
    slides[currentSlideIndex].classList.remove('active');
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    slides[currentSlideIndex].classList.add('active');
}
