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

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const isOpen = faqItem.classList.contains('open');

        // Закрываем все вопросы
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('open');
            item.querySelector('.faq-answer').style.display = 'none';
        });

        // Если вопрос не был открыт, открываем его
        if (!isOpen) {
            faqItem.classList.add('open');
            faqItem.querySelector('.faq-answer').style.display = 'block';
        }
    });
});
