"use strict";
let text = 'Hello world!';
console.table(menu);
//current object formatter
const currencyFormater = new Intl.NumberFormat('de-AT', {
    style: 'currency',
    currency: 'EUR',
});
//select the products and add items dynamically
let menuRow = document.querySelector('.product-list');
for (let product of menu) {
    menuRow.innerHTML += `
  <div class="col-sm-6 col-md-4 col-lg-3">
          <section class="card panel shadow">
            <div class="pro-img-box">
              <img
                src="${product.img}"
                alt />
              <a href="#" class="adtocart">
                <i class="fa fa-shopping-cart"></i>
              </a>
            </div>
            <div class="panel-body text-center">
              <h4>
                <a href="#" class="pro-title">${product.name}</a>
              </h4>
              <p>${product.description}</p>
              <p class="price">${currencyFormater.format(product.price)}</p>
            </div>
          </section>
        </div>

  `;
}
//product button selected
const addToCartBtn = document.querySelectorAll('.adtocart');
//cart declared
const cart = [];
