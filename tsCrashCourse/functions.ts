function getSum(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(getSum(5, 3));

const mySum = (number1: any, number2: any): number => {
  if (typeof number1 === "string") {
    number1 = parseInt(number1);
  }
  if (typeof number2 === "string") {
    number2 = parseInt(number2);
  }
  return number1 + number2;
};

console.log(mySum("9", "88"));

function getName(firstName: string, lastName?: string): string {
  return `${firstName} ${lastName === undefined ? "" : lastName}`;
}
console.log(getName("sina"));

function myVoid(): void {
  console.log("hey");
}
myVoid();
