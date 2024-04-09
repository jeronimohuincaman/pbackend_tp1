document.addEventListener('DOMContentLoaded', function () {
  const addButton = document.getElementById('addButton');
  const formulario = document.getElementById('formulario');

  addButton.addEventListener('click', function () {
    formulario.style.display = 'block';
  });
});
