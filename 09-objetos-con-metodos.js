const persona = {
    nombre: 'Alan',
    trabajo: 'Desarrollador',
    edad: '34',
    musicaRock: true,
    mostrarInformacion() {
        console.log(`${this.nombre} es ${this.trabajo} y tiene ${this.edad} años`)
    }
}

persona.mostrarInformacion();