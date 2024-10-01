// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getFirestore } = require('firebase/firestore');

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAI3CsgMyNYckcsfaLZSZhqrLgnb9vtQ1U",
    authDomain: "fit2095-a2-5fbec.firebaseapp.com",
    projectId: "fit2095-a2-5fbec",
    storageBucket: "fit2095-a2-5fbec.appspot.com",
    messagingSenderId: "687223524976",
    appId: "1:687223524976:web:1f0e1bd7e79b008e562eb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = db;
