const express = require('express');
const driverController = require('../controllers/driver-controller');

const router = express.Router();

// Backend API

// ----- ADD DRIVER -----
router.post('/', async (req, res) => {
    try {
        // Extract the driver data from the request body
        let driver = await driverController.createOne(req, res);

        // Send the response back to the client
        res.status(201).json({
            id: driver._id,
            driverId: driver.driverId,
        });
    } catch (error) {
        res.status(500).json({ status: error.message });
    }
});

// ----- LIST DRIVER -----
router.get('/', async (req, res) => {
    try {
        // Call the getAll function from the driver controller
        let drivers = await driverController.getAll(req, res);

        //  Send the response back to the client
        res.status(200).json(drivers);
    } catch (error) {
        res.status(500).json({ status: error.message });
    }
});

// ----- DELETE DRIVER -----
router.delete('/', async (req, res) => {
    try {
        // Call the deleteOne function from the driver controller
        req.body.isBackend = true;

        let response = await driverController.deleteOne(req, res);

        // Send the response back to the client
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ status: error.message });
    }
});

// ----- UPDATE DRIVER -----
router.put('/', async (req, res) => {
    try {
        // Call the updateOne function from the driver controller
        let response = await driverController.updateOne(req, res);

        // Send the response back to the client
        if (response.acknowledged) {
            response = {
                status: "updated successfully",
            }
        } else {
            response = {
                status: "update failed",
            }
        }

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ status: error.message });
    }    
});



module.exports = router;