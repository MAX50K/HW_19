// 1
const form = document.getElementById('colorForm');

    form.addEventListener('change', (event) => {
      if (event.target.name === 'color') {
        document.body.style.backgroundColor = event.target.value;
      }
    });

    document.body.style.backgroundColor = form.color.value;
// 2
const input = document.getElementById('name-input');
    const output = document.getElementById('name-output');

    input.addEventListener('input', () => {
      const name = input.value.trim();
      output.textContent = name === '' ? 'незнайомець' : name;
    });
// 3
