function seRompe() {
    return 3 + z;
}


try {
    seRompe();
} 
catch(err) {
    console.log("Ha petado");
    console.group('el texto del error es este ');
    console.error(err);
    console.groupEnd('el texto del error es este ');
    console.log("Ha petado");
    console.group('el texto del error es este ');
    console.error(err.message);
    console.groupEnd('el texto del error es este ');

}