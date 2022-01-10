
//  Funcion para cambiar de tema claro/oscuro



let theme = true
function changeTheme() {

  const container = document.querySelector('body')
  const iconos = document.getElementsByClassName("iconify");
  theme = !theme
  if (theme) {

    for (let i = 0; i < iconos.length; i++) {
        iconos[i].style.color = "black"
        
    }  

    container.style.background = 'linear-gradient(to bottom, #f1f0ff, #f1effe, #f1eefd, #f2edfc, #f2ecfb, #efe7fa, #ece2f8, #eaddf7, #e4d3f6, #ddc9f5, #d6bff4, #ceb5f3)'

    

    // localStorage.setItem('theme', 'light')

  } else {

    for (let i = 0; i < iconos.length; i++) {
        iconos[i].style.color = "#8D98A7"
        
    } 

    container.style.background = 'black';

    
    // localStorage.setItem('theme', 'dark')
  }
}


