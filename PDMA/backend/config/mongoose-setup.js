const mongoose = require("mongoose");

// Setup mongo db connection
const connectDB = async (url) => {
    try {
        await mongoose.connect(url);

        return "Connected to MongoDB";
    } catch (error) {
        console.log("Error connecting to MongoDB");
        console.log(error);
    }
}

const MONGO_URL = "mongodb://localhost:27017/FIT2095-A2";

connectDB(MONGO_URL)
	.then(console.log)
	.catch((err) => console.log(err));
