"use strict";
//current object formatter
const currencyFormater = new Intl.NumberFormat("de-AT", {
    style: "currency",
    currency: "EUR",
});
//select the products row and add items dynamically
let productsRow = document.querySelector(".products");
for (let product of products) {
    productsRow.innerHTML += `
        <div class="card product col my-4" style="width: 300px;">
            <img class="card-img-top mt-2 px-3" src="${product.image}" alt="${product.name}">
            <div class="card-body px-3 py-0">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, libero.</p>
                <p class="card-text h3 text-end">${currencyFormater.format(product.price)}</p>
                <p class="card-text3 d-flex justify-content-end"><button class="btn w-75 product-button"><i class="fs-4 bi bi-cart-plus"></i> Add to cart</button></p>
            </div>
        </div>
    `;
}
