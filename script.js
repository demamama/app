document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel-image');
    const lines = document.querySelectorAll('.carousel-indicators .line');
    const totalImages = images.length;

    function updateCarousel() {
        images.forEach((img, index) => {
            img.classList.toggle('active', index === currentIndex);
        });
        lines.forEach((line, index) => {
            line.classList.toggle('active', index === currentIndex);
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

    lines.forEach((line, index) => {
        line.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    updateCarousel(); // Устанавливаем начальное состояние карусели
});
const modal = document.getElementById('modal');
const modalCloseButton = document.createElement('button');

// Открытие модального окна
document.querySelector('.announcements h2').addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Закрытие окна при нажатии за пределами контента
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
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

document.addEventListener('DOMContentLoaded', () => {
    // Получаем элементы
    const modal = document.getElementById('modal');
    const openModalBtns = document.querySelectorAll('.announcement-banner img'); // Нажатие на изображение
    const closeModalBtn = document.querySelector('.modal .close-btn');

    // Открытие модального окна
    openModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.remove('hidden');
        });
    });

    // Закрытие модального окна
    closeModalBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // Закрытие по клику на затемнённый фон
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.add('hidden');
        }
    });
});
