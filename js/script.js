// 1
const radioRed = document.getElementById("radioRed");
const radioWhite = document.getElementById("radioWhite");
const radioGreen = document.getElementById("radioGreen");

radioRed.addEventListener("change", changeColor);
radioWhite.addEventListener("change", changeColor);
radioGreen.addEventListener("change", changeColor);

function changeColor(event) {
  document.body.style.backgroundColor = event.target.value;
}
// 2
const input = document.getElementById("validation-input");

  input.addEventListener("blur", () => {
    const requiredLength = parseInt(input.dataset.length);
    const actualLength = input.value.length;

    input.classList.remove("valid", "invalid");

    if (actualLength === requiredLength) {
      input.classList.add("valid");
    } else {
      input.classList.add("invalid");
    }
  });
// 3
const range = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

range.oninput = (() => span.style.fontSize = range.value + "px");