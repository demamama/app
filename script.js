const products = [
    {
        id: 1,
        name: 'YZY BULLY LONG BLACK',
        price: 4490,
        description: 'под заказ',
        imageUrl: 'https://bully.yeezy.com/cdn/shop/files/BULLYLONGSLEEVEBLACK-ZPwznt.png?height=900&v=1729850737&width=1426' // замените на реальный URL изображения
    },
    {
        id: 2,
        name: 'YZY BILLY LONG WHITE',
        price: 4490,
        description: 'под заказ',
        imageUrl: 'https://bully.yeezy.com/cdn/shop/files/BULLYLONGSLEEVEWHITE-ZPwznt.png?height=900&v=1729850738&width=1426'
    },
    {
        id: 3,
        name: 'YZY BILLY TEE WHITE',
        price: 4490,
        description: 'под заказ',
        imageUrl: 'https://bully.yeezy.com/cdn/shop/files/BULLYTEEWHITE-ZPwznt.png?height=900&v=1729849297&width=1100'
    },
    {
        id: 4,
        name: 'YZY BILLY TEE BLACK',
        price: 4490,
        description: 'под заказ',
        imageUrl: 'https://bully.yeezy.com/cdn/shop/files/BULLYTEEBLACK-ZPwznt.png?height=900&v=1729849297&width=1100'
    }
];


const cart = [];

const productContainer = document.getElementById('product-list');
const cartContainer = document.getElementById('cart-items');
const checkoutButton = document.getElementById('checkout-button');

// Функция отображения товаров
function displayProducts() {
    productContainer.innerHTML = ''; // Очистим контейнер перед добавлением товаров

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product'); // Добавим класс для стилизации
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


// Функция добавления товара в корзину
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    displayCart();
}

// Функция отображения корзины
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

// Функция удаления товара из корзины
function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

// Обработчик оформления заказа
checkoutButton.addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Ваша корзина пуста');
    } else {
        alert('Спасибо за заказ!');
        cart.length = 0;
        displayCart();
    }
});
// Инициализация API Telegram Web App
const telegram = window.Telegram.WebApp;

telegram.ready(); // Уведомляем Telegram, что miniapp загружен

// Получаем данные о пользователе
const user = telegram.initDataUnsafe.user;

if (user) {
    // Приветствие с именем пользователя
    const greetingElement = document.createElement('p');
    greetingElement.textContent = `Здравствуйте, ${user.first_name}! Добро пожаловать в наш магазин.`;
    document.body.prepend(greetingElement);
} else {
    // Если данные о пользователе отсутствуют
    console.warn("Данные пользователя не найдены.");
}

// Обработчик оформления заказа
checkoutButton.addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Ваша корзина пуста');
    } else {
        // Подготовим данные заказа для отправки
        const orderDetails = cart.map(item => `${item.name} - ${item.price} руб.`).join('\n');
        
        // Покажем пользователю краткое резюме заказа
        alert(`Ваш заказ:\n${orderDetails}`);
        
        // Отправка данных заказа боту
        telegram.sendData(JSON.stringify({
            user_id: user.id,
            order: orderDetails
        }));

        // Очищаем корзину после оформления заказа
        cart.length = 0;
        displayCart();
    }
});


// Запуск приложения
displayProducts();

