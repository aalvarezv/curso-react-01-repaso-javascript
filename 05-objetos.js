//object literal
let persona = {
    nombre: 'Alan',
    profesion: 'Desarrollador',
    edad: 34
}

console.log(persona);
console.log(persona.nombre);
console.log(persona["edad"]);

//object constructor.
function Tarea(nombre, prioridad) {
    this.nombre = nombre;
    this.prioridad = prioridad;
}

const tarea = new Tarea('Aprender Javascript y React', 'Urgente');
console.log(tarea);
console.log(tarea.nombre);