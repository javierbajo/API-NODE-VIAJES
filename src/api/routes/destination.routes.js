const express = require('express');
const upload = require("../../middlewares/upload.file")
const {
    getAllDestinations, 
    getDestinationsId,
    getDestinationsDescription,
    getDestinationsFromLocation,
    // --------------------
    postDestinations, 
    putDestinations, 
    deleteDestinations, 
    } = require('../controller/destination.controller');

const router = express.Router();

router.get('/', getAllDestinations);
router.get('/id/:id', getDestinationsId);
router.get('/destinationName/:destinationName', getDestinationsDescription);
router.get('/type/:type', getDestinationsFromLocation);
// -----------------------------------------
router.post('/', upload.single('image'), postDestinations);
router.put('/:id', upload.single('image'), putDestinations);
router.delete('/:id', deleteDestinations);


module.exports = router;
