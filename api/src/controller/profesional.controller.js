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
                respuesta = {error: false, codigo:200, message: 'No se encontraron profesionales'}
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
            respuesta = {error: false, codigo:200, message: 'No se encontraron profesionales'}
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
        weight: req.body.weight,
        height: req.body.height,
        isRetired: req.body.isRetired,
        nationality: req.body.nationality, 
        oscarNumber: req.body.oscarNumber,
        profession: req.body.profession, 
        photo: req.body.photo
    }

    Profesional.create(profesional)
    .then(function (profesional){
        console.log(profesional);
        respuesta = {error: false, codigo:200, mensaje: 'Profesional insertado correctamente', data: profesional}
        res.json(respuesta)
    })
    .catch(error => {
        console.log(error);
        respuesta = {error: true, codigo: 500, mensaje:'Error en la validación de los datos insertados'};
        res.json(respuesta);
    })
}

function putProfesional(req, res){
    let respuesta; 

    let profesional = {
        name: req.body.name,
        newName: req.body.newname,
        lastName: req.body.lastName,
        age: req.body.age,
        weight: req.body.weight,
        height: req.body.height,
        isRetired: req.body.isRetired,
        nationality: req.body.nationality, 
        oscarNumber: req.body.oscarNumber,
        profession: req.body.profession, 
        photo: req.body.photo
    }    
    
    Profesional.updateOne({name: profesional.name},{name: profesional.newName, 
                                                lastName: profesional.lastName,
                                                age: profesional.age,
                                                weight: profesional.weight,
                                                height: profesional.height,
                                                isRetired: profesional.isRetired, 
                                                nationality: profesional.nationality,
                                                oscarNumber: profesional.oscarNumber, 
                                                profession: profesional.profession, 
                                                photo: profesional.photo})
    .then((data) =>{
        console.log(data);
        respuesta = {error: false, codigo:200, data: data}
        res.json(respuesta)
    })
    .catch(error => {
        console.log(`Error al modificar ${error}`);
        respuesta = {error: true, codigo: 500, mensaje:'Error en la validación de los datos modificados'};
        res.json(respuesta);
        })
}
    

function deleteProfesional(req, res){
    let respuesta; 
    
    Profesional.deleteOne({'$and':[{name: req.body.name}, {lastName: req.body.lastName}]})
    .then(function(data){
        console.log(data);
        console.log('Documento eliminado');
        respuesta = {error: false, codigo:200, data: data}
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



               