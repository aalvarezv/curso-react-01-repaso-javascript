const carrito = ['Producto 1', 'Producto 2', 'Producto 3']
console.log(carrito)
carrito.forEach(producto => {
    console.log(`forEach ${producto}`)
})

//Map permite reescribir el arreglo.
let carritoMap = carrito.map(producto => {
    console.log(`map ${producto}`)
    return `map ${producto}`
})
console.log(carritoMap)


//Object key -> devuelve los titulos de la propiedad de un objeto
const persona = {
    nombre: 'Alan',
    trabajo: 'Desarrollador',
    edad: '34'
}

console.log(Object.keys(persona));
console.log(Object.keys(persona)[1]);