"use strict";
// ////////////////// //
// /// Basic Ex 1 /// //
// ////////////////// //
// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 1; i <= numbers.length; i++) {
//   // console.log(`Nummber ${i}`);
//   let ex1 = document.getElementById('ex1') as HTMLElement;
//   ex1.innerHTML += `<hr>Nummber ${i}`;
//   for (let j = 1; j <= numbers.length; j++) {
//     // console.log(`${i} * ${j} = ${i * j}`);
//     ex1.innerHTML += `<p>${i} * ${j} = ${i * j}<p>`;
//   }
// }
// ////////////////// //
// /// Basic Ex 2 /// //
// ////////////////// //
let fullName = [
    {
        fName: 'Dmitrii',
        lName: 'Malyshkin',
    },
];
let ex2 = document.getElementById('ex2');
ex2.innerHTML += `${fullName[0].fName} ${fullName[0].lName} <br>`;
let fullNameArr = [
    {
        fName: 'Dmitrii',
        lName: 'Malyshkin',
    },
    {
        fName: 'Dmitrii',
        lName: 'Malyshkin',
    },
    {
        fName: 'Dmitrii',
        lName: 'Malyshkin',
    },
    {
        fName: 'Dmitrii',
        lName: 'Malyshkin',
    },
    {
        fName: 'Dmitrii',
        lName: 'Malyshkin',
    },
    {
        fName: 'Dmitrii',
        lName: 'Malyshkin',
    },
    {
        fName: 'Dmitrii',
        lName: 'Malyshkin',
    },
    {
        fName: 'Dmitrii',
        lName: 'Malyshkin',
    },
    {
        fName: 'Dmitrii',
        lName: 'Malyshkin',
    },
    {
        fName: 'Dmitrii',
        lName: 'Malyshkin',
    },
];
let ex22 = document.getElementById('ex2-2');
setTimeout(() => {
    fullNameArr.forEach((element) => {
        ex22.innerHTML += `<p>${element.fName}</p>`;
    });
}, 5000);
// ////////////////// //
// /// Basic Ex 3 /// //
// ////////////////// //
let names = [
    'Olivia',
    'Ethan',
    'Isabella',
    'Mason',
    'Sophia',
    'Liam',
    'Ava',
    'Noah',
    'Mia',
    'Aiden',
];
//1
let ex31 = document.getElementById('ex3-1');
names.forEach((val, i) => {
    ex31.innerHTML += `<p>${i}</p>`;
});
//2
let ex32 = document.getElementById('ex3-2');
names.forEach((val, i) => {
    ex32.innerHTML += `<p>${val}</p>`;
});
//2
let ex33 = document.getElementById('ex3-3');
names.forEach((val, i) => {
    ex33.innerHTML += `<p>Index of ${val} ${i}is </p>`;
});
