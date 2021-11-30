//Aquí es donde confluye la información de los otros documentos.
//Aquí es donde se indican los Midleware.
//cors hacer un npm de cors
let express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    mongoDb = //PONER LA BBDD;
//mongoDb => es la BBDD.    
mongoose.Promise = global.Promise;

mongoose.connect(mongoDb.db, {useNewUrlParser: true, useUnifiedTopology: true},
    function(error){
        if(error){
            throw error;
        }else{
            console.log('Te has conectado con éxito a la base de datos')
        }
    }
)

