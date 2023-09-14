function updateTable(event) {
  event.preventDefault();
  let nombre = document.forms[0].alumno.value;
  let telefono = document.forms[0].tel.value;
  // console.log(nombre, telefono);
  let tbody = document.querySelector('tbody');
  let tr = document.createElement('tr');
  let tnombre = document.createElement('td');
  let ttel = document.createElement('td');
  tnombre.textContent = nombre;
  ttel.textContent = telefono;
  tr.append(tnombre);
  tr.append(ttel);
  tbody.append(tr); 
  document.forms[0].reset();
}
