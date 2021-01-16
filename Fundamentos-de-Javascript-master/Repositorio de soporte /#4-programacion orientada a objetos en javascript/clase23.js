// En esta clase explicamos por qué al introducir el arrow function salió un error.
//  El error del contexto de this en javascrip es uno de los errores más comunes.
//
// Recuerda que dentro de la arrow function, this está haciendo referencia al
// espacio global, a windows.

// Si usas una arrow function y deseas por ejemplo acceder a
// la propiedad this.edad definida en el constructor, el valor que te dará
// será undefined por que las arrow function heredan el contexto de donde
// fueron declaradas.
// Entonces, si deseas acceder a propiedades de tu contructor mejor usa
//  las funciones de toda la vida.

function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function () {
  return this.altura > 1.8
}

var sacha = new Persona('Sacha', 'Lifszyc', 1.72)
var erika = new Persona('Erika', 'Luna', 1.65)
var arturo = new Persona('Arturo', 'Martinez', 1.89)
