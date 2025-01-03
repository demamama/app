document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('product-modal');
    const closeModal = document.getElementById('close-modal');
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.addEventListener('click', () => {
            modal.style.display = 'flex';
        });
    });


    modal.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.remove('hidden');
        });
    });
// Закрытие модального окна
closeModal.addEventListener('click', () => {
modal.classList.add('hidden');
});

});