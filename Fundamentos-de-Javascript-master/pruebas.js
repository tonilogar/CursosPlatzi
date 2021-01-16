document.body.innerHTML="<strong>Haciendo pruebas del curso en la consola</strong><br>";

// Objetos, Propiedades y Métodos en JavaScript.

// JavaScript es un Lenguaje Orientado a Objetos. Quiere decir que
// trata a los elementos del DOM como objetos con propiedades, métodos y clases propias.

var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  altura: 1.72,
  cantidadDeLibros: 111
}

var alan = {
  nombre: 'Alan',
  apellido: 'Perez',
  altura: 1.86,
  cantidadDeLibros: 78
}

var martin = {
  nombre: 'Martin',
  apellido: 'Gomez',
  altura: 1.85,
  cantidadDeLibros: 132
}

var dario = {
  nombre: 'Dario',
  apellido: 'Juarez',
  altura: 1.71,
  cantidadDeLibros: 90
}

var vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura: 1.56,
  cantidadDeLibros: 91
}
 
var paula = {
  nombre: 'Paula',
  apellido: 'Barros',
  altura: 1.76,
  cantidadDeLibros: 182
}


var personas = [sacha,alan,martin,dario,vicky,paula];

//---arrays---//

//filter
const esAlta = ({ altura }) => altura > 1.8;
var personasAltas = personas.filter(esAlta);
console.log(personasAltas);

//map
const alturacm = persona => ({...persona,altura: persona.altura * 100})
var personascm = personas.map(alturacm)
console.log(personascm)

//reduce
const reducer = (acum,{cantidadDeLibros}) => acum + cantidadDeLibros;

    // var acum = 0;
    //
    // for (var i = 0; i < personas.length; i++) {
    //   acum += personas[i].cantidadDeLibros
    // }

var totalDeLibros = personas.reduce(reducer, 0)
console.log(`en total todos tienen ${totalDeLibros} libros leidos`);
//----------------------------------------------------------------------//

//---Prototipos---//
function Persona(nombre,apellido,altura){
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

    // Persona.prototype.saludar = function (){
    //   if (this.altura >= 1.8){
    //     this.altura = `alto`
    //   }else {
    //     this.altura = `bajo`
    //   }
    //   console.log(`hola,me llamo ${this.nombre} ${this.apellido} y soy ${this.altura} `);
    // }



Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.soyAlto = function () {
  return this.altura >= 1.8
}

//---herencia de Prototipos

function heredaDe(prototipoHijo, prototipoPadre) {
  var fn = function () {}
  fn.prototype = prototipoPadre.prototype
  prototipoHijo.prototype = new fn
  prototipoHijo.prototype.constructor = prototipoHijo
}

    heredaDe(Desarrollador,Persona)

function Desarrollador (nombre,apellido) {
  this.nombre = nombre
  this.apellido = apellido
}

Desarrollador.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} y soy desarrollador`);
}

var nIcanor= new Persona("Nicanor","villalba",1.4)
var crIstian = new Desarrollador("Cristan","Caraballo",1.8)

nIcanor.saludar()
crIstian.saludar()

//-------clases
class Person {
  constructor (name, surname, height) {
    this.name = name
    this.surname = surname
    this.height = height
  }
  //saludar
  greet() {
    console.log(`Hi,My name is ${this.name} ${this.surname}`);
  }
  //alto
  tall() {
    return this.height >= 1.8
  }
}

class Developer extends Person {
  constructor(name,surname,height){
    super(name,surname,height)
  }
  greet(){
    console.log(`Hi,My name is ${this.name} and i'm developer`);
  }
}
var nicanor= new Person("Nicanor","villalba",1.4)
var cristian = new Developer("Cristan","Caraballo",1.8)

nicanor.greet()
cristian.greet()
//--------------------------asincronismo------------------------------//
// JavaScript sólo puede hacer una cosa a la vez, sin embargo; es capaz de
// delegar la ejecución de ciertas funciones a otros procesos.
// Este modelo de concurrencia se llama EventLoop.

// JavaScript delega en el navegador ciertas tareas y les asocia funciones que
// deberán ser ejecutadas al ser completadas. Estas funciones se llaman
// callbacks, y una vez que el navegador ha regresado con la respuesta,
// el callback asociado pasa a la cola de tareas para ser ejecutado una vez que
// JavaScript haya terminado todas las instrucciones que están en la pila de ejecución.

// Si se acumulan funciones en la cola de tareas y JavaScript se encuentra ejecutando
// procesos muy pesados, el EventLoop quedará bloqueado y esas funciones pudieran
// tardar demasiado en ejecutarse.

// (NO BLOQUE'ES EL EVENT LOOP)


// ¿Cómo funciona el tiempo en JavaScript? (clase50.html)

// En principio, cualquier tarea que se haya delegado al navegador a través de
// un callback, deberá esperar hasta que todas las instrucciones del programa
// principal se hayan ejecutado. Por esta razón el tiempo de espera definido en
// funciones como setTimeout, no garantizan que el callback se ejcute en ese tiempo
// exactamente, sino en cualquier momento a partir de allí, sólo cuando la cola de
// tareas se haya vaciado.

// Callbacks
//
// En esta clase aprenderemos que son los callbacks y usaremos una librería
// externa que se llama jQuery.
      //jQuery es una biblioteca multiplataforma de JavaScript, creada inicialmente
      // por John Resig, que permite simplificar la manera de interactuar
     // con los documentos HTML, manipular el árbol DOM, manejar eventos,
     // desarrollar animaciones y agregar interacción con la técnica AJAX a páginas web.

// Un callback es una función que se pasa a otra función como un argumento.
// Esta función se invoca, después, dentro de la función externa para completar alguna acción.

// (ver clase 26 "funciones como parametros" para reforzar)

// -----En esta clase usaremos jQuery para hacer request a una API de star wars-----//

// $.get("https://swapi.co/api/people/1",{crossDomain: true}, function(parametro){
//   console.log(parametro.name)
// } )

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'


// $.get(`${API_URL}${PEOPLE_URL.replace(':id', 1)}`,{ crossDomain: true })
//{ crossDomain: true } es para indicarle a jQuery que el request se va hacer hacia otra pagina
// .replace(':id', 1) es un metodo de los string para cambiar su contenido

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }

$.get(lukeUrl, opts, function () {
  console.log(arguments)
})
    // (arguments) es una variable que tienen todas las funciónes y
    // nos da un array con los parametros de la funcion

// https://api.jquery.com/jQuery.get/ (soporte tecnico)

    // ---url
    // Type: String
    // A string containing the URL to which the request is sent.

    // ---data
    // Type: PlainObject or String
    // A plain object or string that is sent to the server with the request.

    // ---success
    // Type: Function( PlainObject data, String textStatus, jqXHR jqXHR )
    // A callback function that is executed if the request succeeds.
     // Required if dataType is provided, but you can use null or jQuery.noop
     // as a placeholder.

    // ---dataType
    // Type: String
    // The type of data expected from the server. Default: Intelligent Guess
    // (xml, json, script, text, html).

//
// $.get(lukeUrl, opts, function (loquesea) {
//   console.log(loquesea)
// })

// $.get(lukeUrl, opts, function (data) {
//   console.log(`Hola soy ${data.name}`)
// })

const onPeopleResponse = function(persona){
  console.log(`Hola,yo soy ${persona.name}`)
}

// En esta clase accederemos a múltiples datos al mismo tiempo.
 // Continuaremos trabajando con los jQuery y swapi.

function obtenerPersonaje(id) {
const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

$.get(url, opts, onPeopleResponse)
}

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)
obtenerPersonaje(4)
obtenerPersonaje(5)
obtenerPersonaje(6)

// (repasar clase 30)
// -------------------------Promesas-----------------------//

// En esta clase veremos las promesas, que son valores que aun no conocemos. Las promesas tienen tres estados:
//     pending
//     fullfilled
//     rejected
// Las promesas se invocan de la siguiente forma:
// new Promise( ( resolve, reject ) => {
     // --- llamado asíncrono
//   if( todoOK ) {
      // -- se ejecutó el llamado exitosamente
//      resolve()
//   } else {
      // -- hubo un error en el llamado
//      reject()
//   }})
// No olvides ver el material adjunto de esta clase.

function obtenerPersonaje(id) {

  return new Promise((resolve, reject) =>
  { 
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $
      .get(url, opts, function (data)
      {
        resolve(data)
      })
      .fail(() => reject(id))
  })
}

function onError(id) {
  console.log(`Sucedió un error al obtener el personaje ${id}`)
}

async function obtenerPersonajes(){
  var ids =[1,2,3,4,5,6]
  var promesas = ids.map(id => obtenerPersonaje(id))
  try{
  var personajes = await Promise.all(promesas)
  console.log(personajes)
  }catch{
    onError(id)
  }
}
// var ids = [1, 2, 3, 4, 5, 6, 7]
// var promesas = ids.map(id => obtenerPersonaje(id))
// Promise
//   .all(promesas)
//   .then(personajes => console.log(personajes))
//   .catch(onError)

obtenerPersonajes()
