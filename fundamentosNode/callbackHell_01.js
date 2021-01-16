

function hola(nombre, miCallback)
{ 
    setTimeout(function()
    {
        console.log(`Hola  ${nombre}`); 
        miCallback(nombre);
    }, 3000)
}
function adios(nombre, otroCallback)
{ 
    setTimeout(function()
    {
        console.log(`Adios  ${nombre}`); 
        otroCallback(nombre);
    }, 1000)
}

function conversacion(nombre, veces, callback)
{
    if(veces > 0){
        hablar(function(){
        conversacion(nombre, --veces, callback);
    });
    } else {
        adios(nombre, callback);
    }   
}
function hablar(callbackhablar) {
    setTimeout(function() {
      console.log("bla, bla, bla, bla");
      callbackhablar();
    }, 1000);
  }

function endProces()
{
    console.log(`Terminando proceso....`);
}

console.log(`Iniciando proceso ...`); 
hola(`Antonio`,function(nombre)
    {
        conversacion(nombre, 3, function()
        {
            console.log(`Terminando proceso....`);
        });
    });