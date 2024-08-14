const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const setModuleSchema = new Schema({
    moduleName : { type : String, required : true},
    moduleIcon: { type: String},
    moduleform: { type: String},
}, { strict: false}, {timestamps: true}
);







const moduleSchema = mongoose.model('app_modules', setModuleSchema)
module.exports = {moduleSchema};