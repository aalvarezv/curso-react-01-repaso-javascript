class Tarea {

    constructor(nombre, prioridad) {
        this.nombre = nombre
        this.prioridad = prioridad
    }

    mostrar() {
        return `${this.nombre} tiene una urgencia de ${this.prioridad}`
    }

}

class ComprasPendientes extends Tarea {
    constructor(nombre, prioridad, cantidad) {
        super(nombre, prioridad) //hace referencia al constructor padre.
        this.cantidad = cantidad

    }

    mostrar() {
        console.log(super.mostrar(), ` y necesito ${this.cantidad}`) //con super llama a la clase padre.
    }

    saludar() {
        console.log('hola!')
    }
}

let tarea1 = new Tarea('Aprender Javascript', 'Alta')
let tarea2 = new Tarea('Preparar Café', 'Alta')
let tarea3 = new Tarea('Pasear al perro', 'Media')
console.log(tarea1)
console.log(tarea1.mostrar())
console.log(tarea2)
console.log(tarea3)

let compra1 = new ComprasPendientes('Jabon', 'Media', 3);
console.log(compra1)
compra1.mostrar()
compra1.saludar()