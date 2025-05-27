//Question1
let data = "secret information";

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log("website data = ", data);
  }
}

let student1 = new User("shradha", "abc@gmail.com");
let student2 = new User("harshita", "hr@gmail.com");

let teacher1 = new User("Mike", "mg@gmail.com");

// QUESTION2

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }

  editData() {
    data = "some new value";
  }
}

let admin1 = new Admin("admin", "admin@gmail.com");
