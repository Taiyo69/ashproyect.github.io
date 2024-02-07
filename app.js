const inputs = document.querySelectorAll('input');
const inputA = document.querySelector('#inputA');
const inputB = document.querySelector('#inputB');
const options = document.querySelectorAll('option');
const select = document.querySelector('.calc select');
const btn = document.querySelector('form .btn');
const result = document.querySelector('.calc-result');
let calcOp = 'onda-lon';
let calcValues = [0, 0];

select.addEventListener('click', () => {
  options.forEach((option) => {
    if (option.selected == true) {
      calcOp = option.value;
      inputA.innerHTML = option.attributes.a.textContent;
      if (option.attributes.b.textContent.length > 3) {
        inputB.innerHTML = option.attributes.b.textContent;
        inputs[1].classList.remove('hidden');
        inputB.classList.remove('hidden');
      } else {
        inputs[1].classList.add('hidden');
        inputB.classList.add('hidden');
      }
    }
  });
});

inputs.forEach((input) => {
  input.addEventListener('keyup', () => {
    let str = input.value.replace(/\D/g, '');
    input.value = str;
  });
});

btn.addEventListener('click', (e) => {
  e.preventDefault();
  for (let i = 0; i < 2; i++) {
    calcValues[i] = Number(inputs[i].value);
  }
  result.classList.remove("hidden");
  result.innerHTML = calc(calcValues[0], calcValues[1]);
});

function calc(a, b = 0) {
  if (calcOp == 'onda-vel' && calcValues[0] > 0 && calcValues[1] > 0) {
    return `La velocidad de la onda es igual a ${Math.floor(a * b)} m/s`;
  } else if (calcOp == 'onda-lon' && calcValues[0] > 0 && calcValues[1] > 0) {
    return `La longitud de la onda es igual a ${Math.floor(a / b)} mt`;
  } else if (calcOp == 'onda-fre' && calcValues[0] > 0 && calcValues[1] > 0) {
    return `La frecuencia de la onda es igual a ${Math.floor(a / b)} hz`;
  } else if (calcOp == 'km-m' && calcValues[0] > 0 && calcValues[1] > 0) {
    return `La conversión de kilometros a metros es ${Math.floor(a * 1000)} mts`;
  } else if (calcOp == 'cm-m' && calcValues[0] > 0 && calcValues[1] > 0) {
    return `La conversión de centimetros a metros es ${Math.floor(a / 100)} mts`;
  } else if (calcOp == 'min-seg' && calcValues[0] > 0 && calcValues[1] > 0) {
    return `La conversión de minutos a segundos es ${Math.floor(a * 60)} seg`;
  } else if (calcOp == 'h-seg' && calcValues[0] > 0 && calcValues[1] > 0) {
    return `La conversión de horas a segundos es ${Math.floor(a * 3600)} seg`;
  } else {
    return `Se ha cometido un error al ingresar los datos (404)`;
  }
}
