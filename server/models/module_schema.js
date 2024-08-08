const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const tablist = new Schema({
    tabName : {type : String},
    tabIcon : {type : String},
    tabform : {type : String}
});


const menulistSchema = new Schema({
    menuName : {type : String},
    menuIcon : {type : String},
    menuform : {type : String},
    tablist : [tablist]
});

const setModuleSchema = new Schema({
    moduleName : { type : String, required : true},
    moduleIcon: { type: String},
    moduleform: { type: String},
    menulist: [menulistSchema],
    createdDate: { type: Date, default: Date.now}
});







const moduleSchema = mongoose.model('app_modules', setModuleSchema)
module.exports = {moduleSchema};