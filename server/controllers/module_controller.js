const {setModuleSchema} = require('../models/module_schema');


const createModule = async (req, res) => {
    const moduleItem = new setModuleSchema(req.body);
    try {
      await moduleItem.save();
      res.status(201).send(moduleItem);
    } catch (error) {
      res.status(400).send(error);
    }
  }


const getModules = async (req, res) => {
    try {
      const moduleItem = await setModuleSchema.find({});
      res.send(moduleItem);
    } catch (error) {
      res.status(500).send(error);
    }
  }


const updatModule = async (req, res) => {
    try {
      const moduleItem = await setModuleSchema.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!moduleItem) {
        return res.status(404).send();
      }
      res.send(moduleItem);
    } catch (error) {
      res.status(400).send(error);
    }
  }

const deleteModule = async (req, res) => {
    try {
      const moduleItem = await setModuleSchema.findByIdAndDelete(req.params.id);
      if (!item) {
        return res.status(404).send();
      }
      res.send(moduleItem);
    } catch (error) {
      res.status(500).send(error);
    }
  }




module.exports = {createModule, getModules, updatModule, deleteModule}