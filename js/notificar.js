
$(function(){

   // CREAR bloque persona con btn "añadir Persona"

  $('#agregarPersona').on('click', function() {
    $('.inputsThree').append(` <div class="idatos">
                                <input class="form-control" placeholder="Nombre de Pila"></input>
                                <input class="form-control" placeholder="Apellidos"></input>
                                <input class="form-control" placeholder="Empresa"></input>
                                <input class="form-control" placeholder="Direccion"></input>
                                <input class="form-control" placeholder="Mail"></input>
                                <input class="form-control" placeholder="Telefono"></input>
                                <input class="form-control" placeholder="DNI"></input>
                                <input class="form-control" placeholder="Unidad Organizativa"></input>
                                <button class="remover btn btn-outline-danger">Borrar Persona</button>
                                </div>`);
                         
  });
  
  //ELIMINAR Bloque de datos Btn "Añadir Persona"
  $(document).on('click', '.remover', function(){
    $(this).parents('.idatos').remove();
    

  })
});





