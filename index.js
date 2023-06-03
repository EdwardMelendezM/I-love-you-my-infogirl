const d = document;
const buttonNo = d.querySelector('#button_no')
const buttonYes = d.querySelector('#button_si')
const nuevoTexto = ' quieroooo ❤️';
const container_success_btn = d.querySelector('#container_success_btn')
let intervalo;
let indice = 0;
const container_title_time = d.querySelector('#container_title_time')
let container = d.getElementById("container_success");
let intervaloTime;
let contadorTime = 50;

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
  var video = document.createElement("video");
  video.src = "public/video/video_1.mp4";
  video.autoplay = true;
  video.loop = true;
  video.muted = false;
  video.style.display = "none";

  document.querySelector(".container").appendChild(video);
});
