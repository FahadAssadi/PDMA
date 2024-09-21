const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
    packageId: {
        type: String,
        unique: true,
        default: () => {
            // Generate packageId only if it's not set
            if (!this.packageId) {
                return generatePackageId();
            }
            return this.packageId;
        }
    },
    packageTitle: { 
        type: String, 
        required: true, 
        validate: {
            validator: validatePackageTitle, 
            message: "Package Title must be between 3 and 15 characters long and contain only letters and numbers."
        } 
    },
    packageWeight: { 
        type: Number, 
        required: true, 
        validate: 
        { 
            validator: validatePackageWeight, 
            message: "Package Weight must be a number greater than 0."
        }
    },
    packageDestination: { 
        type: String, 
        required: true, 
        validate: { 
            validator: validatePackageDestination,
            message: "Package Destination must be between 5 and 15 characters long and contain only letters and numbers."
        } 
    },
    packageDescription: { 
        type: String, 
        validate: {
            validator: validatePackageDescription,
            message: "Package Description must be between 5 and 50 characters long."
        }
    },
    packageIsAllocated: { 
        type: Boolean, 
        required: true, 
        default: false,
        validate: {
            validator: validatePackageIsAllocated,
            message: "Package IsAllocated must be a boolean value."
        }
    },
    driverId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Driver',
        required: true
    },
    packageCreatedAt: { 
        type: Date, 
        default: Date.now,
        validate: {
            validator: validatePackageCreatedAt,
            message: "Package CreatedAt must be a valid date."
        }
    }
});

/**
 * Generates a unique package ID.
 * @returns {string} - The generated package ID.
 */
function generatePackageId() {
    let randomDigits = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let initials = 'FA';
    let randomLetters = '';

    for (let i = 0; i < 2; i++) {
        randomLetters += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
    }

    return `PK${randomLetters}-${initials}-${randomDigits}`;
}


/**
 * Validates the package title.
 * @param {string} title - The title to validate.
 * @returns {boolean} - True if the title is valid, false otherwise.
 */
function validatePackageTitle(title) {
    return title.length >= 3 && title.length <= 15 && /^[a-zA-Z0-9\s]+$/.test(title);
}

/**
 * Validates the package weight.
 * @param {number} weight - The weight to validate.
 * @returns {boolean} - True if the weight is valid, false otherwise.
 */
function validatePackageWeight(weight) {
    return !isNaN(weight) && parseFloat(weight) > 0;
}

/**
 * Validates the package destination.
 * @param {string} destination - The destination to validate.
 * @returns {boolean} - True if the destination is valid, false otherwise.
 */
function validatePackageDestination(destination) {
    return destination.length >= 5 && destination.length <= 15 && /^[a-zA-Z0-9\s]+$/.test(destination);
}

/**
 * Validates the package description.
 * @param {string} description - The description to validate.
 * @returns {boolean} - True if the description is valid, false otherwise.
 */
function validatePackageDescription(description) {
    return (description.length >= 5 && description.length <= 50);
}

/**
 * Validates the package is allocated.
 * @param {boolean} isAllocated - The isAllocated to validate.
 * @returns {boolean} - True if the isAllocated is valid, false otherwise.
 */
function validatePackageIsAllocated(isAllocated) {
    return typeof isAllocated === 'boolean';
}

/**
 * Validates the package created at.
 * @param {Date} createdAt - The created at to validate.
 * @returns {boolean} - True if the created at is valid, false otherwise.
 */
function validatePackageCreatedAt(createdAt) {
    return createdAt instanceof Date;
}

module.exports = mongoose.model('Package', packageSchema);