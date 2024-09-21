let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function changeSlide(direction) {
    currentIndex = (currentIndex + direction + slides.length) % slides.length;
    updateSlidePosition();
}

function updateSlidePosition() {
    const offset = -currentIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

// Inicializa la clase 'active' en la primera diapositiva.
updateSlidePosition();