

function hola(nombre, miCallback)
{ 
    setTimeout(function()
    {
        console.log(`Hola  ${nombre}`); 
        miCallback();
    }, 1000)
}
function adios(nombre, otroCallback)
{ 
    setTimeout(function()
    {
        console.log(`Adios  ${nombre}`); 
        otroCallback();
        endProces();
    }, 1000)
}

function conversacion()
{
    console.log(`Bla bla bla ...`); 
}

hola(`Antonio`,function()
{
    conversacion();
    adios(`Antonio`,function(){});
});
function endProces()
{
    console.log(`Terminando proceso....`);
}