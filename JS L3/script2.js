/*Strings
let str="Apna College";
console.log(str.length);
*/

//template literal
let specialString = `This is a template literal`;
console.log(typeof specialString);

let obj = {
    item : "pen",
    price : 10,
};

let output = `the cost of  ${obj.item} is ${obj.price} rupees`;
console.log(output);

console.log("Apna\nCollege");

// String Methods :
//console.log(str.toUpperCase()); 

let str = "hello";
console.log(str.slice(3));
console.log(str.slice(1,4)); //returns value with end value non-including
console.log(str.replace("e","a"));

