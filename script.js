document.addEventListener('DOMContentLoaded', () => {
  fetchProducts();
});

async function fetchProducts() {
  const productContainer = document.getElementById('product-container');
  const response = await fetch('/api/products');
  const products = await response.json();

  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    productDiv.innerHTML = `
      <img src="product.jpg" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <p>Price: $${product.price.toFixed(2)}</p>
      <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
    `;

    productContainer.appendChild(productDiv);
  });
}

function addToCart(productName, price) {
  fetch('/api/cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ productName, price }),
  })
    .then(response => response.text())
    .then(message => alert(message));
}

function viewCart() {
  // Implement your logic to view the cart
  alert('View Cart functionality to be implemented!');
}
