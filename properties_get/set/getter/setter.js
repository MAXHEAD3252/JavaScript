// getter and setter properties 
// accesors which is used to sccess the private members of the class or a function 

let user = {
    name: "John",
    surname: "Smith",
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    }

  };

  let users = {
    name: "John",
    surname: "Smith",
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    },
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    }
  };
  
  // set fullName is executed with the given value.
  users.fullName = "Alice Cooper";
  
  console.log(user.fullName);