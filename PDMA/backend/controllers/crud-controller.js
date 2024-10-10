const firebaseDB = require('../config/database/firebase-setup');
const { collection, doc, setDoc, getDoc, updateDoc  } = require("firebase/firestore");

module.exports = {
    // Initialize stats document
    initializeStats: async () => {
        // Set the stats document to default values
        await setDoc(doc(collection(firebaseDB, 'data'), 'stats'), {
            insert: 0,
            retrieve: 0,
            update: 0,
            delete: 0,
        });
    },

    // Function to get stats
    getStats: async () => {
        // Get the stats document
        let statsDoc = await getDoc(doc(collection(firebaseDB, 'data'), 'stats'));

        // If the stats document does not exist, initialize it
        if (!statsDoc.exists()) {
            await module.exports.initializeStats();
            statsDoc = await getDoc(doc(collection(firebaseDB, 'data'), 'stats'));
        }

        // Extract the stats data from the document
        let statsData = statsDoc.data();

        return {
            insertCount: statsData.insert,
            retrieveCount: statsData.retrieve,
            updateCount: statsData.update,
            deleteCount: statsData.delete
        };
    },

    // Function to increment insertion counter
    incrementInsertion: async () => {
        // Get the stats document
        let statsDoc = await getDoc(doc(collection(firebaseDB, 'data'), 'stats'));
        let statsData = statsDoc.data();

        // Update the stats document with the new insertion count
        await updateDoc(doc(collection(firebaseDB, 'data'), 'stats'), {
            insert: statsData.insert + 1
        });
    },

    // Function to increment retrieval counter
    incrementRetrieve: async () => {
        // Get the stats document
        let statsDoc = await getDoc(doc(collection(firebaseDB, 'data'), 'stats'));
        let statsData = statsDoc.data();

        //  Update the stats document with the new retrieval count
        await updateDoc(doc(collection(firebaseDB, 'data'), 'stats'), {
            retrieve: statsData.retrieve + 1
        });
    },

    // Function to increment update counter
    incrementUpdate: async () => {
        // Get the stats document
        let statsDoc = await getDoc(doc(collection(firebaseDB, 'data'), 'stats'));
        let statsData = statsDoc.data();

        // Update the stats document with the new update count
        await updateDoc(doc(collection(firebaseDB, 'data'), 'stats'), {
            update: statsData.update + 1
        });
    },

    // Function to increment deletion counter
    incrementDeletion: async () => {
        // Get the stats document
        let statsDoc = await getDoc(doc(collection(firebaseDB, 'data'), 'stats'));
        let statsData = statsDoc.data();

        // Update the stats document with the new deletion count
        await updateDoc(doc(collection(firebaseDB, 'data'), 'stats'), {
            delete: statsData.delete + 1
        });
    }
};
