
// Capturar los elementos del DOM
const formulario = document.querySelector('#formulario');
const genero = document.querySelector('#genero');
const filtrar = document.querySelector('#filtrar');
const cajaPelis = document.querySelector('#cajaPelis');
const listaErrores = document.querySelector('#listaErrores');
const mensajeTabla = document.querySelector('#mensajeTabla');

const fragment=document.createDocumentFragment()


//Array peliculas, almacen general

let arrayPelis = [];
let arrayGeneros=['Terror','Comedia','Acción', 'Romántica']

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



formulario.addEventListener('submit', (ev) => {
    ev.preventDefault();
    validar();
    pintarTabla()

});

filtrar.addEventListener('change',(ev)=>{
    const filtro=ev.target.value;
    const arrayFiltrados= arrayPelis.filter((item)=>item.genero==filtro)
    console.log(arrayFiltrados)

    pintarTabla(arrayFiltrados)
})


const pintarSelect=(...array)=>{
    array.forEach((item)=>{
        const opcion=document.createElement('OPTION')
        opcion.value=item
        opcion.text=item

        fragment.append(opcion)

    })

   return fragment

}

const validar = () => {

    const regExp={
        titulo:/^.{2,}$/ig,
        director:/^[a-zÁ-ü]{2,}$/i,
        anio:/^[\d]{4}$/
    }

    let date = new Date()
    let year = date.getFullYear()

    let titulo = formulario["titulo"].value;
    let director = formulario["director"].value;
    let anio = formulario["anio"].value;
    let valorGenero = formulario["genero"].value;

    let errores=''

    if (!regExp.titulo.test(titulo)) {
        errores+='<li>Introduzca un título correcto</li>'
    };

    if (!regExp.director.test(director)) {
        errores+='<li>Introduzca un director válido</li>'
    };

    if (!regExp.anio.test(anio) || (anio > year || anio < 1800)) {
        errores+='<li>Introduzca un año entre el 1800 y la fecha actual</li>'
    };

    if (valorGenero=='Seleccionar Género') {
        errores+='<li>selecciona un genero</li>'
    };

   

    if (errores === '') {

        const objPeli={
            director,
            titulo,
            anio,
            genero:valorGenero,
        }

        almacenarPelis(objPeli)
        listaErrores.innerHTML=''
        formulario.reset()

    }else{
        listaErrores.innerHTML=errores
    };

};

const almacenarPelis=(objPeli)=>{
    arrayPelis.push(objPeli);
    filtrar.removeAttribute('disabled')
}


const pintarTabla=(array=arrayPelis)=>{
    cajaPelis.innerHTML=''
    if(array.length==0){
        mensajeTabla.textContent=' No ha peliculas que mostrar'
    }else{
        array.forEach((item)=>{
            const fila=document.createElement('TR')
            fila.innerHTML=`<td>${item.titulo}</td>
                             <td>${item.director}</td>
                             <td>${item.anio}</td>
                             <td>${item.genero}</td>`
     
             fragment.append(fila)
         })
     
         cajaPelis.append(fragment)
     
    }

   

}
// Función que almacene el objeto de la peli en array se llama desde la función captura y recibe el objeto como argumanto
/*function(objetoDeLaPelicula) {
    objeto.push(arrayPelis)
}*/

//Función Pintar Tabla recibe en array que tiene que pintar en invocada despues de la función almacenar - y con el evento change del select del filtro

genero.append(pintarSelect('Seleccionar Género',...arrayGeneros))
filtrar.append(pintarSelect('Mostrar Todas',...arrayGeneros))

















