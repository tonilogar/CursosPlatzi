

var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";



var coleccion = [];

coleccion.push(new Pakiman("Cauchin", 90, 50));
coleccion.push(new Pakiman("Pokacho", 100, 90));
coleccion.push(new Pakiman("Tocinauro", 120, 30));

//Dos formas de recorrer la coleccion for(var p in coleccion) for(var p of coleccion)
//Itera en el indice
for(var p in coleccion)
{
  coleccion[p].mostrar();
}

//itera en el objeto
/*for(var p of coleccion)
{
  p.mostrar();
}
*/
