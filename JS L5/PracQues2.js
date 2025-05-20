/*
//Question1
let Arr = [89, 90, 95 ,93 ,87];

let ninetyPlus = Arr.filter((val) => {
    return val > 90;
})
console.log(ninetyPlus);
*/
//Question2(a)
let n = prompt("Enter any Number:");
let arr = [];
for(let i = 1; i <= n; i++) {
    arr[i-1] = i;
}
console.log(arr);

// (b)
let sum = arr.reduce((res, curr ) => {
    return res + curr;
})
console.log("sum of all numbers = ", sum);

// (c)
let mul = arr.reduce((res, curr ) => {
    return res * curr;
})
console.log("product of all numbers = ", mul);
