//Question1
newBtn = document.createElement("button");
newBtn.innerText = "click me!"
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

document.querySelector("body").prepend(newBtn);

//Question2
let para = document.querySelector("p");
para.classList.add("newClass");
