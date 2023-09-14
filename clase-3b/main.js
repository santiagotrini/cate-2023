if (localStorage.getItem('alumnos') == null)
  localStorage.setItem('alumnos', JSON.stringify([]));
else
  populateTable();

function populateTable() {
  let alumnos = JSON.parse(localStorage.getItem('alumnos'));
  for (let i = 0; i < alumnos.length; i++) {
    updateTable(alumnos, i);
  }
}

function updateTable(alumnos, index) {
  let nombre = alumnos[index].nombre;
  let telefono = alumnos[index].telefono;
  let tbody = document.querySelector('tbody');
  let tr = document.createElement('tr');
  let tnombre = document.createElement('td');
  let ttel = document.createElement('td');
  tnombre.textContent = nombre;
  ttel.textContent = telefono;
  tr.append(tnombre);
  tr.append(ttel);
  tbody.append(tr);
}

function addAlumno(event) {
  event.preventDefault();
  let nombre = document.forms[0].alumno.value;
  let telefono = document.forms[0].tel.value;
  let nuevoAlumno = { nombre, telefono };
  let alumnos = JSON.parse(localStorage.getItem('alumnos'));
  alumnos.push(nuevoAlumno);
  localStorage.setItem('alumnos', JSON.stringify(alumnos));
  // console.log(alumnos);
  updateTable(alumnos, alumnos.length-1);
  document.forms[0].reset();
}
