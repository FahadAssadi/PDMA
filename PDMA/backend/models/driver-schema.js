const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
    driverId: {
        type: String,
        unique: true,
        default: () => {
            // Generate driverId only if it's not set
            if (!this.driverId) {
                return generateDriverId();
            }
            return this.driverId;
        }
    },
    driverName: { 
        type: String, 
        required: true, 
        validate: {
            validator: validateDriverName, 
            message: "Driver Name must be between 3 and 20 characters long and contain only letters and numbers."
        } 
    },
    driverDepartment: { 
        type: String, 
        required: true, 
        validate: 
        { 
            validator: validateDriverDepartment, 
            message: "Driver Department must be between 3 and 20 characters long and contain only letters and numbers." 
        }
    },
    driverLicence: { 
        type: String, 
        required: true, 
        validate: { 
            validator: validateDriverLicense,
            message: "Driver License must be 5 characters long and contain only letters and numbers."
        } 
    },
    driverIsActive: { 
        type: Boolean, 
        required: true, 
        default: false,
        validate: {
            validator: validateDriverIsActive,
            message: "Driver IsActive must be a boolean value."
        }
    },
    driverCreatedAt: { 
        type: Date, 
        default: Date.now,
        validate: {
            validator: validateDriverCreatedAt,
            message: "Driver CreatedAt must be a valid date."
        }
    },
    assignedPackages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Package' }]

});



/**
 * Generates a random driver ID.
 * @returns {string} The generated driver ID.
 */
function generateDriverId() {
    let randomDigits = Math.floor(Math.random() * 100).toString().padStart(2, '0');
    let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let studentId = "33328366";
    let randomLetters = '';

    for (let i = 0; i < 3; i++) {
        randomLetters += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
    }

    return `D${randomDigits}-${studentId.slice(0, 2)}-${randomLetters}`;
}


/**
 * Validates the driver name.
 * @param {string} name - The name to be validated.
 * @returns {boolean} True if the name is valid, false otherwise.
 */
function validateDriverName(name) {
    return name.length >= 3 && name.length <= 20 && /^[a-zA-Z0-9]+$/.test(name);
}

/**
 * Validates the driver license.
 * @param {string} license - The license to be validated.
 * @returns {boolean} True if the license is valid, false otherwise.
 */
function validateDriverLicense(license) {
    return license.length === 5 && /^[a-zA-Z0-9]+$/.test(license);
}

/**
 * Validates the driver department.
 * @param {string} department - The department to be validated.
 * @returns {boolean} True if the department is valid, false otherwise.
 */
function validateDriverDepartment(department) {
    return department.length >= 3 && department.length <= 20 && /^[a-zA-Z0-9]+$/.test(department);
}

/**
 * Validates the driver is active.
 * @param {boolean} isActive - The isActive to be validated.
 * @returns {boolean} True if the isActive is valid, false otherwise.
 */
function validateDriverIsActive(isActive) {
    return typeof isActive === 'boolean';
}

/**
 * Validates the driver created at.
 * @param {Date} createdAt - The createdAt to be validated.
 * @returns {boolean} True if the createdAt is valid, false otherwise.
 */
function validateDriverCreatedAt(createdAt) {
    return createdAt instanceof Date;
}

module.exports = mongoose.model('Driver', driverSchema);
