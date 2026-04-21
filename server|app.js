import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import analyzeRoute from "./routes/analyze.js";
import path from "path";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// API
app.use("/api/analyze", analyzeRoute);

// Serve frontend
app.use(express.static("client"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
