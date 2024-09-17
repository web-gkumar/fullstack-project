const mongoose = require('mongoose');
const Schema = mongoose.Schema;




// Define the validator schema
const validatorSchema = new Schema({
    validatorName: String,
    required: Boolean,
    message: String,
    pattern: String,
    customError: String
  });
  
  // Define the styles schema
  const styleSchema = new Schema({
    "margin-top": String,
    "margin-right": String,
    "margin-bottom": String,
    "margin-left": String,
    "padding-top": String,
    "padding-right": String,
    "padding-bottom": String,
    "padding-left": String,
    background: String
  });
  
  // Define form control values schema (for radio and checkbox)
  const controlValueSchema = new Schema({
    isChecked: Boolean,
    value: String
  });
  
  // Define the form controls schema
  const formControlSchema = new Schema({
    fieldIcons: String,
    name: String,
    label: String,
    value: String,
    placeholder: String,
    class: String,
    disabled: Boolean,
    hideOnGrid: Boolean,
    type: String,
    formate: String, // specific to date fields
    validators: [validatorSchema],
    styles: [styleSchema],
    values: [controlValueSchema] // for radio/checkbox fields
  });
  
  // Define the form button schema
  const buttonSchema = new Schema({
    btnname: String,
    btnicon: String,
    useto: String,
    isdisabled: Boolean
  });


const formcontrol = new Schema({
    formName: String,
    formicon: String,
    isFormCreations: Boolean,
    gridUpdateMode: Boolean,
    pojo: String,
    gridButtons: [buttonSchema],
    formsButtons: [buttonSchema],
    formControls: [formControlSchema],
    createdDate: { type: Date, default: Date.now }
}, {strict: false});


const formcontrolSchema = mongoose.model('app_forms', formcontrol)
module.exports = {formcontrolSchema};