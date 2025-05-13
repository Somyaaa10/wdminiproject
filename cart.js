const cartItemsContainer = document.querySelector('.cart-items');
const cartTotalElement = document.querySelector('.cart-total');
const grandTotalElement = document.querySelector('.grand-total');

function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <h3>${item.name}</h3>
            <p>Price: ₹${item.price.toFixed(2)}</p>
            <button class="remove-btn" data-index="${index}">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
        total += item.price;
    });

    cartTotalElement.textContent = `₹${total.toFixed(2)}`;
    grandTotalElement.textContent = `₹${(total + 2.99).toFixed(2)}`; // Including delivery fee
}

cartItemsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-btn')) {
        const index = e.target.dataset.index;
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart();
    }
});

document.addEventListener('DOMContentLoaded', loadCart);

document.addEventListener('DOMContentLoaded', () => {
    const placeOrderButton = document.getElementById('place-order-btn');

    if (placeOrderButton) {
        placeOrderButton.addEventListener('click', () => {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];

            if (cart.length === 0) {
                alert('Your cart is empty. Please add items to your cart before placing an order.');
                return;
            }

            // Simulate placing the order
            alert('Thank you for your order! Your food is on its way.');

            // Clear the cart after placing the order
            localStorage.removeItem('cart');
            window.location.reload(); // Reload the page to update the cart
        });
    }
});
