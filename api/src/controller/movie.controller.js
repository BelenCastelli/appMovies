const Movie = require('../model/movies'); 


function getMovies(req, res){
    let respuesta; 

    Movie.find()
    .then(function(data) {
        if(data.length == 0){
            respuesta = {error: false, codigo:200, message: 'No se encontraron películas'}
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
}; 

function getMovie(req, res){
    let respuesta; 

    if(req.params.title){
        Movie.find({title: req.params.title})
        .then(function(data) {
            if(data.length == 0){
                respuesta = {error: false, codigo:200, message: 'No se encontró la película'}
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
        respuesta = {error: true, codigo:200, mensaje: 'Se requiere un título de la película'}
        res.status(400).json(respuesta)
    }

};

function getActors(req, res){
    let respuesta; 

    if(req.params.title){
        Movie.find({title: req.params.title})
        .then(function(data) {
            if(data.length == 0){
                respuesta = {error: false, codigo:200, message: 'No se encontró la película'}
            } else {
                console.log(data.actors);
                respuesta = {error: false, codigo:200, data: data.actors}
            }
            res.json(respuesta)
        })
        .catch(error => {
            console.log(`Error ${error}`);
            respuesta = { error: true, codigo: 500, mensaje: 'Error en el servidor' };
            res.status(500).json(respuesta); 
        })

    } else{
        respuesta = {error: true, codigo:200, mensaje: 'Se requiere un título de la película'}
        res.status(400).json(respuesta)
    }

}; 

function getDirector(req, res){
    let respuesta; 

    if(req.params.title){
        Movie.findOne({title: req.params.title})
        .then(function(data) {
            if(data.length == 0){
                respuesta = {error: false, codigo:200, message: 'No se encontró la película'}
            } else {
                console.log(data.director);
                respuesta = {error: false, codigo:200, data: data.director}
            }
            res.json(respuesta)
        })
        .catch(error => {
            console.log(`Error ${error}`);
            respuesta = { error: true, codigo: 500, mensaje: 'Error en el servidor' };
            res.status(500).json(respuesta); 
        })

    } else{
        respuesta = {error: true, codigo:200, mensaje: 'Se requiere un título de la película'}
        res.status(400).json(respuesta)
    }
}; 

function getWriter(req, res){
    let respuesta; 

    if(req.params.title){
        Movie.findOne({title: req.params.title})
        .then(function(data) {
            if(data.length == 0){
                respuesta = {error: false, codigo:200, message: 'No se encontró la película'}
            } else {
                console.log(data.writer);
                respuesta = {error: false, codigo:200, data: data.writer}
            }
            res.json(respuesta)
        })
        .catch(error => {
            console.log(`Error ${error}`);
            respuesta = { error: true, codigo: 500, mensaje: 'Error en el servidor' };
            res.status(500).json(respuesta); 
        })

    } else{
        respuesta = {error: true, codigo:200, mensaje: 'Se requiere un título de la película'}
        res.status(400).json(respuesta)
    }
    
}; 

function getProducer(req, res){
    let respuesta; 

    if(req.params.title){
        Movie.findOne({title: req.params.title})
        .then(function(data) {
            if(data.length == 0){
                respuesta = {error: false, codigo:200, message: 'No se encontró la película'}
            } else {
                console.log(data.producer);
                respuesta = {error: false, codigo:200, data: data.producer}
            }
            res.json(respuesta)
        })
        .catch(error => {
            console.log(`Error ${error}`);
            respuesta = { error: true, codigo: 500, mensaje: 'Error en el servidor' };
            res.status(500).json(respuesta); 
        })

    } else{
        respuesta = {error: true, codigo:200, mensaje: 'Se requiere un título de la película'}
        res.status(400).json(respuesta)
    }

}; 

function postMovie(req, res){
    let respuesta; 
    let movie = {
        title: req.body.title,
        photo: req.body.photo,
        releaseYear: req.body.releaseYear, 
        genre: req.body.genre, 
        nationality: req.body.nationality, 
        director: req.body.director,
        writer: req.body.writer, 
        actors: req.body.actors,
        producer: req.body.producer,
        language: req.body.language, 
        platform: req.body.platform
    }

    Movie.create(movie)
    .then(function (movie){
        console.log(movie);
        respuesta = {error: false, codigo:200, mensaje: 'Película insertado correctamente', data: movie}
        res.json(respuesta)
    })
    .catch(error => {
        console.log(error);
        respuesta = {error: true, codigo: 500, mensaje:'Error en la validación de los datos insertados'};
        res.json(respuesta);
    })
};

function postActor(req, res){
    let respuesta; 
    let actor = {
        title: req.body.title, 
        name: req.body.name,
        lastName: req.body.lastName
    }

    if(actor.title){
        Movie.findOneAndUpdate({title: actor.title},
                                {$addToSet: {'actors': {name: actor.name, lastName: actor.lastName}}},
                                {new: true})
        .then(function(updateData) {
            if(updateData == null){
                respuesta = {error: false, codigo:200, message: 'No se encontró la película'}
            } else {
                console.log(updateData);
                respuesta = {error: false, codigo:200, data: updateData}
            }
            res.json(respuesta)
        })
        .catch(error => {
            console.log(`Error ${error}`);
            respuesta = { error: true, codigo: 500, mensaje: 'Error en el servidor' };
            res.status(500).json(respuesta); 
        })

    } else{
        respuesta = {error: true, codigo:200, mensaje: 'Se requiere un título de la película, nombre y apellido de actor'}
        res.status(400).json(respuesta)
    }

};

function postDirector(req, res){

    let respuesta; 
    let director = {
        title: req.body.title, 
        name: req.body.name,
        lastName: req.body.lastName
    }

    if(director.title){
        Movie.findOneAndUpdate({title: director.title},
                                {$addToSet: {'director': {name: director.name, lastName: director.lastName}}},
                                {new: true})
        .then(function(updateData) {
            if(updateData == null){
                respuesta = {error: false, codigo:200, message: 'No se encontró la película'}
            } else {
                console.log(updateData.director);
                respuesta = {error: false, codigo:200, data: updateData}
            }
            res.json(respuesta)
        })
        .catch(error => {
            console.log(`Error ${error}`);
            respuesta = { error: true, codigo: 500, mensaje: 'Error en el servidor' };
            res.status(500).json(respuesta); 
        })

    } else{
        respuesta = {error: true, codigo:200, mensaje: 'Se requiere un título de la película, nombre y apellido de director'}
        res.status(400).json(respuesta)
    }


};

function postWriter(req, res){
    let respuesta; 
    let writer = {
        title: req.body.title, 
        name: req.body.name,
        lastName: req.body.lastName
    }

    if(writer.title){
        Movie.findOneAndUpdate({title: writer.title},
                                {$addToSet: {'writer': {name: writer.name, lastName: writer.lastName}}},
                                {new: true})
        .then(function(updateData) {
            if(updateData == null){
                respuesta = {error: false, codigo:200, message: 'No se encontró la película'}
            } else {
                console.log(updateData.writer);
                respuesta = {error: false, codigo:200, data: updateData}
            }
            res.json(respuesta)
        })
        .catch(error => {
            console.log(`Error ${error}`);
            respuesta = { error: true, codigo: 500, mensaje: 'Error en el servidor' };
            res.status(500).json(respuesta); 
        })

    } else{
        respuesta = {error: true, codigo:200, mensaje: 'Se requiere un título de la película, nombre y apellido de guionista'}
        res.status(400).json(respuesta)
    }


};

function putMovie(req, res){
    let respuesta; 

    Movie.updateOne({title: req.body.title}, {title: req.body.newTitle,
                                            photo: req.body.photo,
                                            releaseYear: req.body.releaseYear, 
                                            genre: req.body.genre, 
                                            nationality: req.body.nationality, 
                                            director: req.body.director,
                                            writer: req.body.writer, 
                                            actors: req.body.actors,
                                            producer: req.body.producer,
                                            language: req.body.language, 
                                            platform: req.body.platform
                                            })
    .then((data) =>{
        console.log(data);
        respuesta = {error: false, codigo:200, mensaje: `Datos modificados correctamente`,data: data}
        res.json(respuesta)
    })
    .catch(error => {
        console.log(`Error al modificar ${error}`);
        respuesta = {error: true, codigo: 500, mensaje:'Error en la validación de los datos modificados'};
        res.json(respuesta);
        })
};

function deleteMovie(req, res){
    let respuesta; 
    
    Movie.deleteOne({title: req.body.title})
    .then(function(data){
        console.log(data);
        respuesta = {error: false, codigo:200, mensaje: 'Documento eliminado correctamente',data: data}
        res.json(respuesta)
    })
    .catch(error => {
        console.log(`Error al eliminar ${error}`);
        respuesta = {error: true, codigo: 500, mensaje:'Error al eliminar la película'};
        res.json(respuesta);
    })
}; 

function deleteActor(req, res){
    let respuesta; 
    let actor = {
        title: req.body.title, 
        name: req.body.name,
        lastName: req.body.lastName
    }

    if(actor.title){
        Movie.findOneAndUpdate({title: actor.title},
                                {$pull: {'actors': {name: actor.name, lastName: actor.lastName}}},
                                {new: true})
        .then(function(updateData) {
            if(updateData == null){
                respuesta = {error: false, codigo:200, message: 'No se encontró la película'}
            } else {
                console.log(updateData);
                respuesta = {error: false, codigo:200, data: updateData}
            }
            res.json(respuesta)
        })
        .catch(error => {
            console.log(`Error ${error}`);
            respuesta = { error: true, codigo: 500, mensaje: 'Error en el servidor' };
            res.status(500).json(respuesta); 
        })

    } else{
        respuesta = {error: true, codigo:200, mensaje: 'Se requiere un título de la película, nombre y apellido de actor'}
        res.status(400).json(respuesta)
    }
}; 

function deleteDirector (req, res){
    let respuesta; 
    let director = {
        title: req.body.title, 
        name: req.body.name,
        lastName: req.body.lastName
    }

    if(director.title){
        Movie.findOneAndUpdate({title: director.title},
                                {$pull: {'director': {name: director.name, lastName: director.lastName}}},
                                {new: true})
        .then(function(updateData) {
            if(updateData == null){
                respuesta = {error: false, codigo:200, message: 'No se encontró la película'}
            } else {
                console.log(updateData.director);
                respuesta = {error: false, codigo:200, data: updateData}
            }
            res.json(respuesta)
        })
        .catch(error => {
            console.log(`Error ${error}`);
            respuesta = { error: true, codigo: 500, mensaje: 'Error en el servidor' };
            res.status(500).json(respuesta); 
        })

    } else{
        respuesta = {error: true, codigo:200, mensaje: 'Se requiere un título de la película, nombre y apellido de director'}
        res.status(400).json(respuesta)
    }

}; 

function deleteWriter(req, res){
    let respuesta; 
    let writer = {
        title: req.body.title, 
        name: req.body.name,
        lastName: req.body.lastName
    }

    if(writer.title){
        Movie.findOneAndUpdate({title: writer.title},
                                {$pull: {'writer': {name: writer.name, lastName: writer.lastName}}},
                                {new: true})
        .then(function(updateData) {
            if(updateData == null){
                respuesta = {error: false, codigo:200, message: 'No se encontró la película'}
            } else {
                console.log(updateData.writer);
                respuesta = {error: false, codigo:200, data: updateData}
            }
            res.json(respuesta)
        })
        .catch(error => {
            console.log(`Error ${error}`);
            respuesta = { error: true, codigo: 500, mensaje: 'Error en el servidor' };
            res.status(500).json(respuesta); 
        })

    } else{
        respuesta = {error: true, codigo:200, mensaje: 'Se requiere un título de la película, nombre y apellido de guionista'}
        res.status(400).json(respuesta)
    }

}; 

module.exports = {getMovies, getMovie, getActors, getDirector, getWriter, getProducer,
                postMovie, postActor, postDirector, postWriter, putMovie, deleteMovie,
                deleteActor, deleteDirector, deleteWriter};
