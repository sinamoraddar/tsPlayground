import * as _ from "lodash";

async function hello() {
  const result = "hellow";
}

let myNumber = 12;
// myNumber = "shi";
// myNumber = 23.1;
type Style = "bold" | "italic" | 23;
let font: Style = "bold";

interface Person {
  // required properties
  first: string;
  last: string;
  //   additional properties
  [key: string]: any;
}

const person = {
  firt: "Sina",
  last: "Moraddar",
};

function pow(x: number, y: number): number {
  return Math.pow(x, y);
}

pow(1, 3);

//Arrays
const arr: MyList = [];
arr.push(1);
arr.push(23);
arr.push(4);

//tuples
type MyList = [string?, boolean?, number?];
