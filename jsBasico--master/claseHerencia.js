class Persona {
    constructor (nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }
  
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
    }

    alturaF() {
        if(this.altura >= 1.8) 
            {
            console.log("Soy alto");
            } 
        else { 
            console.log("Soy bajo");
            }
    }

    //Getters setters
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }

    setApellido(apellido) {
        this.apellido = apellido;
    }
    getApellido() {
        return this.apellido;
    }

    setAltura(altura) {
        this.altura = altura;
    }
    getAltura() {
        return this.altura;
    }

}

//Heredamos los atributos y metodos de la clase Persona
class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
      super(nombre, apellido, altura)
    }
    //Creamos un metodo saludar para la clase Desarollador  
    saludar() {
      console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
    }
  }


var sacha = new Persona('Sacha', 'Lifszyc', 1.9);
var sachaD = new Desarrollador('Sacha', 'Lifszyc', 1.9);