


//Crear un objeto manualmente
let myCar = 
{
    type: "Toyota",  // key - value 
    model: "Corolla",
    year: 2020,
    carProperties: function() 
    {   // Metodo de un objeto (una función dentro de un objeto)
        return `Car ${this.type} ${this.model} ${this.year}`;
    }
};
//Crear una instancia del objeto manualmente
let newCar = new car("Tesla", "Model 3", 2020);

//Crear un listado de objetos con una funcion automatica a partir de tres arraies
const arrayType = ["Ford","Audi", "Citroen", "Seat", "Porche", "Kia", "Aston martin", "Bmw"];
const arrayModel = ["ModelF","ModelA", "ModelC", "ModelS", "ModelP", "ModelK", "ModelAm", "ModelB"];
const arrayYear = ["2000","2001", "2002", "2003", "2004", "2005", "2006", "2007"];
var cars = [];

//Funcioón para crear el objeto con tres caracteristicas
function car(type, model, year) 
{  
    this.type = type;  
    this.model = model;
    this.year = year;
}
//Es la forma de añadir un metodo dentro del objeto car
car.prototype.carProperties = function () {
    console.log(`Type ${this.type} model ${this.model} year ${this.year}`)
  }

//Función para crear un array de objetos car
for (var i=0; i < arrayType.length; i++)
{
    cars.push(new car(arrayType[i], arrayModel[i], arrayYear[i]));
}
cars[1].carProperties();


A parte de construir el objeto automaticamente con sus características:
marca modelo y año.
También quiero que se construya un método.
Este es el codigo para construir los objetos solamente con las tres caracteristicas:
Marca, modelo y año.
`const arrayType = ["Ford","Audi", "Citroen", "Seat", "Porche", "Kia", "Aston martin", "Bmw"];
const arrayModel = ["ModelF","ModelA", "ModelC", "ModelS", "ModelP", "ModelK", "ModelAm", "ModelB"];
const arrayYear = ["2000","2001", "2002", "2003", "2004", "2005", "2006", "2007"];
let cars = [];

function car(type, model, year) 
{
    this.type = type;   
    this.model = model;
    this.year = year;
}

for (var i=0; i < arrayType.length; i++)
{
    cars.push(new car(arrayType[i], arrayModel[i], arrayYear[i]));
}
`
Pero no se como añadir un metodo "función" al objeto.
Estoy intentando pero no doy con la tecla:
`function car(type, model, year) 
{  
    this.type = type;  
    this.model = model;
    this.year = year;
    let miFuncion = function() {  
        return 3;
    }
}`
`function car(type, model, year) 
{  
    this.type = type;  
    this.model = model;
    this.year = year;
    function miFuncion() {  
        return 3;
    }
}`

Pero no funciona.