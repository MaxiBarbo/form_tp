
$(function(){

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



