
$(function(){

// Funciones mara mostrar / ocultar Bolques entrada de datos

    $("#mostrarOne").click(function () {	 
        $('.s1').toggle("slow");

    });

    $("#mostrarTwo").click(function () {	 
        $('.s2').toggle("slow");

    });

    $("#mostrarThree").click(function () {	 
        $('.dataTimeOne').toggle("slow");

    });

    $("#mostrarFour").click(function () {	 
        $('.observacion').toggle("slow");

    });

    $("#mostrarFive").click(function () {	 
        $('.riesgo').toggle("slow");

    });

    $("#mostrarManual").click(function () {	 
        $('.blocks').toggle("slow");

    });

    let inputsThree =  $(".inputsThree");
    let inputsFour =  $(".inputsFour");
    
    $("#agregarPersona").click(function () {	 
        
        inputsThree.prepend( ` <div class="inputsThree">
                                    <input class="form-control" placeholder="Nombre de Pila"></input>
                                    <input class="form-control" placeholder="Unidad Organizativa"></input>
                                    <input class="form-control" placeholder="Direccion"></input>
                                    <input class="form-control" placeholder="Mail"></input>
                                    </div>`);

        inputsFour.prepend( `<div class="inputsFour">    
                            <input class="form-control" placeholder="Apellidos"></input>
                            <input class="form-control" placeholder="Empresa"></input>
                            <input class="form-control" placeholder="Telefono"></input>
                            <input class="form-control" placeholder="DNI"></input>
                            <div>`)

        
    });

    $("#borrarPersona").click(function () {	 
        
     inputsThree.remove(); 
     inputsFour.remove();
    });




});



