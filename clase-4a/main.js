let botones = document.querySelectorAll('button');
for (let boton of botones)
  boton.addEventListener('click', checkAnswer);
let intentos = 2;

function disableAllButtons() {
  let botones = document.querySelectorAll('button');
  console.log(botones);
  for (let boton of botones)
    boton.disabled = true;
}

function checkAnswer(event) {
  let boton = event.target;
  let respuesta = boton.textContent;
  if (respuesta == '4') {
    boton.classList.add('verde');
  } else {
    boton.classList.add('rojo');
  }
  intentos--;
  if (intentos == 0) {
    disableAllButtons();
    clearInterval(timerId);
  }
}

let segundos = 20;
let timerId = setInterval(() => {
  segundos--;
  document.querySelector('#timer').textContent = segundos;
  if (segundos == 0) {
    clearInterval(timerId);
    disableAllButtons();
  }
}, 1000);
