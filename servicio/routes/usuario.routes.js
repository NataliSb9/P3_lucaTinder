const express = require('express');
//Importo la función de express que hace posible crear una aplicación express
const app = express();

// route() miniaplicación”, capaz solo de realizar funciones de middleware y enrutamiento. Cada aplicación Express tiene un enrutador de aplicaciones incorporado.
//  Router() method that creates a new router object.
const usuarioRoute = express.Router();

//importo el schema de la BBDD

let usuario = require('../model/schemaUsuario.js');

//En este punto se hacen las peticiones

//mostrar todos los usuarios:

usuarioRoute.route('/').get((req,res)=>{
    usuario.find((error,data)=>{
        if(error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

module.exports = usuarioRoute;