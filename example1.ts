let myVariable: string = "";
// this will result in the type of never
let numAndString: number & string;
//an object shape
type myDog = {
  name: string;
  age: number;
  breed: string;
};

//any variable with this type must look like "myDog" in shape and value types
let vicious: myDog;

//a generic array that will only contain numbers
let codes: Array<number> = [1, 2, 4, 5, 6, 3, 2, 3, 4, 1, 2, 4];

//a generic array that will only contain numbers or strings
let codesAndNames: Array<number | string> = [
  "john",
  7,
  "tiffany",
  8,
  89,
  56,
  "Taylor",
];

//a generic array that can contain anything
let anyArray: any[] = [true, false, undefined, null, 8, "yo", { name: "john" }];

//a tuple that will only contain these types in this specific order
let myTuple: [string, number] = ["Jon", 737823748273487];

// some object that has an anonymous function that returns nothing
type myLoudDog = {
  name: string;
  age: number;
  f: () => void;
};
