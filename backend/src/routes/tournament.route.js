import {fetchTournament,fetchTournamentById} from "../controllers/tournament.controller.js"

import express from "express";

const TournamentRouter = express.Router();

TournamentRouter.get("/",fetchTournament);

TournamentRouter.get("/:id",fetchTournamentById);

export default TournamentRouter;