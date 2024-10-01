const authBackendRouter = require('./auth-router');
const driverBackendRouter = require('./driver-router');
const packageBackendRouter = require('./package-router');

const express = require('express');
const router = express.Router();

// Middleware to authenticate
function backendAuthenticate(req, res, next) {
    if (req.session && req.session.user) {
        next();
    } else {
        res.status(401).json({ status: 'Unauthorized, Please Login' });
    }
}

// BACKEND ROUTES
router.use('/auth', authBackendRouter);
router.use('/driver', driverBackendRouter);
router.use('/package', packageBackendRouter);

module.exports = router;