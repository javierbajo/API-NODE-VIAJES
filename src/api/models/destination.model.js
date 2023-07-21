const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema(
    {
        lugar: {type: String, required: true},
        fecha: {type: String, required: true},
        precio: {type: Number, required: true},
        descripcion: {type: String, required: true},
        incluido: [{type: String}],
        hotel:{
            "nombre": { type: String, required: true},
            "categoria": { type: String, required: false, default:""},
            "ubicacion": { type: String, required: false, default:""}
            },
        informacionAdicional: { type: String, required: false, default:""},
        imagenes:[{type: String}]
    },{
        timestamps: true,
        collection: 'destinations'
    }
)

const Destination = mongoose.model('destinations', destinationSchema);

module.exports = Destination;