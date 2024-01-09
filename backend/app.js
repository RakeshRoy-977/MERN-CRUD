require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectToDB = require("./database");
const router = require("./Routes/CURD_routes");

const app = express();
connectToDB();
app.use(cors());
app.use(express.json());

app.use("/api", router);

app.listen(process.env.PORT, () => {
  console.log(`Server is Up at ${process.env.PORT}`);
});
