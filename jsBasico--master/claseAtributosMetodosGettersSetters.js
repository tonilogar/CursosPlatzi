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
//Constructor
var sacha = new Persona('Sacha', 'Lifszyc', 1.9)