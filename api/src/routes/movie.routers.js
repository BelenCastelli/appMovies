const {Router} = require('express');
const router = Router();
const movieCtrl = require('../controller/movie.controller')

router.get('/peliculas', movieCtrl.getMovies);
router.get('/peliculas/:title', movieCtrl.getMovie);
router.get('/pelicula/actor/:title', movieCtrl.getActors);
router.get('/pelicula/director/:title', movieCtrl.getDirector);
router.get('/pelicula/guionista/:title', movieCtrl.getWriter);
router.get('/pelicula/productora/:title', movieCtrl.getProducer);
router.post('/peliculas', movieCtrl.postMovie);
router.post('/peliculas/actor', movieCtrl.postActor);
router.post('/peliculas/director', movieCtrl.postDirector);
router.post('/peliculas/guionista', movieCtrl.postWriter);
router.put('/peliculas', movieCtrl.putMovie);
router.delete('/peliculas', movieCtrl.deleteMovie);
router.delete('/pelicula/actor', movieCtrl.deleteActor);
router.delete('/pelicula/director', movieCtrl.deleteDirector);
router.delete('/pelicula/guionista', movieCtrl.deleteWriter);



module.exports = router