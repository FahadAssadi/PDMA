const firebaseDB = require('../config/database/firebase-setup');
const { collection, addDoc, getDocs, query, where } = require("firebase/firestore");

module.exports = {
    // Function to authenticate the user
    login: async (req, res) => {
        // Extract the username and password from the request body
        let { username, password } = req.body;

        // Query the database for the user with the given username
        let userSnap = await getDocs(
            query(collection(firebaseDB, "users"), where("username", "==", username))
        );

        // If the user does not exist, throw an error
        if (userSnap.empty) {
            throw new Error("User does not exist");
        }

        // Extract the user data from the snapshot
        let userData = userSnap.docs[0].data();

        // If the password is incorrect, throw an error
        if (userData.password != password) {
            throw new Error("Incorrect password");
        }

        return {
            status: "Login successful"
        };
    },

    // Function to register the user
    register: async (req, res) => {
        // Extract the username and password from the request body
        let { username, password } = req.body;

        // Query the database for the user with the given username
        let userSnap = await getDocs(
            query(collection(firebaseDB, "users"), where("username", "==", username))
        );

        // If the user already exists, throw an error
        if (!userSnap.empty) {
            throw new Error("User already exists");
        }

        // Add the user to the database
        await addDoc(collection(firebaseDB, "users"), {
            username: username,
            password: password
        });

        return {
            status: "Registration successful"
        };
    }
};
