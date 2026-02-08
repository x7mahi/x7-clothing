// ----------------------------
// Simple Cart Functionality
// ----------------------------

let cart = [];
let cartCount = 0;
let cartTotal = 0;

// Add to cart buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        const price = parseFloat(button.getAttribute('data-price'));
        cart.push({ product, price });
        cartCount++;
        cartTotal += price;
        updateCart();
    });
});

// Update cart display
function updateCart() {
    const cartCountEl = document.getElementById('cart-count');
    const cartTotalEl = document.getElementById('cart-total');
    const cartItemsEl = document.getElementById('cart-items');

    if(cartCountEl) cartCountEl.textContent = cartCount;
    if(cartTotalEl) cartTotalEl.textContent = cartTotal.toFixed(2);

    if(cartItemsEl) {
        cartItemsEl.innerHTML = cart.map(item => `<p>${item.product} - $${item.price}</p>`).join('');
    }
}

// ----------------------------
// Category Filtering
// ----------------------------
document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const category = button.getAttribute('data-category');

        document.querySelectorAll('.product-card').forEach(card => {
            if(category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// ----------------------------
// Smooth Scroll
// ----------------------------
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if(section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
