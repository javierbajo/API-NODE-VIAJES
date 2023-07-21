
const Destination = require('../models/destination.model.js')


// Devuelve todos los destinos
const getAllDestinations = async (req, res) => {
    try{
        const allDestinations = await Destination.find()
        return res.status(200).json(allDestinations);
    }catch(error){
        return res.status(500).json(error);
    }
    
}

// Devuelve un destino según su _id
const getDestinationsId = async (req, res) => {
    try{
        const {id} = req.params; 
        const getDestinationId = await Destination.find({_id: id});
        return res.status(200).json(getDestinationId);
    }catch(error){
        return res.status(500).json(error);
    }
    
}

// Devuelve el tipo de la destino según su nombre
const getDestinationsName = async (req, res) => {
    try{
        const {destinationName} = req.params; 
        const getDestinationName = await Destination.find({destinationName: destinationName},{_id:0, type:1});
        return res.status(200).json(getDestinationName);
    }catch(error){
        return res.status(500).json(error);
    }
    
}

// Devuelve destinos según su tipo
const getDestinationsType = async (req, res) => {
    try{
        const {type} = req.params; 
        const getDestinationType = await Destination.find({type: type});
        return res.status(200).json(getDestinationType);
    }catch(error){
        return res.status(500).json(error);
    }
    
}



// Crea un nuevo destino en la DB
const postDestinations = async (req, res) => {
    try{
        const newDestination = new Destination(req.body);

        if(req.file.path){
            newDestination.image = req.file.path;
        }
        const createdDestination = await newDestination.save();
        return res.status(201).json(createdDestination);
    }catch (error) {
        return res.status(500).json(error);
    }
}
// Modifica un destino enviando id por la url y datos nuevos por el body
const putDestinations = async (req, res) => {
    console.log(req.body);
    try{
        const {id} = req.params;
        const putDestination = new Destination(req.body);
        putDestination._id = id;
        if(req.file.path){
            putDestination.image = req.file.path;
        }
        const updatedDestination = await Destination.findByIdAndUpdate(id, putDestination, {new: true});
        if(!updatedDestination){
            return res.status(404).json({message: "Destino no encontrado"})
        }
        return res.status(200).json(updatedDestination);
    }catch(error){
        return res.status(500).json(error)
    }
}
// Elimina destinos de la base de datos mandando su id por la url
const deleteDestinations = async (req, res) => {
    try{
        const {id} = req.params;
        const deletedDestination = await Destination.findByIdAndDelete(id);
        if(!deletedDestination){
            return res.status(404).json({message:"Destino no encontrado"});
        }
        return res.status(200).json(deletedDestination);
    }catch(error){
        return res.status(500).json(error);
    }
    
}

module.exports = {
    getAllDestinations,
    getDestinationsId,
    getDestinationsName,
    getDestinationsType,
    // -----------------
    postDestinations, 
    putDestinations, 
    deleteDestinations, 
    };