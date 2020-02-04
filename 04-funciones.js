//function declaration -> se puede llamar antes o despues de crear la funcion ya que
//javascript primero busca todas las funciones del documento y luego las ejecuciones.
saludar('Alan antes de declarar funcion')

function saludar(nombre) {
    console.log(`Bienvenido ${nombre}`);
}
saludar('Alan despues de declarar funcion');

//function expression -> se puede llamar solamente despues de declararla.
const cliente = function(nombreCliente) {
    console.log(`Mostrando datos del cliente ${nombreCliente}`)
}
cliente('Alan');


//function declaration con parámetros default en las mismas funciones.
function actividadDec(nombre = 'Walter White', actividad = 'Enseñar Quimica') {
    console.log(`La persona ${nombre} esta en la actividad ${actividad}`);
}

actividadDec('Alan', 'Aprender Javascript');
actividadDec();
actividadDec('Alan')

//function expression con parámetros default en las mismas funciones.
const actividadExp = function(nombre = 'Walter White', actividad = 'Enseñar Quimica') {
    console.log(`La persona ${nombre} esta en la actividad ${actividad}`);
}
actividadExp();
actividadExp('Alan')


//arrow function
let viajando;
let viaje;
//forma 1
viajando = (destino, dias) => {
    return `viajando a ${destino} por ${dias}`
}
viaje = viajando('Alemania', '9 dias');
console.log(viaje);
//forma 2 aplica cuando retorna 1 sola linea.
viajando = destino => `viajando a ${destino}`
viaje = viajando('Alemania');
console.log(viaje);