let namesArr: string[] = ["Amy","Bea","Chris","Debby","Frank"]
const resultB3 = document.getElementById("resultB3") as HTMLElement;

for(let index in namesArr) {
    resultB3.innerHTML += `<p>${index}</p>`;
    // console.log(index);
};
resultB3.innerHTML += `<hr>`;

for(let value of namesArr) {
    resultB3.innerHTML += `<p>${value}</p>`
};
resultB3.innerHTML += `<hr>`;

for(let [index,value] of Object.entries(namesArr)) {
    resultB3.innerHTML += `<p>Index: ${index}, Value: ${value}</p>`
};
resultB3.innerHTML += `<hr>`;