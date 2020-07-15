var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(_a) {
    var firstName = _a.firstName, lastName = _a.lastName;
    return "Hello, " + firstName + " " + lastName;
}
// let user = "Jane User";
var user = new Student("Jane", "M.", "User");
//   let user: Person = { firstName: "Jane", lastName: "User" };
// let user = [0,1,2];
document.body.textContent = greeter(user);
