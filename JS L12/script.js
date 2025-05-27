/*
// SYNCHRONUS PROGRAMMING (code runs in sync)
console.log("one");
console.log("two");
console.log("three");

//setTimeout()  (after how much time you need your work o happen)
function  hello() {
    console.log("hello");
}

setTimeout(hello, 2000); //2000ms= 2sec

//OR

setTimeout(() => {
  console.log("hello");
}, 4000);


// Callback(SYNCHRONUS) (funtion passed as an argument to another function)
function sum(a, b){
    console.log(a+b);
}

function calculator(a, b, sumCallback) {
    sumCallback(a,b);
}

calculator(1, 2, sum); //sum func. called back in calculator func.


// Callback(ASYNCHRONUS(setTimeout))
const hello = () => {
    console.log("hello");
}

setTimeout(hello, 3000);


// CALLBACK HELL
function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

//to get multiple datas after a delay everytime
getData(1, () => {
  console.log("getting data 2 ....");
  getData(2, () => {
    console.log("getting data 3 ....");
    getData(3, () => {
        console.log("getting data 4 ....");
        getData(4);
    });
  });
});


// PROMISES
let promise = new Promise((resolve, reject) => {
  console.log("I am a promise");
  // resolve(123);
  reject("some harsh(error) occurred");
});

function getData(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //console.log("data", dataId);
      //resolve("success");
      reject("error");
      if (getNextData) {
        getNextData();
      }
    }, 5000);
  });
}

//.then() & catch()
const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I am a promise");
    resolve("success ");
  });
};

let promise = getPromise();
promise.then((res) => {
  //then :- used to make work when promise is fulfilled
  console.log("promise fulfilled");
});

//If the resolve statement had reject in place(i.e. error) then the statement("promise fulfilled") would not have been printed, :
const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I am a promise");
    //resolve("success ");
    reject("network error");
  });
};

let promise = getPromise();
promise.then((res) => {
  console.log("promise fulfilled");
});

promise.catch((err) => {
  //to catch an error
  console.log("rejected", err);
});


// PROMISE CHAINING
function asyncFunc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data 1");
      resolve("success");
    }, 4000);
  });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data 2");
      resolve("success");
    }, 4000);
  });
}

console.log("fetching data 1 ..");
let p1 = asyncFunc();
p1.then((res) => {
  console.log(res);
});

console.log("fetching data 2 ..");
let p2 = asyncFunc2();
p2.then((res) => {
  console.log(res);
});


// to get data alternately(2nd datda after some time)
console.log("fetching data 1 ..");
asyncFunc().then((res) => {
  console.log("fetching data 2 ..");
  asyncFunc2().then((res) => {});
});


// previous line51 example through promise chaining
function getData(dataId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("data", dataId);
        resolve("success");
      }, 2000);
    });
  }

  console.log("fetching data 1 ..");
getData(1)
  .then((res) => {
    console.log("fetching data 2 ..");
    return getData(2);
  })
  .then((res) => {
    console.log("fetching data 3 ..");
    return getData(3);
  })
  .then((res) => {
    console.log(res);
  });


// ASYNC-AWAIT
// ASYNC(makes asynchronous programming easy/simple),
// automatically returns promise
async function hello() {
  console.log("hello");
}

// AWAIT(until and unless a promise is fulfilled, further code executin will not happen)
// waits till the promise get fulfilled, also makes the surrounding's execution to wait
//  can only be used under an asynchronous function
function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data");
      resolve(200);
    }, 2000);
  });
}

async function getWeatherData() {
    await api();  //1st call
    await api();  //2nd call
}

//another example
function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 2000);
  });
}

async function getAllData() {
  console.log("getting data 1...");
  await getData(1);
  console.log("getting data 2...");
  await getData(2);
  console.log("getting data 3...");
  await getData(3);
  console.log("getting data 4...");
  await getData(4);
  console.log("getting data 5...");
  await getData(5);
  console.log("getting data 6...");
  await getData(6);
}
*/

// IIFE(Immediately Invoked Function Expression)
// to make async function easier by getting invoked automatically
function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 2000);
  });
};
(async function () {
  console.log("getting data 1...");
  await getData(1);
  console.log("getting data 2...");
  await getData(2);
  console.log("getting data 3...");
  await getData(3);
  console.log("getting data 4...");
  await getData(4);
  console.log("getting data 5...");
  await getData(5);
  console.log("getting data 6...");
  await getData(6);
})();
// Now function is auomatically geeting invoked, and we didn't needed to call it.