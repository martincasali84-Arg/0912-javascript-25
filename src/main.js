import Swal from 'sweetalert2'
import handleNotificacion from './utils/handle-notificacion'
import './style.css'

//----------------------//
// ! variables globales //
//----------------------//

let listaproductos = [

 {nombre: "carne", cantidad: 2, precio: 12.4},
 {nombre:  "pan", cantidad: 5, precio: 23.4},
 {nombre:  "fideo",cantidad: 3, precio: 21.4},
 {nombre: "leche", cantidad: 8, precio: 32.4},
 {nombre: "pollo", cantidad: 1, precio: 42.4},
]
  
let crearlista = true; // Creo esta bandera para evitar la repeticion de la lista de productos//
let ul;               // variable para crear la lista ul dinamicamente //

//----------------------//
// ! Sidebar Funciones  //
//----------------------//  

/*Selecciono los elementos id del html*/
     /*overlay*/
     /*sidebar*/
     /*close-sidebar*/
     /*toogle-sidebar*/

const overlay = document.getElementById('overlay');
const sidebar = document.getElementById('sidebar');
const closeButton = document.getElementById('close-sidebar');
const toogleBotton = document.getElementById('toogle-sidebar');

//console.log(overlay);
//console.log(sidebar);
//console.log(closeSidebar);
//console.log(toogleSidebar);

const openSidebar = () => {
console.log('opensidebar');
sidebar.classList.remove('-translate-x-full');
overlay.classList.remove('hidden');
}

const closeSidebar = () => {
console.log('closesidebar');
sidebar.classList.add('-translate-x-full');
overlay.classList.add('hidden');
}

toogleBotton.addEventListener('click', openSidebar);
closeButton.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

function renderLista(){
     console.log('se hace el renderizado...')

     const Lista= document.querySelector('#Lista')

     if (crearlista){

     ul= document.createElement('ul')
     }
          ul.innerHTML = '' 

     listaproductos.forEach((prod, indice) => {
          ul.innerHTML += `

              <li class="flex items-center justify-between bg-white rounded-lg shadow p-3 mb-2 hover:bg-gray-50 transition">
                <!--Icono de Producto-->
                <span class="flex items-center justify-center w-10 text-indigo-600">
                  <i class="material-icons text-2xl">shopping_cart</i>
                </span>
                <!--Nombre de Producto-->
                <span class="flex-1 text-gray-800 font-medium truncate w-32">
                 ${prod.nombre}</span>
                <!--Cantidad-->
                <span class="w-21 me-3">
                  <label for="" class="block text-xs text-gray-500">Cantidad</label> 
                  <input type="text" value="${prod.cantidad}" class="mt-1 w-full border border-gray-300 rounded-md text-sm p-1 text-center focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                </span>
                <!--Precio-->
                <span class="w-21">
                  <label for="" class="block text-xs text-gray-500">Precio</label> 
                  <input type="text"  value="${prod.precio}" class="mt-1 w-full border border-gray-300 rounded-md text-sm p-1 text-center focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                </span>
                <!--Borrar Producto-->
                <span class="w-12 justify-center">
                  <button class="flex items-center justify-around bg-red-500 hover:bg-red-600 text-white rounded-full w-10 h-10 shadow transition cursor-pointer ms-2"
                  data-inice="${indice}">
                    <i class="material-icons">remove_shopping_cart</i>
                  </button>
                </span>
              </li>
          `
     })

Lista.appendChild(ul)
crearlista = false;


     }
function eventoIngresoProducto(){
      document.querySelector('#btn-entrada-producto').addEventListener('click',()=>{
         console.log('btn-entrada-producto')

         const input = document.getElementById('ingrese-producto')
         const producto = input.value

         console.log(producto)
         if (producto){
          listaproductos.push({nombre: producto, cantidad: 1, precio: 1})
          renderLista()
         input.value = ''
         }
         else{
          alert("Debe ingresar un producto valido!");
         }

      })            
}
function eventoBorrarProducto(){
  
  document.querySelector('#btn-borrar-producto').addEventListener('click', ()=>{
    console.log('btn-borrar-producto')
     
      /*Swal.fire({
        title: "Desea eliminar todos los productos de la lista?",
        text: "Esta accion no se puede deshacer!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si, eliminar todo!"
            }).then((result) => {
        if (result.isConfirmed) {
          listaproductos = []
          renderLista()
          
          Swal.fire({
            title: "Borrado!",
            text: "Productos Borrados Correctamente",
            icon: "success"
          });
  }
});*/ 
      const objMensaje = {
        textoPrincipal: "Desea eliminar todos los productos de la lista?",
        descripcion: "Esta accion no se puede deshacer!",
        textoSecundario: "Lista Borrada Correctamente",
        descripcionSecundaria: "Lista sin Productos!"
      }

    handleNotificacion(objMensaje,()=>{
      listaproductos = []
          renderLista()

  })
    
  })
}

function start(){
  console.log('se cargo el DOM!')
  renderLista()
  eventoIngresoProducto()
  eventoBorrarProducto()
}

document.addEventListener('DOMContentLoaded', start);