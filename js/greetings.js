const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");


const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmitted(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);   //유저이름저장
    greetingsMainPage();
}

function greetingsMainPage() {
    const username = localStorage.getItem(USERNAME_KEY);    //유저이름검색+찾음
    greeting.innerText = `Hello, ${username}.`;
    // = greeting.innerText = "Hello, " + username +".";
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmitted);
    // loginpage
} else {
    greetingsMainPage();
}