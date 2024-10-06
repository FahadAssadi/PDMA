const express = require('express');
const packageController = require('../controllers/package-controller');

const router = express.Router();

// Backend API

// ----- ADD PACKAGE -----
router.post('/', async (req, res) => {
    try {
        // Extract the package data from the request body
        let package = await packageController.createOne(req, res);

        // Send the response back to the client
        res.status(201).json({
            id: package._id,
            packageId: package.packageId,
        });
    } catch (error) {
        res.status(500).json({ status: error.message });
    }
});

// ----- LIST PACKAGE -----
router.get('/', async (req, res) => {
    try {
        // Call the getAll function from the package controller
        let packages = await packageController.getAll(req, res);

        res.status(200).json(packages);
    } catch (error) {
        res.status(500).json({ status: error.message });
    }   
});

// ----- DELETE PACKAGE -----
router.delete('/:id', async (req, res) => {
    try {
        let response = await packageController.deleteOne(req, res);

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ status: error.message });
    }
});

// ----- UPDATE PACKAGE -----
router.put('/:id', async (req, res) => {
    try {
        // Call the updateOne function from the package controller
        let response = await packageController.updateOne(req, res);

        // Send the response back to the client
        if (response.modifiedCount > 0) { 
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