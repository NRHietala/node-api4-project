const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 9000;

app.use("/api/*", (_, res) => {
  res.json({ data: "👺 The API is ALIVE 👺" });
});

app.listen(port, () => {
  console.log(`Server live at ${port}`);
});
