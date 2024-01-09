const mongoose = require("mongoose");

const CRUD_Schema = mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  note: {
    required: true,
    type: String,
  },
  tag: {
    required: true,
    type: String,
  },
});

const CRUD_Model = mongoose.model("CRUD", CRUD_Schema);

module.exports = CRUD_Model;
