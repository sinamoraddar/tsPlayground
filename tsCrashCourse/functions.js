function getSum(num1, num2) {
    return num1 + num2;
}
console.log(getSum(5, 3));
var mySum = function (number1, number2) {
    if (typeof number1 === "string") {
        number1 = parseInt(number1);
    }
    if (typeof number2 === "string") {
        number2 = parseInt(number2);
    }
    return number1 + number2;
};
console.log(mySum("9", "88"));
function getName(firstName, lastName) {
    return firstName + " " + (lastName === undefined ? "" : lastName);
}
console.log(getName("sina"));
function myVoid() {
    console.log("hey");
}
myVoid();
