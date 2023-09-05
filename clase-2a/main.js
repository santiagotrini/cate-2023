function handleSubmit(event) {
  event.preventDefault();
  let x = +document.forms[0].x.value;
  let y = +document.forms[0].y.value;
  // console.log('x: ' + x);
  // console.log('tipo de x = ' + typeof x);
  // console.log('y: ' + y);
  if (isNaN(x) || isNaN(y)) return;
  if (x > 350 || y > 350) return;
  square(x,y,50);
  document.forms[0].reset();
}

function square(x,y,w) {
  let cuadradito = document.createElement('div');
  let lienzo = document.querySelector('.lienzo');
  let offsetX = lienzo.getBoundingClientRect().left;
  let offsetY = lienzo.getBoundingClientRect().top;
  cuadradito.classList.add('cuadradito');
  cuadradito.style.width = w+'px';
  cuadradito.style.height = w+'px';
  cuadradito.style.top = (y+offsetY)+'px';
  cuadradito.style.left = (x+offsetX)+'px';
  lienzo.append(cuadradito);
}

function chess() {
  let x = 0;
  let y = 0;
  for (let i = 0; i < 8; i++) {
    x = 0;
    for (let j = 0; j < 8; j++) {
      if ((i+j)%2 == 0) square(x,y,50);
      x += 50;
    }
    y += 50;
  }
}

function fn(event) {
  console.log(event.target);
  if (event.target.classList.contains('cuadradito'))
    window.location = 'https://developer.mozilla.org';
}

document.addEventListener('click', fn);
