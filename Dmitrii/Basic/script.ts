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

let fullName: Array<{ fName: string; lName: string }> = [
  {
    fName: 'Dmitrii',
    lName: 'Malyshkin',
  },
];
let ex2 = document.getElementById('ex2') as HTMLElement;
ex2.innerHTML += `${fullName[0].fName} ${fullName[0].lName} <br>`;

let fullNameArr: Array<{ fName: string; lName: string }> = [
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

let ex22 = document.getElementById('ex2-2') as HTMLElement;

setTimeout(() => {
  fullNameArr.forEach((element) => {
    ex22.innerHTML += `<p>${element.fName}</p>`;
  });
}, 5000);

// ////////////////// //
// /// Basic Ex 3 /// //
// ////////////////// //
