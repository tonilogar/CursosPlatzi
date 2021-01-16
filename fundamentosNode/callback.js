function soyAsincrona(miCallback)
{
    console.log(`Soy una función asíncrona`); 
    setTimeout(function()
    {
        console.log(`Estoy siendo asíncrona`);
        miCallback();
    }, 2000)
}

console.log(`Iniciando proceso...`);

soyAsincrona(function () 
{
    console.log(`Terminando proceso....`);
});

