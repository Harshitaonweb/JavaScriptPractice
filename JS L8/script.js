
let btn1 = document.querySelector("#btn1");
/*
btn1.onclick = () => {
     console.log("btn1 was clicked");
     let a = 25;
     a++;
     console.log(a);
}

let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("you are inside div");
}*/

//Event Object
//let div = document.querySelector("div");
//div.onmouseover = (evt) => {
    //console.log(evt);
    //console.log(evt.type);
    //console.log(evt.target);
    //console.log(evt.clientX, evt.clientY);
//}

//Event Listeners
btn1.addEventListener("click", () => {
    console.log("button1 was clicked - handler1");
});

btn1.addEventListener("click", () => {
    console.log("button1 was clicked - handler2");
}); 

const handler3 = () => {
    console.log("button1 was clicked - handler3");
};

btn1.addEventListener("click", () => {
    console.log("button1 was clicked - handler4");
});

// to remove event listener
btn1.removeEventListener("click", handler3);