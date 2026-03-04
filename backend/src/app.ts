import express from "express";
import githubRoute from "./routes/route.githubProfile";
import cors from "cors";
export const app = express();
const allowedOrigins = ["http://localhost:3000"];

app.use(express.json());
app.use(cors({ origin: allowedOrigins }));

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api", githubRoute);
