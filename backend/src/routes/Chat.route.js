import express from "express"

import { chatWithAI } from "../controllers/Chat.controller.js";

const chatRouter = express.Router();

chatRouter.post("/" , chatWithAI );

export default chatRouter;