const mongoose = require('mongoose');
const {DATABASE_URL} = process.env;


const connectDB = async () => {
    try {
        const DB_OPTIONS = { dbName: "myapp", useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true}
        await mongoose.connect(DATABASE_URL, DB_OPTIONS );
        console.log("database Successfull connected...")
    } catch (error) {
       console.error("Dababase Not Connected...");
       process.exit(0);
    }
}
module.exports = connectDB;