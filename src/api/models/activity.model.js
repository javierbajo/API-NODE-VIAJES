const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const activitySchema = new Schema(
    {
        actividad: {type: String, required: true},
        lugar: {type: String, required: true},
        fecha: {type: String, required: true},
        hora: {type: String, required: true},
        precio: {type: Number, required: true},
        imagen: {type: String, required: true},
        descripcion: {type: String, required: true}

    },{
        timestamps: true,
        collection: 'activities'
    }
)

const Activity = mongoose.model('activities', activitySchema);

module.exports = Activity;