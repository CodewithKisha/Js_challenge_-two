const Btn = document.querySelector(".btn");
const Text = document.querySelector(".content");

Btn.addEventListener("click", printWords);

function printWords(){
    Text.textContent = "I am a printing the contents of the current window";
  }