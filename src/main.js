import './style.css'
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



