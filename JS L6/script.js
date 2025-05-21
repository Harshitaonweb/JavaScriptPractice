/*
console.log("hello");
window.console.log("hello2");


let heading = document.getElementById("heading"); //h1
console.dir(heading);

let headings = document.getElementsByClassName("heading-class");
console.dir(headings);
console.log(headings);
*/

//Query Selector
let firstEl = document.querySelector("p"); //for 1st element
console.dir(firstEl);

let allEl = document.querySelectorAll(".heading-class"); //for all elements
console.dir(allEl);

let FirstEl = document.querySelector("#myId"); //for 1st element
console.dir(FirstEl);
