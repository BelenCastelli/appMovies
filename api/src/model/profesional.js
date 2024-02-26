const mongoose = require('mongoose');

const profesionalSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        }, 
        lastName: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            max:120,
            min: 1,
            required: true
        }, 
        weight: {
            type: Number, 
            max:500,
            min: 1,
            required: true
        },
        height:{
            type: Number, 
            max:300,
            min: 1,
            required: true
        },
        nationality: {
            type: String,
            required: true
        },
        oscarNumber: {
            type: Number, 
            required: true
        }, 
        profession: {
            type: String,
            required: true
        }, 
        photo: {
            type: String,
            required: true
        },
    }
)

module.exports = mongoose.model('Profesional', profesionalSchema, 'Profesional')