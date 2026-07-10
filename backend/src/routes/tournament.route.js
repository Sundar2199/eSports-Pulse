import {fetchTournament} from "../controllers/tournament.controller.js"

import express from "express";

const TournamentRouter = express.Router();

TournamentRouter.get("/",fetchTournament);

export default TournamentRouter;