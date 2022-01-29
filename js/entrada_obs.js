
// clave almacenada en const
const clave_localStorage = "dataArr"

let datosObservacion = [];

console.log(datosObservacion);

$("#formOne").submit(function(event){
    event.preventDefault();

// inputs notificar.html -     
    titulo = $(this).find('input[name="titulo"]').val();
    fecha = $(this).find('input[name="fecha"]').val();
    horario = $(this).find('input[name="horario"]').val();
    ubicacion = $(this).find('input[name="ubicacion"]').val();
    calle = $(this).find('input[name="calle"]').val();
// inputs notificar.html - sujeto observacion
    nombre = $(this).find('input[name="nombre"]').val();
    unidad = $(this).find('input[name="unidad"]').val();
    direccion = $(this).find('input[name="direccion"]').val();
    mail = $(this).find('input[name="mail"]').val();
    apellidos = $(this).find('input[name="apellidos"]').val();
    empresa = $(this).find('input[name="empresa"]').val();
    telefono = $(this).find('input[name="telefono"]').val();
    dni = $(this).find('input[name="dni"]').val();

    let ingresok = confirmar_datos(titulo,fecha,ubicacion,calle,nombre,direccion,apellidos,empresa,telefono,dni);

        if (ingresok === ""){

            datosObservacion.push(new EntradaUno(titulo,fecha,horario,ubicacion,calle,nombre,unidad,direccion,mail,apellidos,empresa,telefono,dni));
            guardar_user(datosObservacion);

        }else{
        
            alert("Favor Ingresa todos los datos con *")
        }
});

// Limpiar datos del local storage

function deleteUser() {
    localStorage.clear()
}

// Funcion para guardar datos de entrada en inputs al local Storage

function guardar_user(datosObservacion){

    let dato = localStorage.getItem(clave_localStorage);

        if (dato){

            let dato_guardado = JSON.parse(localStorage.getItem(clave_localStorage));
                dato_guardado.push(datosObservacion);
            
            let dato_string = JSON.stringify(dato_guardado);
                localStorage.setItem(clave_localStorage, dato_string);    
    }
        else {

            let dato_guardado = new Array();
                dato_guardado.push(datosObservacion)

            let dato_string = JSON.stringify(dato_guardado);
                localStorage.setItem(clave_localStorage,dato_string);    
    }
}

// Funcion para confiramr si se ingresaron datos en inputs de entrada

function confirmar_datos(titulo,fecha,ubicacion,calle,nombre,direccion,apellido,empresa,telefono,dni){

    let check = "";
    
    if ( (titulo !=="") && (fecha !=="") && (ubicacion !=="") && (calle !=="") && (nombre !=="") && (direccion !=="") && (apellido !=="") && (empresa !=="") && (telefono !=="") && (dni !=="")){
   
        alert("Muchas gracias :)")         
}
    else {

        check = "Favor de ingresar todos los datos con * :("
        }
            return check;
    }

const URLGET = "https://jsonplaceholder.typicode.com/posts"

//Declaramos la información a enviar
const infoPost =  { titulo: "hola", ubicacion: "ubicacion"}
//Agregamos un botón con jQuery

//Escuchamos el evento click del botón agregado
$("#datosNotificar").click(() => { 
     
    $.post(URLGET, infoPost ,(respuesta, estado) => {
      console.log(respuesta);
        if(estado === "success"){
            $("body").prepend(`<div>
Guardado:${respuesta.titulo}
</div>`);
        }  
    });
});



//Declaramos la url del archivo JSON local
const URLJSON = "../json/json_local.json"
//Agregamos un botón con jQuery

// $("body").prepend('<button id="btn3">JSON</button>');

//Escuchamos el evento click del botón agregado
$("#btn3").click(() => { 
$.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
        let misDatos = respuesta;
        for (const dato of misDatos) {
          $("body").prepend(`<div>
                               <h3>${dato.title}</h3>
                               <p> ${dato.id}</p>
                              </div>`);
        }  
      }else{
        console.log(respuesta)
    }


    }); 
});      