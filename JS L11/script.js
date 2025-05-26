/*OBJECT
//making of an object(& defining methods)
const student = {
  fullName: "Harshita Raj",
  marks: 94.4,
  printMarks: function () {
    console.log("marks = ", this.marks); //this.marks=student.marks
  },
};
*/

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