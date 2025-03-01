import express from "express";
const router = express.Router();
import AppError from "../utils/appError.js";

// routers
import projectRoutes from "./projectRoutes.js";
import experienceRoutes from "./experienceRoutes.js";
import contactRoutes from "./contactRoutes.js";
import pageviewRoutes from "./pageviewRoutes.js"
import statsRoutes from "./statsRoutes.js";

router.use("/projects", projectRoutes)
router.use("/experiences", experienceRoutes)
router.use("/contact", contactRoutes)
router.use("/visits", pageviewRoutes)
router.use("/stats", statsRoutes)

// All routes
router.all("*", (req, res, next) => {
    console.log(`Can't find ${req.originalUrl}`);
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404)); // anything you pass into next will be assumed to be an error
});

export default router;