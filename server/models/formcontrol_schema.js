const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const formcontrol = new Schema({
    formName: { type: String},
    updateMode: Boolean,
    createdDate: { type: Date, default: Date.now}
}, {strict: false});


const formcontrolSchema = mongoose.model('app_forms', formcontrol)
module.exports = {formcontrolSchema};