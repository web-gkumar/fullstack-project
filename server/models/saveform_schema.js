const { Schema, default: mongoose } = require('mongoose');


const FormSchema = new Schema({

}, {strict : false});




const saveFormSchema = mongoose.model("app_saveForms", FormSchema);



module.exports = {
    saveFormSchema
}


