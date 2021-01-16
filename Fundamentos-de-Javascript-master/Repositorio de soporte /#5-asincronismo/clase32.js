// Promesas

// En esta clase veremos las promesas, que son valores que aun no conocemos. Las promesas tienen tres estados:

//     pending
//     fullfilled
//     rejected 

// Las promesas se invocan de la siguiente forma:

// new Promise( ( resolve, reject ) => {
//   // --- llamado asíncrono
//   if( todoOK ) {
//      // -- se ejecutó el llamado exitosamente
//      resolve()
//   } else {
//      // -- hubo un error en el llamado
//      reject()
//   }
// } )

// No olvides ver el material adjunto de esta clase. https://static.platzi.com/media/public/uploads/promesas_e7100aa0-540e-4d37-83fc-113b890c350e.pdf
 
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }
 
function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
      .get(url, opts, function (data) {
        resolve(data)
      })
      .fail(() => reject(id))
  })
}

function onError(id) {
  console.log(`Sucedió un error al obtener el personaje ${id}`)
}

obtenerPersonaje(1)
  .then(function (personaje) {
    console.log(`El personaje 1 es ${personaje.name}`)
  })
  .catch(onError)
