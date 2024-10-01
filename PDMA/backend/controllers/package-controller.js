const Package = require('../models/package-schema');
const Driver = require('../models/driver-schema');
const CRUD = require('./crud-controller');

module.exports = {
    createOne: async (req, res) => {
        // Extract the package data from the request body
        let packageDetails = {
            packageTitle: req.body.packageTitle,
            packageDestination: req.body.packageDestination,
            packageWeight: req.body.packageWeight,
            packageIsAllocated: req.body.packageIsAllocated,
            driverId: req.body.driverId
        };

        // Create a new package
        let package = await new Package(packageDetails).save();

        // Assign the package to the driver
        await Driver.updateOne({ _id: req.body.driverId }, { $push: { assignedPackages: package._id } });

        // Increment the insertion count
        await CRUD.incrementInsertion();

        return package;
    },

    getAll: async (req, res) => {
        // Increment the retrieve count
        await CRUD.incrementRetrieve();

        return await Package.find().populate('driverId').exec();
    },

    deleteOne: async (req, res) => {
        // Find the package by mongodb ID and delete it
        let package = await Package.findById(req.params.id);
        let response = await Package.deleteOne({ _id: req.params.id });
        
        // Throw an error if the package is not found
        if (!package) {
            throw new Error('Package not found');
        }

        // Remove the package from the driver's assigned packages
        await Driver.updateOne({ _id: package.driverId }, { $pull: { assignedPackages: package._id } });

        // Increment the deletion count
        await CRUD.incrementDeletion();

        return response;
    },

    updateOne: async (req, res) => {
        // Update the package by mongodb ID
        let response = await Package.updateOne({ _id: req.params.id }, req.body, { new: true });

        // Throw an error if the package is not found
        if (!response.matchedCount) {
            throw new Error('Package not found');
        }

        // Increment the update count
        await CRUD.incrementUpdate();

        return response;
    }
};
