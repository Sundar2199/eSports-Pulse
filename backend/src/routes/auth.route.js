import express from "express"

import { validate } from "../middleware/validate.middleware"

import { registerSchema } from "../config/schemas/auth.schema"

import { register } from "../controllers/auth.controller"

const authRouter = express.Router();

authRouter.post(
    "/register",
    validate(registerSchema),
    register
);

export default authRouter;

