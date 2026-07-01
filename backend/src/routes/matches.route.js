
import {fetchMatches} from '../controllers/matches.controller.js';

import express from "express";

const matchesRouter = express.Router();

matchesRouter.get("/",fetchMatches);

export default matchesRouter;
