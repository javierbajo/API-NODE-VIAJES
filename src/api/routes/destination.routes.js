const express = require('express');
const upload = require("../../middlewares/upload.file")
const {
    getAllDestinations, 
    getDestinationsId,
    getDestinationsName,
    getDestinationsType,
    //getMoviesYear2010,
    // --------------------
    postDestinations, 
    putDestinations, 
    deleteDestinations, 
    } = require('../controller/destination.controller');

const router = express.Router();

router.get('/', getAllDestinations);

router.get('/id/:id', getDestinationsId);
router.get('/destinationName/:destinationName', getDestinationsName);
router.get('/type/:type', getDestinationsType);
//router.get('/year2010/', getMoviesYear2010);
// -----------------------------------------
router.post('/', upload.single('image'), postDestinations);
router.put('/:id', upload.single('image'), putDestinations);
router.delete('/:id', deleteDestinations);



module.exports = router;
