require("dotenv").config();
const express = require("express");
require("./db/mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

// Define Routes
app.use("/api/users", require("./routes/user"));

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
