require("dotenv").config();
const express = require("express");
const app = express();
const aiRoutes = require("./routes/ai.routes");
const cors = require("cors");

const allowedOrigins = [
  "http://localhost:5173",   // vite
  "http://localhost:3000",
  "http://127.0.0.1:5173",
  "https://ai-code-reviewer-delta-puce.vercel.app"
];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/api/ai", aiRoutes);

module.exports = app;
