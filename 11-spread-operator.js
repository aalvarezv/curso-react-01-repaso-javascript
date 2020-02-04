let lenguajes = ['javascript', 'php', 'python']
let frameworks = ['reactjs', 'laravel', 'django']

let combinados = [...lenguajes, ...frameworks]

console.log(combinados)

let [ultimo_lenguaje] = [...lenguajes].reverse()
console.log(ultimo_lenguaje)


let copiaLenguajes = [...lenguajes]
console.log(copiaLenguajes)

function suma(a, b, c) {
    console.log(a + b + c);
}

const numeros = [1, 2, 3]

suma(...numeros)