console.log("interface.js file is running");
function showTodo(todo) {
    console.log(todo.title, "is", todo.done ? "done" : "not done");
}
var myTodo = { title: "start learning typescript", done: true };
showTodo(myTodo);
