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

     const ul= document.createElement('ul')
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
                  <button class="flex items-center justify-around bg-red-500 hover:bg-red-600 text-white rounded-full w-10 h-10 shadow transition cursor-pointer ms-2">
                  data-inice="${indice}"
                    <i class="material-icons">remove_shopping_cart</i>
                  </button>
                </span>
              </li>
          `
     })

Lista.appendChild(ul)
     }

function start(){
  console.log('se cargo el DOM!')
  renderLista()
}

document.addEventListener('DOMContentLoaded', start);