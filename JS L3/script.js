/*For Loop
for (let count = 1; count <= 10; count++) {
    console.log("Harshita");
}
 
// Calculate sum of 1 to n

let sum = 0;
let n = 7; 
for (let i = 1; i <= n; i++) {  /
    sum = sum + i;
}
console.log("sum = ", sum)
console.log("Loop has ended"); */

/*While loop

let i = 1;
while (i <= 5)   {
    console.log("i = ", i);
    i++;
}
*/

/* Do-while Loop

let i = 1;
do{
    console.log ("i = ",i);
    i++;
} while (i <= 10); */

/* For-Of Loop

let str = "javaScript";

let size = 0; // to calculate size of the string
for (let val of str) {           // iterator -> characters
    console.log("val = ", val);
    size++;
}
console.log("string size = ", size);
*/

// For-In Loop

let student = {
    name : "Rahul Kumar",
    age : 20,
    cgpa : 7.5,
    isPass : true
};

for (let key in student) {
    console.log("key = ", key, " value = ", student[key]);
}