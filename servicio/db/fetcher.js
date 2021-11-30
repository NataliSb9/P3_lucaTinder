// primero hay que instalar npm install node-fetch@2

/*
"express": "^4.17.1",
    "express-handlebars": "^6.0.1",
    "fetch":"^1.1.0",
    "node":"^17.1.0",
    "node-fetch": "^2.6.6",

*/

const fetch = require('node-fetch');
const createUser = require('./db');


fetch('https://randomuser.me/api/?results=2')
    .then(results => {
        return results.text()
    }).then(data => {
            data = JSON.parse(data);
            

            for (let i = 0; i < 2; i++) {
                let name = data.results[i].name.first + data.results[i].name.last;
                let gender = data.results[i].gender;
                let email = data.results[i].email;
                let  age = data.results[i].dob.age;
                let foto = data.results[i].picture.medium;
                let descripcion = data.results[i].location.coordinates.latitude;
                let arrLikes=[];
                let arrDislike=[];
                let prefGen="Gatitas";
                let gustos=[];
                createUser(name, gender, email, age, descripcion, gustos, arrLikes, arrDislike, prefGen,foto)
            }

        }

    )