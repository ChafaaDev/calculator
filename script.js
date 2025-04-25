let display = document.getElementById("screen");
function appendToDisplay(key) {
  display.value += key;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
}

function toggleMenu() {
  const sideMenu = document.querySelector(".sideMenu");
  sideMenu.classList.toggle("appear");
}
const themeChoice = document.getElementById("theme");

themeChoice.addEventListener("change", () => {
  document.querySelector("body").classList.toggle("dark-mode");
});
