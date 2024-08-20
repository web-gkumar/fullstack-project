const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const collectionSchema = new mongoose.Schema({}, { strict: false });


module.exports = {
    collectionSchema
}


