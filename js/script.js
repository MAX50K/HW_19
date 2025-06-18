// 1
const form = document.getElementById('colorForm');

radioRed.addEventListener("change", changeColor);
radioGreen.addEventListener("change", changeColor);
radioWhite.addEventListener("change", changeColor);

function changeColor(event) {
  document.body.style.backgroundColor = event.target.value;
}
// 2
const input = document.getElementById('name-input');  
    const output = document.getElementById('name-output');

    input.addEventListener('input', () => {
      const name = input.value.trim();
      output.textContent = name === '' ? 'незнайомець' : name;
    });
// 3
