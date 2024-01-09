const CRUD_Model = require("../Models/CRUD_schema");

//create data
const createData = async (req, res) => {
  const { title, note, tag } = req.body;
  try {
    const NewDate = await CRUD_Model.create({ title, note, tag });
    res.json(NewDate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//read data
const readData = async (req, res) => {
  try {
    const data = await CRUD_Model.find({});
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//read single data
const readSingleData = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await CRUD_Model.findById(id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update data
const updateData = async (req, res) => {
  try {
    const { title, note, tag } = req.body;
    const { id } = req.params;
    const NewData = await CRUD_Model.findByIdAndUpdate(
      id,
      { title, note, tag },
      { new: true }
    );
    res.json(NewData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete data

const deleteData = async (req, res) => {
  try {
    const { id } = req.params;
    await CRUD_Model.findByIdAndDelete(id);
    res.json({ message: "deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createData,
  readSingleData,
  readData,
  updateData,
  deleteData,
};
