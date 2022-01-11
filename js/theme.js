
//Constantes a variar segun tema
const container = document.querySelector('body');
const iconos = document.getElementsByClassName("iconify"); 
const label = document.getElementsByClassName("form-label");
const hone = document.getElementsByTagName('h1');

// console.log(h1)
//  Funcion para cambiar de tema claro/oscuro
let theme = true
function changeTheme() {

  theme = !theme
  if (theme) {

    // color iconos
    for (let i = 0; i < iconos.length; i++) {
        iconos[i].style.color = "black"
        localStorage.setItem('iconos', 'light')   
    } 

    // color label
    for (let i = 0; i < label.length; i++) {
      label[i].style.color = "blue"
      localStorage.setItem('label', 'light') 
    }  

    // color h1
    for (let i = 0; i < hone.length; i++) {
      hone[i].style.color = "grey"
      localStorage.setItem('h1', 'light') 
    } 

    //Color Background
    container.style.background = 'linear-gradient(to bottom, #f1f0ff, #f1effe, #f1eefd, #f2edfc, #f2ecfb, #efe7fa, #ece2f8, #eaddf7, #e4d3f6, #ddc9f5, #d6bff4, #ceb5f3)'
    localStorage.setItem('theme', 'light')

  } else {

    // color iconos
    for (let i = 0; i < iconos.length; i++) {
        iconos[i].style.color = "#8D98A7"
        localStorage.setItem('iconos', 'dark')
    } 

    // color label
    for (let i = 0; i < label.length; i++) {
      label[i].style.color = "white"
      localStorage.setItem('label', 'dark') 
    } 

    // color h1
    for (let i = 0; i < hone.length; i++) {
      hone[i].style.color = "white"
      localStorage.setItem('h1', 'dark') 
    } 

    //Color Background
    container.style.background = 'black';
    localStorage.setItem('theme', 'dark')
  }
}

// Funcion al cargar se ejecuta tema del LocalStorage

function loadPage() {

// se cambia el color tema Background

  if (localStorage.getItem('theme')) {
    if (localStorage.getItem('theme') === 'light') {
      container.style.background = 'white'
    } else {
      container.style.background = 'black'
    }
  }

// se cambia el color tema iconos 

  if (localStorage.getItem('iconos')) {

    if (localStorage.getItem('iconos') === 'dark') {

        for (let i = 0; i < iconos.length; i++) {

          iconos[i].style.color = '#8D98A7'
    }
      } 
    
    else {

        for (let i = 0; i < iconos.length; i++) {
        iconos[i].style.color = 'black'

        }
    }
  }

// se cambia el color de los label

if (localStorage.getItem('label')) {

  if (localStorage.getItem('label') === 'dark') {

      for (let i = 0; i < label.length; i++) {

        label[i].style.color = 'blue'
  }
    } 
  
  else {

      for (let i = 0; i < label.length; i++) {
      label[i].style.color = 'black'

      }
  }
}

// se cambia el color de los H1

if (localStorage.getItem('h1')) {

  if (localStorage.getItem('h1') === 'dark') {

      for (let i = 0; i < hone.length; i++) {

        hone[i].style.color = 'white'
  }
    } 
  
  else {

      for (let i = 0; i < hone.length; i++) {
      hone[i].style.color = 'grey'

      }
  }
}

}
