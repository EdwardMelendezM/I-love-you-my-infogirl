const d = document;
const buttonNo = d.querySelector('#button_no')
const buttonYes = d.querySelector('#button_si')
const nuevoTexto = ' quieroooo ❤️';
const container_success_btn = d.querySelector('#container_success_btn')
let intervalo;
let indice = 0;
const container_title_time = d.querySelector('#container_title_time')
let container = d.getElementById("container_success");
let containerMain = d.querySelector('.container')
let intervaloTime;
let contadorTime = 50;
const container_input_form_submit = d.querySelector("#container_input_form_submit")
const input_name = d.querySelector('#input_name')
const container_input_form = d.querySelector('.container_input_form')
const container_input = d.querySelector('.container_input')
let name_girl = d.querySelector('#name_girl')

let paramsValue='';
let hasName= false;

d.addEventListener('DOMContentLoaded',e=>{
  intervaloTime = setInterval(()=>{
    contadorTime-=1
    container_title_time.textContent=`${contadorTime} seg`
    if (contadorTime===0){
      clearInterval(intervaloTime)
    }
  },1000)
})

// Button para el NO
buttonNo.addEventListener('mouseover',e=>{
  clearInterval(intervalo); // Limpiamos cualquier intervalo anterior
  indice = 0; // Reiniciamos el índice
  buttonNo.textContent='Si';
  buttonYes.textContent='No';
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
  buttonYes.textContent = 'Si';
});
buttonNo.addEventListener('click',e=>{
  container.classList.add("fade-in");
  container.style.display = "flex";
  
})
buttonYes.addEventListener('click', e => {
  container.classList.add("fade-in");
  container.style.display = "flex";
})

container_success_btn.addEventListener('click',e=>{
  container.classList.remove("fade-in");
})

// Button para el NO
// buttonYes.addEventListener('mouseover', e => {
//   buttonYes.textContent = 'Si quierooo'
// });
// buttonYes.addEventListener('mouseout', e => {
//   buttonYes.textContent = 'Si'
// });


// Reproducir
document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search)

  if (params.has('name')) {
    paramsValue = params.get('name')
    container_input.style.display = 'none';
    containerMain.style.display='flex';

    paramsValue = capitalizarPalabra(paramsValue)
    name_girl.textContent = paramsValue.replace('-',' ')
    
  }else{
    container_input.style.display = 'flex';
    containerMain.style.display = 'none';

  }

  var video = document.createElement("video");
  video.src = "public/video/video_1.mp4";
  video.autoplay = true;
  video.loop = true;
  video.muted = false;
  video.style.display = "none";

  document.querySelector(".container").appendChild(video);
});

container_input_form_submit.addEventListener('submit',e=>{
  e.preventDefault();
  let name_form = input_name.value
  name_form = name_form.replace(/\s/g, "-")
  if (name_form.length < 1) return;
  let copyText = d.createElement('p')
  let currentUrl = window.location.href;
  copyText.textContent = currentUrl+`?name=${name_form}`
  copyText.classList.add('copyThisText')
  
  container_input_form.appendChild(copyText);

  // Agregar el evento click al elemento <p>
  copyText.addEventListener('click', function () {
    // Crear un campo de texto temporal
    const tempInput = document.createElement('textarea');
    tempInput.value = copyText.textContent;
    document.body.appendChild(tempInput);

    // Seleccionar el contenido del campo de texto
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Ejecutar el comando de copiar
    document.execCommand('copy');

    // Eliminar el campo de texto temporal
    document.body.removeChild(tempInput);

    // Mostrar una confirmación al usuario
    const copiado_aviso = d.createElement('p')
    copiado_aviso.classList.add('copiado_aviso')
    copiado_aviso.textContent='Copiado!!!'
    container_input_form.appendChild(copiado_aviso)
  });
})





function capitalizarPalabra(palabra) {
  // Obtener el primer carácter en mayúscula
  const primerCaracter = palabra.charAt(0).toUpperCase();

  // Obtener el resto de la palabra en minúscula
  const restoPalabra = palabra.slice(1).toLowerCase();

  // Combinar el primer carácter y el resto de la palabra
  const palabraCapitalizada = primerCaracter + restoPalabra;

  return palabraCapitalizada;
}