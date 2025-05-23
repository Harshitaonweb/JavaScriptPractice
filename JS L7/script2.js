// Insert Elements
let newBtn = document.createElement("button");
newBtn.innerText = "Click me!";
console.log(newBtn);

// Ways to insert elements
/*div.append(newBtn); 
div.prepend(newBtn);
div.before(newBtn);*/

let p = document.querySelector("p");
p.after(newBtn);

//adding heading
let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi, I am new!</i>";

document.querySelector("body").prepend(newHeading);

//to delete elements
p.remove();
