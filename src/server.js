const express = require("express");
require("./connection");

const dotenv = require("dotenv");
dotenv.config();
const host = "0.0.0.0";
const port = process.env.PORT || 8000;

const routers = require("./routers");
var cors = require("cors");
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(cors());
app.use(routers);

app.listen(port, host,() => {
  console.log(`Server is created ${port}`);
});
