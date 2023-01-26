
 

function $(element) {
    return document.querySelector(element)
};


window.addEventListener('load',  () => {
    
const Tareas = [
    { 
    titulo:"Entregar portafolio",
    estado:"Terminado"  
},

   {
    titulo: "Practicar Js",
    estado: "En progreso"
 },

 {
    titulo:"Pasar apuntes",
    estado: "Pendiente"
 }

]

 // Formulary of edition
 let $form = $('.form');
 let $formErrors = $("#submitErrors")

 // Title
 let $title = $('#title');
 let $titleErrors = $('#titleErrors');

 // State
 let $state = $('#state');
 let $stateErrors = $('#stateErrors');

 // Modal
 const $openModal = $("#create-modal")
 const $closeModal = $("#close-modal")
 const $modalCreate = $(".contain-modalCreate")



const $Pendientes = $(".pendientes")
const $progreso = $(".progreso")
const $terminadas = $(".terminadas")
const $buttonModo= document.querySelector(".diseño")
const $body = document.querySelector("body")
const $buttonDelete = document.querySelector("#delete")


$buttonDelete.addEventListener("click", () => {
  Tareas.pop()
  paint()
})





function paint (nodo , datos) {
     nodo.innerHTML = "";
     datos.forEach(tarea => {
    nodo.innerHTML += `<div class="card">
      <p>${tarea.titulo}</p>
      <p>${tarea.estado}</p>
      <button id="edit">Editar</button>
      <button id="delete">Eliminar</button>
    </div>`
     });
    }
  

 const pendiente = Tareas.filter(elem=> elem.estado==="Pendiente")
    paint ($Pendientes, pendiente)

    const enProgreso = Tareas.filter(elem=> elem.estado==="En progreso")
    paint ($progreso, enProgreso)

    const terminadas = Tareas.filter(elem=> elem.estado==="Terminado")
    paint ($terminadas,terminadas)
   

$buttonModo.addEventListener("click",() =>{
    $body.classList.toggle("oscuro")
  })


















})
