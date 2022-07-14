const {Schema, model} = require('mongoose');

const ConsultaSchema = new Schema({
    medicamentos: {
        type: String,
        unique: true
    },
    diagnostico: {
        type: String,
        unique: true
    },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Consultas', ConsultaSchema);