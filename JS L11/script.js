/*OBJECT
//making of an object(& defining methods)
const student = {
  fullName: "Harshita Raj",
  marks: 94.4,
  printMarks: function () {
    console.log("marks = ", this.marks); //this.marks=student.marks
  },
};

const employee = {
  calcTax() {
    console.log("tax rate is 10%");
  },
};

const karanArjun = {
  salary: 50000,
};

const karanArjun2 = {
  salary: 50000,
};

const karanArjun3 = {
  salary: 50000,
};

const karanArjun4 = {
  salary: 50000,
};

//to set a prototype
karanArjun.__proto__ = employee;
karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;
karanArjun4.__proto__ = employee;

//CLASS
class ToyotaCar {
  constructor(brand, mileage) {
    console.log("creating new object");
    this.brand = brand;
    this.mileage = mileage;
  }

  start() {
    console.log("start");
  }

  stop() {
    console.log("stop");
  }

}

let fortuner = new ToyotaCar("fortuner", 10);
console.log(fortuner);
let lexus = new ToyotaCar("lexus", 12);
console.log(lexus);


//INHERITANCE
class Parent {
  hello() {
    console.log("hello");
  }
}

class Child extends Parent {}

let obj = new Child();


class Person {
  constructor() {
    this.species = "homo sapiens";
  }

  eat() {
    console.log("eat");
  }

  sleep() {
    console.log("sleep");
  }

  work() {
    console.log("do nothing  ");
   }
}

class Engineer extends Person {
   work() {
    console.log("solve problems, build something");
   }
}

class Doctor  extends Person {
  work() {
   console.log("treat patients");
  }
}

let harshitaObj = new Engineer;
let harshObj = new Doctor;


// SUPER KEYWORD
class Person {
  constructor() {
    console.log("enter parent constructor: "); 
    this.species = "homo sapiens";
  }

  eat() {
    console.log("eat");
  }
}

class Engineer extends Person {
  constructor(branch) {
    console.log("enter child constructor: "); 
    super(); //to invoke parent class constructor
    this.branch = branch;
    console.log("exit child constructor: "); 
  }
  work() {
    console.log("solve problems, build something");
  }
}

let engObj = new Engineer("Chemical Engineer");


//to pass in parent class after passing value in child class
class Person {
  constructor(name) {
    this.species = "homo sapiens";
    this.name = name;
  }

  eat() {
    console.log("eat");
  }
}

class Engineer extends Person {
  constructor(name) {
    super(name);
  }

  work() {
    super.eat(); //to access parent class keywords SUPER is must to use!
    console.log("solve problems, build something");
  }
}

let engObj = new Engineer("harshita");
*/

// ERROR HANDLING
let a= 5;
let b = 10;
console.log("a = ",a);
console.log("b = ",b);
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);

try {
  console.log("a+b = ",a+c); //made an error here (c not defined), further code doesn't get printed
} catch(err) {
  console.log(err);
}
// helps to not stop the further code proccesing

console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
