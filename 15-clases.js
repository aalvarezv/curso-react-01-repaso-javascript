class Tarea {

    constructor(nombre, prioridad) {
        this.nombre = nombre
        this.prioridad = prioridad
    }

    mostrar() {
        return `${this.nombre} tiene una urgencia de ${this.prioridad}`
    }

}

let tarea1 = new Tarea('Aprender Javascript', 'Alta')
let tarea2 = new Tarea('Preparar Café', 'Alta')
let tarea3 = new Tarea('Pasear al perro', 'Media')
console.log(tarea1)
console.log(tarea1.mostrar())
console.log(tarea2)
console.log(tarea3)