const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
    {
        title: {
            type:String, 
            validate: [
                function(title) {
                    title.lenght < 100
                }, 
                'El título no puede superar los 100 caracteres'
            ],
            required: true
        },
        photo: {
            type: String, 
            required: true
        },
        releaseYear: {
            type: Number, 
            max: 2024,
            min: 1895,
            required: true
        },
        genre: [{type: String, required:true}],
        nationality: {
            type: String, 
            required: true
        },
        director:[ {
            name: {type: String, required: true}, lastName: {type:String, required: true}
        }],
        writer: [{
            name: {type: String, required: true}, lastName: {type:String, required: true}
        }],
        actors: [
            {name: {type: String, required: true}, lastName: {type:String, required: true}}
        ], 
        producer:  {
            name: {type: String, required: true}, lastName: {type:String, required: true}
        },
        language: [{type: String, required:true}],
        platform: [String]
    }
)

module.exports = mongoose.model('Movies', movieSchema, 'Movies')

