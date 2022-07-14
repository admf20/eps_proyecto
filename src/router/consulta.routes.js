const {Router} = require('express');
const router = Router();

const ConsultaController = require('../controllers/Consulta.controller');

router.route('/')
            .get(ConsultaController.GetConsultas)
            .post(ConsultaController.CreatedConsulta)

router.route('/:consultaId')
            .get(ConsultaController.GetConsultaById)
            .put(ConsultaController.UpdatedConsulta)
            .delete(ConsultaController.DeletedConsulta)

module.exports = router;