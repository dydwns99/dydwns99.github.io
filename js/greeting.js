const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");


const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

// const link = document.querySelector("a");

function onLoginSubmit(event){
  event.preventDefault();
  const username = loginInput.value;
   // 로그인 폼 사라지게
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY,username)
  paintGreetings(username);
  console.log(username);
}

function paintGreetings(username){
  greeting.innerText=`Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// link.addEventListener("click",handleLinkClick)
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername===null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit",onLoginSubmit);
} else{
  paintGreetings(savedUsername)
}

