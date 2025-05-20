/*
//forEach Function
let arr = ["pune", "mumbai", "delhi"];

arr.forEach((val , idx) => {  // value for each element
    console.log(val.toLocaleUpperCase(), idx); 
})

let Arr = [5,7,8,9];
Arr.forEach((Arr) => {
    console.log(Arr ** 2);
})

//MORE ARRAY METHODS

// Map
let Arr = [5,7,8,9];
Arr.map((val) => {
    console.log(val);
})

let Arr = [5,7,8,9];
let newArr = Arr.map((val) => {
    return val**2;
})
console.log(newArr);


//filter
let arr = [1,2,3,4,5,6,7]

let evenArr = arr.filter((val) => {
    return val % 2 === 0;
})

console.log(evenArr);
*/

//Reduce
let arr = [1,2,3,4,5,6,7]
const output = arr.reduce((res, curr ) => {
    return res + curr;
})
console.log(output);
// to print largest no. in the array
let Arr = [5,6,2,1,101,8]
const Output = Arr.reduce((prev, curr ) => {
    return prev > curr ?prev : curr ;
})
console.log(Output);