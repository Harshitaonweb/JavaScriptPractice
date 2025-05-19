// Question1
let marks = [85, 97, 44, 37, 76, 60];

let sum = 0;
for (let val of marks) {
    sum += val;
}
let avg = sum / marks.length;
console.log(`avg marks of the class is ${avg}`);

//Question2
let items = [250, 645, 300, 900, 50];

let i = 0;
for ( let val of items) {
    console.log(`Value at index ${i} = ${val}`);
    let offer = val / 10;
    items[i] = items[i] - offer;
    console.log(`Value after offer = ${items[i]}`);
    i++;
}


