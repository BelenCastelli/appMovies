const express = require('express');
const cors = require('cors');
const profesionalRouters = require('./routes/profesional.routers')
const errorHandling = require('./error/errorHandling');

const app = express();

app.set('port', process.env.PORT || 3000)

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(profesionalRouters);
app.use((req, res, next) =>{
    res.status(404).json({error:true, code: 404, message: 'Endpoint doesnt found'})
})

app.use(errorHandling);

module.exports = app; 
