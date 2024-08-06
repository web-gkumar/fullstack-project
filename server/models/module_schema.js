const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moduleSchema = new Schema({
    moduleName : {
        type : String,
        required : true
    },
    moduleIcon: {
        type: String
    },
    moduleform: {
        type: String
    },
    menulist: {
        type: Array
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

const setModuleSchema = mongoose.model('modules', moduleSchema)
module.exports = {setModuleSchema};