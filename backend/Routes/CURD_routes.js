const express = require("express");
const {
  createData,
  readData,
  updateData,
  deleteData,
  readSingleData,
} = require("../controllers/CRUD_controller");

const router = express.Router();

//create data
router.post("/create", createData);
//read data
router.get("/getdata", readData);
//single data read
router.get("/:id", readSingleData);
//update data
router.put("/update/:id", updateData);
//delete data
router.delete("/delete/:id", deleteData);

module.exports = router;
