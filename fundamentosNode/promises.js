function hola(nombre){ 
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log(`Hola  ${nombre}`); 
            resolve(nombre);
        }, 1000);
    });   
}
function hablar(nombre) {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            console.log(`bla, bla, bla, bla, bla...`);
            resolve(nombre);
            /* reject("error"); */
        }, 1000);
    });
}
function adios(nombre){   
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log(`Adios  ${nombre}`); 
            resolve(nombre);
        }, 1000);
    });
}

function endProces()
{
    console.log(`Terminando proceso....`);
}
function endProces(){ 
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log(`Terminando proceso...`);
            resolve();
        }, 1000);
    });   
}

hola(`Antonio`)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then(endProces)
 
    .catch(error => {
        console.error(`Ha habido un error:`);
        console.error(error);
    })