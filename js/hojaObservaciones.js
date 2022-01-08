
$(document).ready(function () {

    //  $(".blocks").hide();
    
    
    inputIndex = $("[name*='dataFecha']");
    inputIndex.css("color", "red")

});

// $("[name*='bttnM']").click("click",() =>{

    // $(".blocks").show();

// });

let show = true;

function ShowtOne() {

    show = !show
    const contain = document.querySelector('.s1')
    if (show) {

        // buttonShow.innerHTML = `<span class="a2">Cerrar Form</span>`
        contain.classList.add('init')
        
        
    } else {
     
      // buttonShow.innerHTML = `<span class="a2">Abrir Form</span>`
      contain.classList.remove('init');    
        
    }
}

function Showtwo() {

    show = !show
    const contain = document.querySelector('.s2')
    const buttonShow = document.getElementById("");
    if (show) {
        
        // buttonShow.innerHTML = `<span class="a2">Abrir Form</span>`
        contain.classList.remove('init')
     
    } else {
     
        // buttonShow.innerHTML = `<span class="a2">Cerrar Form</span>`
        contain.classList.add('init')  
    }
}

function Showthree() {

    show = !show
    const contain = document.querySelector('.dataTimeOne')
    const buttonShow = document.getElementById("");
    if (show) {
        
        // buttonShow.innerHTML = `<span class="a2">Abrir Form</span>`
        contain.classList.remove('init')
     
    } else {
     
        // buttonShow.innerHTML = `<span class="a2">Cerrar Form</span>`
        contain.classList.add('init')  
    }
}
function ShowtFour() {

    show = !show
    const contain = document.querySelector('.observacion')
    const buttonShow = document.getElementById("");
    if (show) {
        
        // buttonShow.innerHTML = `<span class="a2">Abrir Form</span>`
        contain.classList.remove('init')
     
    } else {
     
        // buttonShow.innerHTML = `<span class="a2">Cerrar Form</span>`
        contain.classList.add('init')  
    }
}
function ShowtFive() {

    show = !show
    const contain = document.querySelector('.riesgo')
    if (show) {
        
        // buttonShow.innerHTML = `<span class="a2">Abrir Form</span>`
        contain.classList.remove('init')
     
    } else {
     
        // buttonShow.innerHTML = `<span class="a2">Cerrar Form</span>`
        contain.classList.add('init')  
    }
}

