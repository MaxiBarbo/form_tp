
//Cramos clase constructor para agrupar datos
//Bloque datos "que a sucedido" en notificar.html

class EntradaUno{
    constructor(titulo,fecha,horario,ubicacion,calle){
        this.titulo = titulo;
        this.fecha = fecha;
        this.horario = horario;
        this.ubicacion = ubicacion;
        this.calle = calle;

    }
}
// clave almacenada en const
const clave_localStorage = "dataArr"
const clave_localStorageTwo = "dataArrTwo"

let datosObservacion = [];
let datoSujeto = [];

console.log(datoSujeto);
console.log(datosObservacion);


$("#formOne").submit(function(event){
    event.preventDefault();

// inputs notificar.html -     
    titulo = $(this).find('input[name="eone"]').val();
    fecha = $(this).find('input[name="ethree"]').val();
    horario = $(this).find('input[name="efour"]').val();
    ubicacion = $(this).find('input[name="efive"]').val();
    calle = $(this).find('input[name="eseven"]').val();

// inputs notificar.html - sujeto observacion
    nombre = $(this).find('input[name="eblockone"]').val();
    unidad = $(this).find('input[name="eblocktwo"]').val();
    direccion = $(this).find('input[name="eblockthree"]').val();
    mail = $(this).find('input[name="eblockfour"]').val();
    apellidos = $(this).find('input[name="eblockfive"]').val();
    empresa = $(this).find('input[name="eblocksix"]').val();
    telefono = $(this).find('input[name="eblockseven"]').val();
    dni = $(this).find('input[name="eblockeight"]').val();

    let ingresok = confirmar_datos(titulo,fecha,ubicacion,calle,nombre,direccion,apellidos,empresa,telefono,dni);

        if (ingresok === ""){

            datosObservacion.push(new EntradaUno(titulo,fecha,horario,ubicacion,calle));
            guardar_user(datosObservacion);

            datoSujeto.push(new EntradaDos(nombre,unidad,direccion,mail,apellidos,empresa,telefono,dni));
            guardar_user(datoSujeto);

            }

        else{
        
            alert("Favor Ingresa todos los datos con *")
        }
});

// Limpiar datos del local storage

function deleteUser() {
    localStorage.clear()
}

// Funcion para guardar datos de entrada en inputs al local Storage

function guardar_user(datosObservacion){

    let dato = localStorage.getItem(clave_localStorage)
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
const infoPost =  { titulo: datosObservacion, profesion: "Programadora"}
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
$("body").prepend('<button id="btn3">JSON</button>');
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