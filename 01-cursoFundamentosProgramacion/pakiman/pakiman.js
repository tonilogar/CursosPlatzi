


class Pakiman
{
  constructor(nombre, vida, ataque)
  {
    this.imagen = new Image();
    this.nombre = nombre;
    this.vida = vida;
    this.ataque = ataque;
    this.imagen.src = imagenes[this.nombre];
  }
  hablar()
  {
    alert(this.nombre);
  }
  mostrar()
  {
    document.write("<p>");
    document.body.appendChild(this.imagen);

    document.write("<strong>" + this.nombre + "</strong><br />");
    document.write("Vida " + this.ataque + "<br />" );
    document.write("Ataque " + this.vida + "<hr />");
    document.write("</p>");
  }
}
