import express from "express";
const router = express.Router();
import AppError from "../utils/appError.js";

// routers
import projectRoutes from "./projectRoutes.js";
router.use("/projects", projectRoutes)
router.all("*", (req, res, next) => {
    console.log(`Can't find ${req.originalUrl}`);
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404)); // anything you pass into next will be assumed to be an error
});

export default router;