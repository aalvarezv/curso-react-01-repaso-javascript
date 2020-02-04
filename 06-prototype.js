//prototype, a la funcion se le asocia una clase en este caso Tarea.
//de esta manera se puede acceder a todos las propiedades de la clase Tarea. nombre, prioridad, etc.
//El metodo que se cree, ejemplo:mostrarInformacionTarea solo podrá ser llamado
//desde un objeto creado a partir de la clase Tarea (Ejemplo: const tarea = new Tarea(nombre, prioridad))

function Tarea(nombre, prioridad) {
    this.nombre = nombre;
    this.prioridad = prioridad;
}

Tarea.prototype.mostrarInformacionTarea = function() {
    return `La tarea ${this.nombre} es de caracter ${this.prioridad}`
}
const tarea = new Tarea('Aprender Javascript y React', 'Urgente');
console.log(tarea.mostrarInformacionTarea());