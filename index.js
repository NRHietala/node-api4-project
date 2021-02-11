const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Server live at ${port}`);
});
