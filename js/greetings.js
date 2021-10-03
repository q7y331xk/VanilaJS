const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting =  document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const  username = loginInput.value;
  localStorage.setItem(USERNAME_KEY,username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(username);
}

function paintGreetings (username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerHTML = "<br>" + `Hello ${username}`;
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  // show form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);


} else {
  // show greetings
  paintGreetings(savedUserName);
}

