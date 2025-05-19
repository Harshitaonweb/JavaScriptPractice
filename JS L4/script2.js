// Array Methods
//  Push() :
let foodItems = ["potato", "apple", "litchi", "tomato"];
foodItems.push("chips");
foodItems.push("burger", "panner");
console.log(foodItems);

//  Pop()

let itemDeleted = foodItems.pop();
console.log(foodItems);
console.log(`deleted item = ${itemDeleted}`);

console.log(foodItems.toString());

// Concat

let marvel_heroes = ["thor", "spiderman", "ironman" ];
let dc_heroes = ["superman", "batman", "flash"];

let heroes = marvel_heroes.concat(dc_heroes);
console.log(heroes);

// Unshift
marvel_heroes.unshift("ms.marvel");

// Shift
let val = marvel_heroes.shift();
console.log("deleted value = ", val);

// Slice
console.log(marvel_heroes.slice(0,2));

// Splice
let arr = [1,2,3,4,5,6,7];
arr.splice(2,2,101,102);
console.log(arr);
// add element
arr.splice(2,0,100);
console.log(arr);
// delete element
arr.splice(4,1);
console.log(arr);
// replace element
arr.splice(1,1,99); // replaced 2 with 99
console.log(arr);