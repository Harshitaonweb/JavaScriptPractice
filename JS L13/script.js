// FETCH API
const URL = "https://official-joke-api.appspot.com/random_joke";
const jokePara1 = document.querySelector("#setup");
const jokePara2 = document.querySelector("#punchline");
const btn = document.querySelector("#btn");


// by using asynce await
const getFacts = async () => {
  console.log("getting data...");
  let response = await fetch(URL);
  console.log(response);
  //console.log(response.status);
  let data = await response.json(); // using json makes data readable
  //console.log(data);
  //console.log(data.setup);
  //console.log(data.punchline);
  jokePara1.innerHTML = data.setup;
  jokePara2.innerHTML = data.punchline;
};

/*
// by using promise chaining
function getFacts() {
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      jokePara1.innerHTML = data.setup;
      jokePara2.innerHTML = data.punchline;
    });
}
*/
btn.addEventListener("click", getFacts);
