const {moduleSchema} = require('../models/module_schema');


const createModule = async (req, res) => {
    const moduleItem = new moduleSchema(req.body);
    try {
      await moduleItem.save();
      res.status(201).json({message: 'Success', data:moduleItem});
    } catch (error) {
      res.status(400).send(error);
    }
  }


const getModules = async (req, res) => {
    try {
      const moduleItem = await moduleSchema.find({});
      res.status(200).json({message: 'Success', data:moduleItem});
    } catch (error) {
      res.status(500).send(error);
    }
  }


const updatModule = async (req, res) => {
    try {
      const moduleItem = await moduleSchema.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!moduleItem) {
        return res.status(404).json({message: 'Data Not Showing'});
      }
      res.status(200).json({message: 'Success', data:moduleItem});
    } catch (error) {
      res.status(400).send(error);
    }
  }

const deleteModule = async (req, res) => {
    try {
      const moduleItem = await moduleSchema.findByIdAndDelete(req.params.id);
      if (!item) {
        return res.status(404).json({message: 'Data Not Showing'});
      }
      res.status(200).json({message: 'Success', data:moduleItem});
    } catch (error) {
      res.status(500).send(error);
    }
  }




module.exports = {createModule, getModules, updatModule, deleteModule}