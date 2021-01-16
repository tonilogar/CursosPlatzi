/* import express from 'express'; */ /* Es lo mismo que const express = requiere('exoress'); pero 
de las especificaciones de ecmascript6 */

const express = require('express');//Importamos el modulo express
const bodyParser = require('body-parser');

const router = require('./network/routes');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(router);
router(app);


app.use('/app', express.static('public'));

app.listen(3000);
console.log('La aplicación está excuchando en el http://localhost:3000');