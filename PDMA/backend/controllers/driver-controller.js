const Driver = require('../models/driver-schema');
const Package = require('../models/package-schema');
const CRUD = require('./crud-controller');

module.exports = {
    createOne: async (req, res) => {
        // Extract the package data from the request body
        let driverDetails = {
            driverName: req.body.driverName,
            driverDepartment: req.body.driverDepartment,
            driverLicence: req.body.driverLicence,
            driverIsActive: req.body.driverIsActive,
        };

        // Create a new driver
        await CRUD.incrementInsertion();

        // Return the newly created driver
        return await new Driver(driverDetails).save();
    },

    getAll: async (req, res) => {
        // Increment the retrieve count
        await CRUD.incrementRetrieve();

        // Return all drivers
        return await Driver.find().populate('assignedPackages');
    },

    deleteOne: async (req, res) => {
        // Declare the response and package variables
        let response;
        let driver;

        // Check if the request is from the backend
        if (req.body.isBackend) {
            // Find the driver by mongodb ID and delete it
            driver = await Driver.findById(req.query._id);
            response = await Driver.deleteOne({ _id: req.query._id });
        } else {
            // Find the driver by driver ID and delete it
            driver = await Driver.findOne({ driverId: req.query.driverId });
            response = await Driver.deleteOne({ driverId: req.query.driverId });
        }

        // Throw an error if the driver is not found
        if (!driver) {
            throw new Error('Driver not found');
        }

        // Delete all packages assigned to the driver
        await Package.deleteMany({ driverId: driver._id });

        // Increment the deletion count
        await CRUD.incrementDeletion();

        return response;
    },

    updateOne: async (req, res) => {
        // Update the driver by mongodb ID
        let response = await Driver.updateOne({ _id: req.body._id }, req.body, { new: true });

        // Throw an error if the driver is not found
        if (!response.matchedCount) {
            throw new Error('Driver not found');
        }

        // Increment the update count
        await CRUD.incrementUpdate();

        return response;
    }
};
