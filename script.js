const slides = document.querySelectorAll('.slide');
const buttons = document.querySelectorAll('.controls button');
let currentSlide = 0;

function showSlide(n) {
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    slides[n].style.display = 'block';
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        showSlide(index);
    });
});

setInterval(nextSlide, 3000);

// 最初のスライドを表示
showSlide(0);
