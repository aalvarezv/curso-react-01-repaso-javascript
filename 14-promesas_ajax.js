const descargarUsuarios = cantidad => new Promise((resolve, reject) => {
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`
        //llamada ajax
    const xhr = new XMLHttpRequest()
    xhr.open('GET', api, true)
    xhr.onload = () => {
        if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText).results)
        } else {
            reject(Error(xhr.statusText))
        }
    }

    xhr.onerror = (error) => reject(error)


    xhr.send()

})

descargarUsuarios(20).then(
    resultado => console.log(resultado),
    error => console.error(
        new Error('Hubo un error' + error)
    )
)