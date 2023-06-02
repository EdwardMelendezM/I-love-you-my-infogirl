const d = document;
const buttonNo = d.querySelector('#button_no')
const buttonYes = d.querySelector('#button_si')
const nuevoTexto = ' quieroooo';
var intervalo;
var indice = 0;

// Button para el NO
buttonNo.addEventListener('mouseover',e=>{
  
  clearInterval(intervalo); // Limpiamos cualquier intervalo anterior
  indice = 0; // Reiniciamos el índice
  buttonNo.textContent='Si'
  intervalo = setInterval(function () {
    if (indice < nuevoTexto.length) {
      buttonNo.textContent += nuevoTexto.charAt(indice);
      indice++;
    } else {
      clearInterval(intervalo); // Detenemos el intervalo cuando se complete el texto
    }
  }, 100);
});
buttonNo.addEventListener('mouseout',e=>{
  clearInterval(intervalo); // Limpiamos cualquier intervalo activo
  buttonNo.textContent = 'No';
});

// Button para el NO
// buttonYes.addEventListener('mouseover', e => {
//   buttonYes.textContent = 'Si quierooo'
// });
// buttonYes.addEventListener('mouseout', e => {
//   buttonYes.textContent = 'Si'
// });