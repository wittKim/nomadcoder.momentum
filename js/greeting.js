const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    const username = loginInput.value;
    event.preventDefault();
    greetingEvent();
    greeting.innerText = `Hello ${username}`;
    localStorage.setItem("username", username);
}
const SAVED_USERNAME = localStorage.getItem("username");
function greetingEvent() {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
}

if (SAVED_USERNAME == null) {
    console.log("무야호");
} else {
    greeting.innerText = `Hello ${SAVED_USERNAME}`;
    greetingEvent();
}

loginForm.addEventListener("submit", onLoginSubmit);