// SWIPER
let swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  effect: 'fade',
  preloadImages: true,
});

// MENU-HAMBURGUESA

// declarando variables

const menu = document.querySelector('#menu-bar button');
const nav = document.querySelector('#nav');

// ejecutando funcion click al menu hamburguesa y mostrar menu

menu.addEventListener('click', e => {
  menu.classList.toggle('open');
  nav.classList.toggle("nav").display = 'block';
});

// ejecutando funcion click menu y cerrando menu hamburguesa

nav.addEventListener('click', e => {
  menu.classList.toggle('open');
  nav.classList.toggle("nav").display = 'none';
})



// INICIO BUSCADOR

// ejecutando funciones
document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);

// declarando variables
bars_search = document.getElementById("ctn-bars-search");
cover_ctn_search = document.getElementById("cover-ctn-search");
inputSearch = document.getElementById("inputSearch");
box_search = document.getElementById("box-search");

// función para mostrar el buscador
function mostrar_buscador() {
  // bars_search.style.top = "327px";
  bars_search.style.top = "40vh";
  cover_ctn_search.style.display = "block";
  inputSearch.focus();

  if (inputSearch.value === "") {
    box_search.style.display = "none";
  }
}

// función para ocultar el buscador
function ocultar_buscador() {
  bars_search.style.top = "-61px";
  cover_ctn_search.style.display = "none";
  inputSearch.value = "";
  box_search.style.display = "none";

}

// creando filtrado de busqueda
document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);

function buscador_interno() {


  filter = inputSearch.value.toUpperCase();
  li = box_search.getElementsByTagName("li");


  // recorriendo elemenetos a filtar mediante los li
  for (i = 0; i < li.length; i++) {

    a = li[i].getElementsByTagName("a")[0];
    textValue = a.textContent || a.innerText;

    if (textValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      box_search.style.display = "block";

      if (inputSearch.value === "") {
        box_search.style.display = "none";
      }

    } else {
      li[i].style.display = "none";
    }

  }

}

//    final buscador 

// MOSTRAR Y OCULAR HEADER AL HACER SCROLL

const header = document.getElementById('header');
var lastScrollY = 0;

window.addEventListener('scroll', function (){
var currentScrollY = window.scrollY;

if (currentScrollY > 1) {
    if (currentScrollY > lastScrollY) {
          header.classList.add('header--scroll-down');
          header.classList.remove('header--scroll-up');
      } else {
          header.classList.remove('header--scroll-down');
          header.classList.add('header--scroll-up');
       }
    
        lastScrollY = currentScrollY;
      } else {
          header.classList.remove('header--scroll-up');
      }
});