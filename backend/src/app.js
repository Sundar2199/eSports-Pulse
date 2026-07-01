import express from "express";
import cors from "cors";

import matchesRouter from './routes/matches.route.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/matches", matchesRouter);

export default app;