let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";
modeBtn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    body.setAttribute("style", "background-color: black; color: white;");
  } else {
        currMode = "light";
        body.setAttribute("style", "background-color: white; color: black;");
    }
    console.log(currMode);
});