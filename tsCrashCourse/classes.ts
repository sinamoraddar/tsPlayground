interface PlayerInterface {
  name: string;
  readonly password: string;
  age: number;
  register();
  payInvoice();
}
class Player implements PlayerInterface {
  name: string;
  password: string;
  age: number;
  constructor(name: string, password: string, age: number) {
    this.name = name;
    this.password = password;
    this.age = age;
    console.log(
      "a player instance has been created",
      this.name,
      this.age,
      this.password
    );
  }
  register() {
    console.log(this.name, "is now registered");
  }
  payInvoice() {
    console.log("invoice was payed by =>", this.name);
  }
}
const james = new Player("sina", "testPassWorD", 21);
console.log(james.name);
// james.register();

class FootballPlayer extends Player {
  id: number;
  constructor(id: number, name: string, password: string, age: number) {
    super(name, password, age);
    this.id = id;
  }
  payInvoice() {
    super.payInvoice();
  }
}
let mike: Player = new FootballPlayer(1, "mike adams", "123456", 11);

mike.payInvoice();
