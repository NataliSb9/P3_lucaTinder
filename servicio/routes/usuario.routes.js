const express = require('express');
//Importo la función de express que hace posible crear una aplicación express
const app = express();

// route() miniaplicación”, capaz solo de realizar funciones de middleware y enrutamiento. Cada aplicación Express tiene un enrutador de aplicaciones incorporado.
//  Router() method that creates a new router object.
const usuarioRoute = express.Router();
git 
//importo el schema de la BBDD

let Usuario = require('../model/schemaUsuario.js');

//PETICIONES

//mostrar todos los usuarios:
usuarioRoute.route('/')
    .get((req,res,next)=>{
        Usuario.find((error,data)=>{
            if(error) {
                return next(error);
            } else {
                res.json(data);
            }
        });
    }
);

//endpoint: traer la info del usuario
usuarioRoute.route('/usuario')
    .get((req,res)=>{
        Usuario.find({email:req.query.email}, checkRespuesta);
        function checkRespuesta(err,usuario){
            if(err){
                res.status(400).send('Error'+ err)
            }else{
                res.status(200).send(usuario)
            }
        }
    })


//Endpoint: Registro
//con este endPoint registro al usuario
usuarioRoute.route('/join')
    .post(function (req, res, next) {
        let usuarioNuevo = new Usuario({
            id:req.body.id,
            name: req.body.name,
            gender: req.body.gender,
            email: req.body.email,
            age: req.body.age,
            descripcion: req.body.descripcion,
            gustos: req.body.gustos,
            arrLikes:req.body.arrLikes,
            arrDislike:req.body.arrDislike,
            prefGen: req.body.prefGen,
            foto: req.body.foto
        })
        usuarioNuevo.save(usuarioNuevo,checkRespuesta);
        function checkRespuesta(err,usuarioNuevo){
            if(err){
            res.send(`Error:${err}`)
            }else {
                res.send(usuarioNuevo)
                console.log(`usuario creado`)
            }
            
        }
    }
);



//endpoint home:    
//mostrar 10 usuarios:

usuarioRoute.route('/home')
    .get( (req,res) => {

    Usuario.find({genero:req.query.prefGen},checkRespuesta).limit(10);

        function checkRespuesta(err,candidatos){
            if(err){
            res.status(400).send(`Error:${err}`)
            }else {
                res.status(200).send(candidatos)
                console.log(`Usuarios enviados`)
            }
            
        }
    }
);

//endpoint: editar perfil de usuario
module.exports = usuarioRoute;