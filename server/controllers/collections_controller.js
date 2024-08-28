const mongoose = require('mongoose');
const { collectionSchema } = require('../models/saveform_schema');




const saveDyanimicFormsData = async (req, res) => {
    try {
      const dynamicModel = mongoose.model(req.body.pojo, collectionSchema);
      let moduleItem = new dynamicModel(req.body);
      await moduleItem.save();
      res.status(201).json({ message: 'Form Successfully Saved', data: moduleItem });
    } catch (error) {
      res.status(400).send(error);
    }
  }
  
  const getByCollections = async (req, res) => {
    const collectionModel = mongoose.model(req.body.pojo, collectionSchema);
    try {
      const moduleItem = await collectionModel.find({});
      res.status(200).json({ message: 'Success', data: moduleItem });
    } catch (error) {
      res.status(500).send(error);
    }
  }
  
  

  
  const getSingleDataByCollections = async (req, res) => {
    const collectionModel = mongoose.model(req.body.pojo, collectionSchema);
    try {
      const moduleItem = await collectionModel.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({ message: 'Success', data: moduleItem });
    } catch (error) {
      res.status(500).send(error);
    }
  }
  
module.exports = {saveDyanimicFormsData, getByCollections, getSingleDataByCollections}  