import express from "express";
import cors from "cors";
import { askQuestion } from "./rag.js";

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Health check
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.post("/chat", async (req, res) => {
  const { question } = req.body;

  if (!question || question.trim() === "") {
    return res.json({ answer: "Please ask a question." });
  }

  try {
    const answer = await askQuestion(question);
    res.json({ answer });
  } catch (err) {
    console.error("BACKEND ERROR:", err);
    res.status(500).json({ answer: "Error processing your question." });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
