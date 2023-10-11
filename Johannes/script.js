"use strict";
// let firstNr: number = 1;
// let secondNr: number = 1;
// let product: number = firstNr * secondNr;
let product;
let nrArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < nrArray.length; i++) {
    let arrayResult = document.getElementById(`resultB1`);
    for (let j = 0; j < nrArray.length; j++) {
        product = nrArray[i] * nrArray[j];
        // console.log(`${nrArray[i]} * ${nrArray[j]} = ${product}`);
        arrayResult.innerHTML += `
        <p>${nrArray[i]} * ${nrArray[j]} = ${product}<p>
        `;
    }
    arrayResult.innerHTML += `<hr>`;
}
