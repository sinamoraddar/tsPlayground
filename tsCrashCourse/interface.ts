console.log("interface.js file is running");

/*function showTodo(todo: { title: string; done: boolean }) {
  console.log(todo.title, todo.done);
}

let myTodo = { title: "start learning typescript", done: true };
showTodo(myTodo);
 */

interface Todo {
  title: string;
  done: boolean;
}
function showTodo(todo: Todo) {
  console.log(todo.title, "is", todo.done ? "done" : "not done");
}

let myTodo = { title: "start learning typescript", done: true };
showTodo(myTodo);
