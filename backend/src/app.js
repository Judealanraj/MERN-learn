import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./dataBaseConnect.js";
import Post from "./model/postmodel.js";
import router from "./routes/postroutes.js";

import YAML from "yamljs";
import swagger from "swagger-ui-express"

const yamlFilePath = "./src/api.yaml"
const swaggerDocument = YAML.load(yamlFilePath)

dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api",router);
app.use("/api-docs", swagger.serve, swagger.setup(swaggerDocument))

// Basic Route
app.get("/", (req, res) => {
  res.send("Welcome to the Express Server!");
});



// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




