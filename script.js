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

function displayProducts(filterText = '') {
    productContainer.innerHTML = '';
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(filterText.toLowerCase()));
    filteredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product', 'col');
        productElement.innerHTML = `
            <div class="card animate__animated animate__fadeIn">
                <img src="${product.imageUrl}" alt="${product.name}" class="product-image card-img-top">
                <div class="card-body text-center">
                    <h3 class="card-title">${product.name}</h3>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text">Цена: ${product.price} руб.</p>
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">
                        <i class="fas fa-plus"></i> Добавить в корзину
                    </button>
                </div>
            </div>`;
        productContainer.appendChild(productElement);
    });
}

searchInput.addEventListener('input', (event) => {
    displayProducts(event.target.value);
});

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    displayCart();
    animateCart();
}

function displayCart() {
    cartContainer.innerHTML = '';
    cart.forEach((product, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('list-group-item');
        cartItem.innerHTML = `
            <span>${product.name} - ${product.price} руб.</span>
            <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">
                <i class="fas fa-trash"></i> Удалить
            </button>
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
        alert('Ваша корзина пуста');
    } else {
        alert('Спасибо за заказ!');
        cart.length = 0;
        displayCart();
    }
});

function animateCart() {
    cartContainer.classList.add('animate__animated', 'animate__bounce');
    cartContainer.addEventListener('animationend', () => {
        cartContainer.classList.remove('animate__animated', 'animate__bounce');
    });
}

displayProducts();