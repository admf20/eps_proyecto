const ConsultaModel = require('../models/Consulta');

const GetConsultas = async (req, res) => {
    const Consultas = await ConsultaModel.find();
    res.json({
        status: 204,
        message: 'Consulta Encontada',
        Consultas  
    })
}

const GetConsultaById = async (req, res) => {
    const Consulta = await ConsultaModel.findById(req.params.consultaId);
    res.json({
        status: 204,
        message: 'Consulta Encontada',
        Consulta  
    })
}

const CreatedConsulta = async (req, res) => {
    const {medicamentos, diagnostico} = req.body;

    const NewConsulta = new ConsultaModel({
        medicamentos,
        diagnostico
    });

    const ConsultaSaved = await NewConsulta.save();
    res.json({
        status: 200,
        message: 'Consulta Creada',
        ConsultaSaved
    });
}

const UpdatedConsulta = async (req, res) => {
    const updatedConsulta =  await ConsultaModel.findByIdAndUpdate(req.params.consultaId, req.body);
    res.json({
        status: 200,
        message: 'Consulta Actualizada',
        updatedConsulta
    });
}

const DeletedConsulta = async (req, res) => {
    const deletedConsulta = await ConsultaModel.findByIdAndDelete(req.params.consultaId);
    res.json({
        status: 200,
        message: 'Consulta Eliminada'
    });
}

module.exports = {
    GetConsultas,
    GetConsultaById,
    CreatedConsulta,
    UpdatedConsulta,
    DeletedConsulta
}