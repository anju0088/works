const slides = document.querySelectorAll('.slide');
const buttons = document.querySelectorAll('.controls button');

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

const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuContent = document.querySelector('.menu-content');

hamburgerMenu.addEventListener('click', () => {
    menuContent.classList.toggle('open');
    hamburgerMenu.classList.toggle('open');
});
