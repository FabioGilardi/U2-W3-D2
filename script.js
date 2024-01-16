// ESERCIZIO 1

const nameInput = document.getElementById("nameInput");
const welcomeMessage = document.getElementsByTagName("h4")[0];
const formInput = document.getElementsByTagName("form")[0];

const insertName = function () {
  if (localStorage.getItem("username")) {
    welcomeMessage.innerText =
      "Welcome Back " + localStorage.getItem("username");
  } else {
    welcomeMessage.innerText = "please tell us your name";
  }
};

const clearLocal = function () {
  localStorage.removeItem("username");
  nameInput.value = "";
  insertName();
};

window.onload = insertName();

formInput.addEventListener("submit", function (e) {
  e.preventDefault();

  localStorage.setItem("username", nameInput.value);

  nameInput.value = "";

  insertName();
});

// ESERCIZIO 2

let timer = document.getElementById("timer");
let elapsedTime = 0;
let timerInterval;

const startTimer = function () {
  if (sessionStorage.getItem("time")) {
    elapsedTime = parseInt(sessionStorage.getItem("time"));
    timerInterval = setInterval(updateTimer, 1000);
  } else {
    elapsedTime = 0;
    timerInterval = setInterval(updateTimer, 1000);
  }
};

const updateTimer = function () {
  elapsedTime = elapsedTime + 1;
  sessionStorage.setItem("time", elapsedTime);
  timer.innerText = elapsedTime;
};

window.onload = startTimer();
