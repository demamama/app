const products = [
    { id: 1, name: 'YZY BULLY LONG BLACK', price: 4490, description: 'под заказ', imageUrl: 'https://bully.yeezy.com/cdn/shop/files/BULLYLONGSLEEVEBLACK-ZPwznt.png?height=900&v=1729850737&width=1426' },
    { id: 2, name: 'YZY BULLY LONG WHITE', price: 4490, description: 'под заказ', imageUrl: 'https://bully.yeezy.com/cdn/shop/files/BULLYLONGSLEEVEWHITE-ZPwznt.png?height=900&v=1729850738&width=1426' },
    { id: 3, name: 'YZY BULLY TEE WHITE', price: 4490, description: 'под заказ', imageUrl: 'https://bully.yeezy.com/cdn/shop/files/BULLYTEEWHITE-ZPwznt.png?height=900&v=1729849297&width=1100' },
    { id: 4, name: 'YZY BULLY TEE BLACK', price: 4490, description: 'под заказ', imageUrl: 'https://bully.yeezy.com/cdn/shop/files/BULLYTEEBLACK-ZPwznt.png?height=900&v=1729849297&width=1100' }
];

const cart = [];
const productContainer = document.getElementById('product-list');
const cartContainer = document.getElementById('cart-items');
const checkoutButton = document.getElementById('checkout-button');
const searchInput = document.getElementById('search-input');

// Функция отображения товаров с фильтрацией
function displayProducts(filterText = '') {
    productContainer.innerHTML = '';
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(filterText.toLowerCase()));

    filteredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}" class="product-image">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Цена: ${product.price} руб.</p>
            <button onclick="addToCart(${product.id})">Добавить в корзину</button>
        `;
        productContainer.appendChild(productElement);
    });
}

// Обработчик поиска
searchInput.addEventListener('input', (event) => {
    displayProducts(event.target.value);
});

// Остальной код для корзины (без изменений)
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    displayCart();
}

function displayCart() {
    cartContainer.innerHTML = '';
    cart.forEach((product, index) => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <h4>${product.name}</h4>
            <p>Цена: ${product.price} руб.</p>
            <button onclick="removeFromCart(${index})">Удалить</button>
        `;
        cartContainer.appendChild(cartItem);
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

checkoutButton.addEventListener('click', () => {
    if (cart.length === 0) {
        alert('ваша корзина пуста');
    } else {
        alert('спасибо за заказ!');
        cart.length = 0;
        displayCart();
    }
});

displayProducts(); // Инициализация каталога
