//object destructuring extrae valores de un objeto
const aprendiendoJS = {
    version: {
        nueva: 'ES7',
        anterior: 'ES6'
    },
    frameworks: ['ReactJS', 'VueJS', 'Angular']
}

console.log(aprendiendoJS);
//1
let { version, frameworks } = aprendiendoJS;
console.log(version)
console.log(frameworks)
    //2
let { nueva } = aprendiendoJS.version;
console.log(nueva)