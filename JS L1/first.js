/*console.log("Welcome to Java Script!");
console.log("Harshita Raj");
console.log("May 16 20:08"); */
let fullName="Tony Stark";
let age=24;
let price=99.99;
x=null;
y=undefined;
console.log(fullName);
console.log(age);
console.log(price);
console.log(x);
console.log(y);

isFollow=false;
console.log(isFollow);

const PI=3.145;
console.log(PI);

let a;
console.log(a);

{
    let a = 5;
    console.log(a);  // A Block.
};
{
    let a = 10;
    console.log(a);  // Another Block.
};

const student = {
    fullName : "Rahul Kumar",
    age : 20,
    cgpa : 8.2,
    isPass : true
};

console.log(student.age);
console.log(student["age"]); // Two methods to access keys in an object.

student["age"] = student["age"] + 1;
console.log(student.age);

student.age = student.age + 5;
console.log(student.age);
