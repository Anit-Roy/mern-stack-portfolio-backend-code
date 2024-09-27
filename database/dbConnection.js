import mongoose from "mongoose";

const Connection = () => {
    mongoose
        .connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000, // Adjust timeout if needed
        })
        .then(() => {
            console.log("Connected to MongoDB Cloud.");
        })
        .catch((error) => {
            console.log(`Error connecting to MongoDB Cloud: ${error.message}`);
        });
};

export default Connection;
