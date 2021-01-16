function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

// En esta clase veremos cómo se modifican las clases de herencias.
// JavaScript funciona con una estructura orientada a objetos y
// cada objeto tiene una propiedad privada que mantiene un
// enlace a otro objeto llamado prototipo.

Persona.prototype.saludar = () => {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = () => this.altura > 1.8

var sacha = new Persona('Sacha', 'Lifszyc', 1.72)
var erika = new Persona('Erika', 'Luna', 1.65)
var arturo = new Persona('Arturo', 'Martinez', 1.89)

sacha.soyAlto()
erika.soyAlto()
arturo.soyAlto()
