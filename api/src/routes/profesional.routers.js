const {Router} = require('express');
const router = Router();
const profesionalCtrl = require('../controller/profesional.controller'); 


router.get('/', profesionalCtrl.getStart);
router.get('/profesionales/:name/:lastName', profesionalCtrl.getProfesional);
router.get('/profesionales', profesionalCtrl.getAllProfesional)
router.post('/profesionales', profesionalCtrl.postProfesional);
router.put('/profesionales', profesionalCtrl.putProfesional);
router.delete('/profesionales', profesionalCtrl.deleteProfesional);



module.exports = router