// Show/Hide Credit Card Fields
const paymentOptions = document.querySelectorAll('input[name="payment"]');
const creditCardDetails = document.querySelector('.credit-card-details');

paymentOptions.forEach(option => {
    option.addEventListener('change', function() {
        if (this.value === 'credit-card') {
            creditCardDetails.style.display = 'block';
        } else {
            creditCardDetails.style.display = 'none';
        }
    });
});

// Form Submit
const form = document.querySelector('.checkout-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Order Placed Successfully!');
    localStorage.removeItem('cart');
    window.location.href = 'index.html';
});
