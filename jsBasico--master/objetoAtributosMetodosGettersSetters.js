function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  }
  
Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
  }

Persona.prototype.alturaF = function () {
    if(this.altura >= 1.8) 
        {
        console.log("Soy alto");
        } 
    else { 
        console.log("Soy bajo");
        }
}

//Getters setters
Persona.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    }
Persona.prototype.getNombre = function () {
        return this.nombre;
    }

Persona.prototype.setApellido = function (apellido) {
        this.apellido = apellido;
    }
Persona.prototype.getApellido = function () {
        return this.apellido;
    }

Persona.prototype.setAltura = function (altura) {
        this.altura = altura;
    }
Persona.prototype.getAltura = function () {
        return this.altura;
    }


//Constructor
var sacha = new Persona('Sacha', 'Lifszyc', 1.9)