/* import express from 'express'; */ /* Es lo mismo que const express = requiere('exoress'); pero 
de las especificaciones de ecmascript6 */

const express = require('express');//Importamos el modulo express
const app = express();
const server = require('http').Server(app);

const bodyParser = require('body-parser');
const socket = require('./socket');
const db = require('./db');
const router = require('./network/routes');

db('mongodb+srv://tonilogar:velociraptor27082006@cluster0.f4l55.mongodb.net/telegrom?retryWrites=true&w=majority');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

socket.connect(server);

router(app);

app.use('/app', express.static('public'));

server.listen(3000, function () {
    console.log('La aplicación está excuchando en el http://localhost:3000');
});
