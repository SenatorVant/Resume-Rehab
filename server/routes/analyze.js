import express from "express";
import { analyzeResume } from "../services/aiService.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { resume, jobDescription } = req.body;

    if (!resume || !jobDescription) {
      return res.status(400).json({ error: "Missing input" });
    }

    const result = await analyzeResume(resume, jobDescription);

    res.json({ result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
