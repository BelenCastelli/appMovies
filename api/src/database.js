let mongoose = require('mongoose');

mongoose.connect('mongodb+srv://belenCastelli:bs2ts7J8fjCRgUvh@codenotch.iowjrko.mongodb.net/appMovie',
                {useNewUrlParser: false, useUnifiedTopology:false})
.then((db) => console.log('database connected on ' +db.connection.host))
.catch(error => console.log(error))