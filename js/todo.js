const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const toDos = [];
const TODOS_KEY = "toDos";

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
};

function paintToDo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
};

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newToDo);
    paintToDo(newToDo);
    saveToDos();
};

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(){
    console.log("say hello");
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if(saveToDos !== null){
    const parsedToDos = JSON.parse(saveToDos);
    parsedToDos.forEach();
};