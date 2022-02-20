const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input");

const TODOS_KEY = "toDos";

let toDos = [];

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";   //input칸 비우기

    const newToDoObj = {    //투두 object
        text: newToDo,
        id: Date.now(),     // 투두리스트에 개별 고유아이디 부여
    };
    
    toDos.push(newToDoObj); //ARRAY에 삽입
    paintToDo(newToDoObj);  //투두리스트생성및관리 함수로
    saveToDos();
    
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");

    button.innerText = "done?";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    
}

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    console.log(li.id);
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const toDosSaved = localStorage.getItem(TODOS_KEY);

if(toDosSaved !== null) {
    const parsedToDos = JSON.parse(toDosSaved);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
                 // = ((item) => console.log("Hello ", item));   //""=>" arrowed function
    
}