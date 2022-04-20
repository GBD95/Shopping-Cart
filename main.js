///////CART MODAL///////

let modal = document.querySelector('#cartModal');
let cartButton = document.querySelector('#cart');
let closeButton = document.querySelector('#close');

// console.log(modal);
// console.log(cartButton);

cartButton.onclick = function() {
    modal.style.display = 'block';
}

closeButton.onclick = function() {
    modal.style.display = 'none';
}

///////NEW PRODUCT MODAL///////

let newProductModal = document.querySelector('#new-product-modal');
let newProductButton = document.querySelector('#new-product');
let newProductCloseButton = document.querySelector('#close-new-product');

newProductButton.onclick = function() {
    newProductModal.style.display = 'block';
}

newProductCloseButton.onclick = function() {
    newProductModal.style.display = 'none';
}

///////INSERTING NEW PRODUCT//////////////

const newProductName = document.querySelector('#new-product-name');
const newProductPrice = document.querySelector('#new-product-price');
const newProductDescription = document.querySelector('#new-product-descrtiption');
const subbmitButton = document.querySelector('#subbmit-btn');
const mainContainer = document.querySelector('.main-container');

// console.log(newProductName);
// console.log(newProductPrice);
// console.log(newProductDescription);
// console.log(subbmitButton);
const products = [];

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('#buy-btn');
    addToCartButtons.forEach(btn => {
        
        // addToCart.addEventListener('click', () => addProductToCart(newProduct));
        // console.log(btn);
        btn.addEventListener('click', () => {

            const name = btn.parentElement.querySelector('.product-name').innerText;
            const price = btn.parentElement.querySelector('.product-price').innerText;
            const description = btn.parentElement.querySelector('.product-description').innerText;
            
            const selectedProduct = {
                name,
                price,
                description
            }

            addProductToCart(selectedProduct);

        })
    });
})

subbmitButton.onclick = function(e) {
    e.preventDefault();
    const newProduct = {
        name: newProductName.value,
        price: newProductPrice.value,
        description: newProductDescription.value
    };

    const product = document.createElement('div');
    product.classList.add('product');
    product.innerHTML = `
        <img class="product-img" src="/images/default-coffe.jpg" alt="Coffe beans">
        <div class="product-text">
            <h3 class="product-name">${newProduct.name}</h3>
            <h3 class="product-price">${newProduct.price} din</h3>
            <p class="product-description">${newProduct.description}</p>
            <button id="buy-btn" class="btn">Add to cart</button>
        </div>
    `
    mainContainer.appendChild(product);
    const addToCart = product.querySelector('#buy-btn');
    addToCart.addEventListener('click', () => addProductToCart(newProduct));
    newProductModal.style.display = 'none';
}


function addProductToCart(product){
    products.push(product);
    const modalBody = document.querySelector('.modal-body');
    const cartProduct = document.createElement('div');
    cartProduct.classList.add('cart-product');
    cartProduct.innerHTML = `
        
        <p class="product-name-cart">${product.name}</p>
        <p class="product-price-cart">${product.price}</p>
        <p class="product-description-cart">${product.description}</p>
    `;
    modalBody.appendChild(cartProduct);
    const priceSum = document.querySelector('#sum');
    let sum;
    sum += parseInt(product.price);
    priceSum.innerHTML = sum;
    // console.log(products);
};