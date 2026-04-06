const dns = require("node:dns");
dns.setServers(["1.1.1.1", "1.0.0.1"]);

if(process.env.NODE_ENV !="production"){
    require('dotenv').config();
}
const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");
const Program = require("./src/models/program.model");
const connectDB = require("./src/config/db");
const programRoutes = require("./src/routes/program.routes");
const inquiryRoutes = require("./src/routes/inquiry.route");

// Middlewares
app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

app.use("/programs", programRoutes);
app.use("/inquiry", inquiryRoutes);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});