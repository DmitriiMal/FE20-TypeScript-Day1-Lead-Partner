"use strict";
let nameObj = { fName: "Johannes", lName: "Zelenak" };
// console.log(nameObj.fName);
// console.log(nameObj.lName);
let result = document.getElementById("resultB2");
result.innerHTML = `${nameObj.fName} ${nameObj.lName}`;
let nameArray = [];
for (let i = 0; i < 10; i++) {
    nameArray.push(nameObj.fName);
}
console.log(nameArray);
nameArray.forEach(function (value) {
    result.innerHTML += `<p>${value}</p>`;
});
function after5Seconds() {
    for (let i = 0; i < 10; i++) {
        console.log(nameObj.lName);
    }
}
setTimeout(() => { after5Seconds(); }, 5000);
