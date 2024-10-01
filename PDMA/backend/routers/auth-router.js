const express = require('express');

const authController = require('../controllers/auth-controller');

const router = express.Router();

// ----- LOGIN -----
router.post('/login', async (req, res) => {
    try {
        // Call the login function from the auth controller
        let response = await authController.login(req, res);

        // Send the response back to the client
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ status: error.message });
    }
});

// ----- REGISTER -----
router.post('/register', async (req, res) => {
    try {
        // Call the register function from the auth controller
        let response = await authController.register(req, res);

        // Send the response back to the client
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json({ status: error.message });
    }
});

module.exports = router;