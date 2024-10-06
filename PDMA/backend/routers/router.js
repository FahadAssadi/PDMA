const authRouter = require('./auth-router');
const statsRouter = require('./stats-router');
const driverRouter = require('./driver-router');
const packageRouter = require('./package-router');

const express = require('express');
const router = express.Router();

// BACKEND ROUTES
router.use('/auth', authRouter);
router.use('/stats', statsRouter);
router.use('/driver', driverRouter);
router.use('/package', packageRouter);

module.exports = router;