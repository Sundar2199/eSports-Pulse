import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import matchesRouter from './routes/matches.route.js';

import TournamentRouter from "./routes/tournament.route.js";
import chatRouter from "./routes/Chat.route.js";
import authRouter from "./routes/auth.route.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/matches", matchesRouter);

app.use("/api/tournament" , TournamentRouter);

app.use("/api/chat", chatRouter)

app.use("/api/auth", authRouter)
export default app;

