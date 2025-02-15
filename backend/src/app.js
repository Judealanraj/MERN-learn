import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./dataBaseConnect.js";

dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic Route
app.get("/", (req, res) => {
  res.send("Welcome to the Express Server!");
});

app.post("/api/createpost",(req,res) => {
    const {title,description} = req.body;
    console.log(title);
    console.log(description);
    res.send("ok");    
})

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




