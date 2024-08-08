const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const actionBtn = new Schema({
    btnname : {type : String},
    btnicon : {type : String},
    isdisabled : Boolean
});

const objValue = new Schema({
    isChecked: Boolean,
    value: {type : String},
})

const validator = new Schema({
    validatorName: {type : String},
    required: Boolean,
    message: {type : String},
    pattern: {type : String},
    customError: {type : String}
})

const style = new Schema({

})

const formControls = new Schema({
    fieldIcons: {type : String},
    name: {type : String},
    label: {type : String},
    values: [objValue],
    class: [],
    disabled: Boolean,
    type: {type : String},
    validators: [validator],
    styles: [style]
});





const setModuleSchema = new Schema({
    actionButtons : [actionBtn],
    formControls: [formControls],
    formName: { type: String},
    savedFormData: [SaveFormSchema],
    updateMode: Boolean,
    createdDate: { type: Date, default: Date.now}
});







const formsSchema = mongoose.model('app_forms', setModuleSchema)
module.exports = {formsSchema};