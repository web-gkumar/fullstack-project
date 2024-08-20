const mongoose = require('mongoose');
const { formcontrolSchema } = require('../models/formcontrol_schema');
const { collectionSchema } = require('../models/saveform_schema');

const createForm = async (req, res) => {
  const moduleItem = new formcontrolSchema(req.body);
  try {
    await moduleItem.save();
    res.status(201).json({ message: 'Form Successful Created', data: moduleItem });
  } catch (error) {
    res.status(400).send(error);
  }
}




const saveForm = async (req, res) => {
  try {
    const dynamicModel = mongoose.model(req.body.collectionName, collectionSchema);
    let moduleItem = new dynamicModel(req.body);
    await moduleItem.save();
    res.status(201).json({ message: 'Form Successfully Saved', data: moduleItem });
  } catch (error) {
    res.status(400).send(error);
  }
}


const getForms = async (req, res) => {
  try {
    const moduleItem = await formcontrolSchema.find({});
    res.status(200).json({ message: 'Success', data: moduleItem });
  } catch (error) {
    res.status(500).send(error);
  }
}


const getByCollections = async (req, res) => {
  const collectionModel = mongoose.model(req.body.collectionName, collectionSchema);
  try {
    const moduleItem = await collectionModel.find({});

    res.status(200).json({ message: 'Success', data: moduleItem });
  } catch (error) {
    res.status(500).send(error);
  }

}


const updatForm = async (req, res) => {
  try {
    const moduleItem = await formcontrolSchema.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!moduleItem) {
      return res.status(404).json({ message: 'Data Id not Match' });
    }
    res.status(200).json({ message: 'Update Successfull', data: moduleItem });
  } catch (error) {
    res.status(400).send(error);
  }
}

const deleteForm = async (req, res) => {
  try {
    const moduleItem = await formcontrolSchema.findByIdAndDelete(req.params.id);
    if (!moduleItem) {
      return res.status(404).json({ message: 'Data Id not Match' });
    }
    res.status(200).json({ message: 'Data Successfull Deleted' });
  } catch (error) {
    res.status(500).send(error);
  }
}




module.exports = { createForm, saveForm, getForms, updatForm, getByCollections, deleteForm }