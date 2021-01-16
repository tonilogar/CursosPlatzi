
const fs=require('fs');

function leer(ruta, cb){
    fs.readFile(ruta, (err,data) => {
        console.log(data.toString());
    })
}

function escribir(ruta, contenido, cb){
    fs.writeFile(ruta, contenido, (err,data) => {
        if (err) {
            console.log('No he podido escribirlo', err);
        }
        else {
            console.log('Se ha escrito correctamente');
        }
    })
}

function borrar(ruta, cb){
    fs.unlink (ruta, (err,data) => {
        if (err) {
            console.log('No he podido borrar el fichero ' + ruta, err);
        }
        else {
            console.log('He borrado el fichero correctamente');
        }
    })
}

borrar(__dirname + '/archivoEscritura01.txt');
/* escribir(__dirname + '/archivoEscritura.txt', 'que pasa nen nuevo') */
/* leer(`${__dirname}/archivo.txt` ) */
/* console.log("process"); */

