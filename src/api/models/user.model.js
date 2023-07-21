const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Ajusto el modelo al que hemos acordado en la reunión de equipo:

const userSchema = new Schema(
    {
        email: {type: String, required: true},
        password: {type: String, required: true},
        username: {type:String, required: true},
        role: {type:String, default: "user", enum: ['admin', 'user']},
        reservas: [{type: Schema.Types.ObjectId, ref: 'reservas'}] 
         // la ref de reservas: es el nombre de la colección en la DB de donde toma los id
    },{
        timestamps: true,
        collection: 'users'
    }
)

const User = mongoose.model('users', userSchema);

module.exports = User;
