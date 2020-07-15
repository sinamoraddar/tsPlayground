class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}
function greeter({ firstName, lastName }: Person) {
  return "Hello, " + firstName + " " + lastName;
}

// let user = "Jane User";
let user: Person = new Student("Jane", "M.", "User");
//   let user: Person = { firstName: "Jane", lastName: "User" };
// let user = [0,1,2];

document.body.textContent = greeter(user);
