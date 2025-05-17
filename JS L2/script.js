/*Arithmetic Operators
let a = 5;
let b = 2;
console.log("a = ",a, ", b = ",b); 
console.log("a + b = ", a + b); //Addition
console.log("a - b = ", a - b); //Subtraction
console.log("a * b = ", a * b); //Multiplication
console.log("a / b = ", a / b); //Division
console.log("a % b = ", a % b); //Remainder
console.log("a ** b = ", a ** b); //Power (a^b i.e. 5^2) 
*/

/*Unary Operators
let c = 5;
let d = 2;
console.log("c = ",c, ", d = ",d); 
c++; //Post Increment ( c++ = c + 1) shortform for c+1 (value changes after the operation)
console.log("c = ", c);
d--; //Post Decrement (d-- = d - 1) shortform for c-1
console.log("d = ", d);
let e = 3;
let f =7;
console.log("++e = ", ++e); //Pre Increment ( i.e Value changed beforewards and then printed)
console.log("--f = ", --f); //Pre decrement ( i.e Value changed beforewards and then printed) 
*/

/*Assignment Operators 
let a = 5;
let b = 8;
let c = 5;
let d = 8;
console.log("a = ", a, ", b = ", b, "c = ", c, ", d = ", d);

a += 4; //It means (a = a + 4)
console.log("a = ", a); // That is( 5 + 4 = 9)

b -= 4; // (b = b - 4)
console.log("b = ", b); // That is( 8 - 4 = 4)

c *= 4;
console.log("c = ", c); // That is( 5 * 4 = 20)

d %= 4;
console.log("d = ", d); // That is( 8 % 4 = 0)
*/

/*Comparision Operators
let a = 5; //number
let b = 2;
let c = 5;
let d = "5"; //string
console.log("a = ", a, ", b = ", b, "c = ", c, ", d = ", d);

console.log("a == b", a==b ); //false
console.log("a != b", a!=b ); //true
console.log("a != c", a!=c ); //false
console.log("a == d", a==d ); //true as (==) operator doesn't compares data types and the string converts into a number while operating.
console.log("a === d", a===d ); //false as values are smililar but data type is different
*/
/*Logical Operators
let a = 6;
let b = 5;
let cond1 = a > b; //true
let cond2 = a === 6; //true
console.log("cond1 && cond2 = ", cond1 && cond2);
console.log("cond1 || cond2 = ", cond1 || cond2);
console.log("!(6 < 5) = ", !(a < b)); // true As (6 < 5) is false and (!) it's opposite is true
*/

/*Conditional Operators
let age = 17;

if (age >= 18) {                              // if statement
    console.log("you can vote");
}
if (age < 18) {
    console.log("you cannot vote");
}

let mode = "light"
let color;

if (mode === "dark") {
    color = "black";                           // if-else statement
} else {
    color = "white";
}

console.log(color)
*/

// Conditional Statements

let num = 20;
if (num % 2 === 0) {
    console.log(num, "is even");
} else {
    console.log(num, "is odd");
}

let mode = "Night"
let color;

if (mode === "dark") {
    color = "black";
} else if (mode === "light") {
    color = "white";
} else {
    color = "none"
}
console.log(color)

//Ternary Operator
// (condition? true output : false output)
let age = 16;
let result = age >= 18 ? "adult" : "not adult"
console.log(result);