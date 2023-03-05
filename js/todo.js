const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos=[]

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos)); //배열을 스트링 형태로 바꿔줌
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();

}

function paintToDo(newTodo){
    const div = document.createElement("div")
    div.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText=newTodo.text
    const button = document.createElement("button");
    button.innerText="✏️";
    button.addEventListener("click",deleteToDo);
    div.appendChild(span);
    div.appendChild(button); // li 태그 안에 span 태그 생성
    toDoList.appendChild(div)
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const newTodoObj ={
        text:newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj); // 
    paintToDo(newTodoObj);
    saveToDos();

}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item){
//     console.log("this is the turn of ", item);
// }

const savedToDos= localStorage.getItem(TODOS_KEY);

if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(paintToDo);
    toDos = parsedToDos;
    console.log(parsedToDos);
}// forEach() 이 paintToDo를 parsedToDos 배열의 요소마다 실행
  