const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOARRAY_KEY = "todoArray";

let todoArray = [];

function saveTodoArray() {
    localStorage.setItem(TODOARRAY_KEY, JSON.stringify(todoArray));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    todoArray = todoArray.filter((todo) => todo.id !== parseInt(li.id));
    li.remove();
    saveTodoArray();
}

function paintTodo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = newTodoObj.text;
    button.innerText = "X";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const savedTodoInput = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text:savedTodoInput,
        id: Date.now()
    }
    todoArray.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodoArray();
}

function sayHello() {
    console.log("Hello");
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodoArray = localStorage.getItem(TODOARRAY_KEY);
if (savedTodoArray) {
    const parsedTodoArray = JSON.parse(savedTodoArray);
    todoArray = parsedTodoArray;
    parsedTodoArray.forEach(paintTodo);
}