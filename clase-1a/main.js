document.addEventListener('scroll', agregarParrafo);
let cantidad = 1;
function contar(event) {
  cantidad += 1;
  event.target.textContent = `Hola, clase ${cantidad}`;
}
function agregarParrafo() {
  let p = document.createElement('p');
  p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  document.body.append(p);
}
