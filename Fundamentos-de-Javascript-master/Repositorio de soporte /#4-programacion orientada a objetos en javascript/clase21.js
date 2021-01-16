// Prototipos en JS. Un objeto en JavaScript tiene otro objeto,
// llamado prototype (prototipo, en español). Cuando pedimos a un
// objeto una propiedad que no tiene, la busca en su prototipo.
//  ... Prototype es una propiedad de Object,
// -el objeto del que se derivan todos los demás objetos-,
//  y esta propiedad es, a su vez, un objeto.

 function Persona(nombre, apellido) {
  this.nombre = nombre
  this.apellido = apellido
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

var sacha = new Persona('Sacha', 'Lifszyc')
var erika = new Persona('Erika', 'Luna')
var arturo = new Persona('Arturo', 'Martinez')

// Las clases son funciones cuya sintaxis tiene dos componentes:
//  expresiones y declaraciones
//
// En esta clase veremos el uso de this. Dentro de una función,
//  el valor de this depende de cómo es llamada ésta.

// Reto: agrega el atributo altura y la función soyAlto.
