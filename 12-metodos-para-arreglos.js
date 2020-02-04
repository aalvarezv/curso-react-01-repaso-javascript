const personas = [
    { nombre: 'Alan', edad: 34, aprendiendo: 'Javascript' },
    { nombre: 'Wendy', edad: 27, aprendiendo: 'TEA' },
    { nombre: 'Milo', edad: 2, aprendiendo: 'Obediencia' },
    { nombre: 'Sabrina', edad: 1, aprendiendo: 'Escalar' },
    { nombre: 'Daisy', edad: 14, aprendiendo: 'Bañarse' }
]

console.log(personas)

//mayores de 28 años
const mayores = personas.filter(persona => {
    return persona.edad > 25
})
console.log(mayores)

const sabrina = personas.find(persona => {
    return persona.nombre === 'Sabrina'
})
console.log(sabrina)

const total = personas.reduce((edadTotal, persona) => {
    return edadTotal += persona.edad
}, 0)

console.log(total)