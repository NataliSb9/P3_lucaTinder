

const express = require('express');
//Importo la función de express que hace posible crear una aplicación express
const app = express();

//importo el schema de la BBDD
let usuario = require('../model/schemaUsuario.js')

// route() miniaplicación”, capaz solo de realizar funciones de middleware y enrutamiento. Cada aplicación Express tiene un enrutador de aplicaciones incorporado.
//  Router() method that creates a new router object.
const usuarioRoute = express.Router()