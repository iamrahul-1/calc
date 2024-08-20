// function to display
let display = document.getElementById("result");

function dis(val) {
  display.value += val;
}
// Function to clear
function clr() {
  display.value = "";
}
// function to bacskpace
function back() {
  display.value = display.value.slice(0, -1);
}

// on click
window.addEventListener("keydown", checkKey);

function checkKey(e) {
  console.log(e.key);
  if (
    e.key == "0" ||
    e.key == "1" ||
    e.key == "2" ||
    e.key == "3" ||
    e.key == "4" ||
    e.key == "5" ||
    e.key == "6" ||
    e.key == "7" ||
    e.key == "8" ||
    e.key == "9" ||
    e.key == "+" ||
    e.key == "-" ||
    e.key == "*" ||
    e.key == "/"
  ) {
    display.value += e.key;
  }
  if(e.key === "Escape") {
  clr();
  }
  if (e.key == "Backspace") {
    back();
  }
  if (e.key == "Enter") {
    solve();
  }
}
// function to calculate
function solve() {
  let result = eval(display.value);
  console.log(eval(display.value));
  display.value = result;
}
