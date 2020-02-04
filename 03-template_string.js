//template string
const nombre = "Alan";
const trabajo = "Desarrollador Web";

//concatenar string
console.log(`Nombre ${nombre} Trabajo ${trabajo}`);
//concatenar string multiline
const contenedorApp = document.querySelector('#app');
let html = `<ul><li>Nombre: ${nombre} </li>
                <li>Trabajo: ${trabajo} </li>
            </ul>`;
contenedorApp.innerHTML = html;