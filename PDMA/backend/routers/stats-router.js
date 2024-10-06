const express = require('express');
const CRUDController = require('../controllers/crud-controller');
const Driver = require('../models/driver-schema');
const Package = require('../models/package-schema');

const router = express.Router();

// ----- STATS -----
/**
 * Renders the stats page.
 */
router.get(`/`, async (req, res) => {
    try {
        // Get the stats from the CRUD controller
        let response = await CRUDController.getStats();
        response.driverCount = await Driver.countDocuments();
        response.packageCount = await Package.countDocuments();
        
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ status: error.message });
    }
    
});

// ----- RESET STATS -----
/**
 * Resets the stats.
 */
router.delete(`/`, async (req, res) => {
    try {
        // Reset the stats
        let response = await CRUDController.initializeStats();
        
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ status: error.message });
    }
});

module.exports = router;
