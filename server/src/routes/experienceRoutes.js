import { Router } from "express";
import { getAllExperiences, createExperience, getExperience, updateExperience } from "../controllers/experienceController.js";
import { basicAuth } from "../middlewares/authMiddleware.js"

const router = Router(); //this is a middleware
router
    .route("/")
    .get(getAllExperiences)
    .post(basicAuth, createExperience);

router
    .route("/:id")
    .get(getExperience)
    .patch(basicAuth, updateExperience);
export default router;