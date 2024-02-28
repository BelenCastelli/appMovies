const Profesional = require('../model/profesional'); 

function getStart(req, res){
    res.json({error:false, code: 200, message: 'Punto de inicio'})

}

function getProfesional(req, res){
    let respuesta; 

    if(req.params.name && req.params.lastName){
        Profesional.find({'$and': [{name: req.params.name},{lastName: req.params.lastName}]})
        .then(function(data) {
            if(data.length == 0){
                respuesta = {error: true, codigo:200, mensaje: 'No se encontraron profesionales'}
            } else {
                console.log(data);
                respuesta = {error: false, codigo:200, mensaje: 'Profesional encontrado', data: data}
            }
            res.json(respuesta)
        })
        .catch(error => {
            console.log(`Error ${error}`);
            respuesta = { error: true, codigo: 500, mensaje: 'Error en el servidor' };
            res.status(500).json(respuesta); 
        })

    } else{
        respuesta = {error: true, codigo:200, mensaje: 'Se requiere un nombre y apellido'}
        res.status(400).json(respuesta)
    }
}

function getAllProfesional(req, res){
    let respuesta; 

    Profesional.find()
    .then(function(data) {
        if(data.length == 0){
            respuesta = {error: true, codigo:200, mensaje: 'No se encontraron profesionales'}
        } else {
            console.log(data);
            respuesta = {error: false, codigo:200, data: data}
        }
        res.json(respuesta)
    })
    .catch(error => {
        console.log(`Error ${error}`);
        respuesta = { error: true, codigo: 500, mensaje: 'Error en el servidor' };
        res.status(500).json(respuesta); 
    })
}

function postProfesional(req, res){
    let respuesta; 
    let profesional = {
        name: req.body.name,
        lastName: req.body.lastName,
        age: req.body.age,
        nationality: req.body.nationality, 
        profession: req.body.profession, 
        oscarNumber: req.body.oscarNumber,
        photo: req.body.photo,
        height: req.body.height,
        weight: req.body.weight
     
    }

    Profesional.create(profesional)
    .then(function (profesional){
        console.log(profesional);
        respuesta = {error: false, codigo:200, mensaje: 'Profesional insertado correctamente', data: profesional}
        res.json(respuesta)
    })
    .catch(error => {
        console.log(error);
        respuesta = {error: true, codigo: 500, mensaje:'Error en la validación de los datos insertados: se requieren todos los campos'};
        res.json(respuesta);
    })
}

function putProfesional(req, res){
    let respuesta;
    let profesional = {
        name: req.body.name,
        lastName: req.body.lastName,
        age: req.body.age,
        nationality: req.body.nationality,
        profession: req.body.profession,
        oscarNumber: req.body.oscarNumber,
        photo: req.body.photo,
        height: req.body.height,
        weight: req.body.weight,
    };

    let query = {
        name: req.body.nameSearch,
        lastName: req.body.lastNameSearch
    };

    let update = {
        name: profesional.name,
        lastName: profesional.lastName,
        age: profesional.age,
        nationality: profesional.nationality,
        profession: profesional.profession,
        oscarNumber: profesional.oscarNumber,
        photo: profesional.photo,
        height: profesional.height,
        weight: profesional.weight
    };
    console.log(query);
    console.log(update);

    Profesional.updateOne(query, update)
        .then((data) => {
            console.log(data);
            respuesta = { error: false, codigo: 200, mensaje: 'Datos modificados correctamente', data: data };
            res.json(respuesta);
        })
        .catch(error => {
            console.log(`Error al modificar ${error}`);
            respuesta = { error: true, codigo: 500, mensaje: 'Error en la validación de los datos modificados' };
            res.json(respuesta);
        });
}
    

function deleteProfesional(req, res){
    let respuesta; 
    
    Profesional.deleteOne({'$and':[{name: req.body.name}, {lastName: req.body.lastName}]})
    .then(function(data){
        console.log(data);
        console.log('Documento eliminado');
        respuesta = {error: false, codigo:200, mensaje:'Documento eliminado', data: data}
        res.json(respuesta)
    })
    .catch(error => {
        console.log(`Error al eliminar ${error}`);
        respuesta = {error: true, codigo: 500, mensaje:'Error al eliminar el profesional'};
        res.json(respuesta);
    })

}

module.exports = {getStart, getProfesional, getAllProfesional, 
                postProfesional, putProfesional, deleteProfesional}



               