document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel-image');
    const totalImages = images.length;

    function updateCarousel() {
        images.forEach((img, index) => {
            img.classList.toggle('active', index === currentIndex);
        });
    }

    document.querySelector('.next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    });

    document.querySelector('.prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateCarousel();
    });

    updateCarousel(); // Устанавливаем начальное состояние карусели
});
