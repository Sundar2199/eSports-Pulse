import express from "express";
import cors from "cors";

import matchesRouter from './routes/matches.route.js';

import TournamentRouter from "./routes/tournament.route.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/matches", matchesRouter);

app.use("/api/tournament" , TournamentRouter);

export default app;

