
// Capturar los elementos del DOM
const enviarFormulario = document.querySelector('#enviar')
const formulario = document.querySelector('#formulario');
const titulo = document.querySelector('#titulo');
//const campoDirector = document.querySelector('#director');
//const campoAnio = document.querySelector('#anio');

//Array peliculas, almacen general

let arrayPelis = [];

//Array películas filtradas

//const peliculasFiltradas = [];

// Array generos

//const generos = ["Terror", "Acción", "Comedia", "Romántica"]



//Crear Select - > retorna un fragment con los inputs

/*

const fragment = new DocumentFragment();


const eligeGenero = () => {

    let genero = [
        {
            generos: "Terror",  
        },
        {
            generos: "Acción",
        },
        {
            generos: "Comedia",
        },
        {
            generos: "Romántica",
        }
    ];
    return genero
}
*/
//document.createElement()


//Funcion que captura y valide los datos de formulario retorna el objeto de la pelicula se disparada por el submit del formualario

let objValidar = {
    titulo: false,
    director: false,
    anio: false
};


formulario.addEventListener('submit', (ev) => {
    ev.preventDefault();
    validar();

});

const validar = () => {

    let date = new Date()
    let year = date.getFullYear()

    let titulo = document.forms["formulario"]["titulo"].value;
    let director = document.forms["formulario"]["director"].value;
    let anio = document.forms["formulario"]["anio"].value;



    let arrayValidar = Object.values(objValidar);
    console.log(arrayValidar)
    //console.log(titulo,director,anio)

    titulo == ''

    if (isNaN(titulo) && titulo.trim().length > 0) {
        objValidar.titulo = true
    };

    if (isNaN(director) && director.trim().length > 0) {
        objValidar.director = true
    };

    if (!isNaN(anio) && anio < year && anio > 1800) {
        objValidar.anio = true
    };

    arrayValidar = Object.values(objValidar);


    const valida = arrayValidar.findIndex(item => item == false);

    if (valida === -1) {


        console.log({ titulo });
        console.log({ director });
        console.log({ anio });
        let arrayPelis = [];
        arrayPelis.push(titulo, director, anio);
        console.log(arrayPelis)

        console.log("todo esta bien");

    };

};


// Función que almacene el objeto de la peli en array se llama desde la función captura y recibe el objeto como argumanto
/*function(objetoDeLaPelicula) {
    objeto.push(arrayPelis)
}*/

//Función Pintar Tabla recibe en array que tiene que pintar en invocada despues de la función almacenar - y con el evento change del select del filtro




















