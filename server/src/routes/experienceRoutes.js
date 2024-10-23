import { Router } from "express";
import { getAllExperiences, createExperience, getExperience, updateExperience } from "../controllers/experienceController.js";

const router = Router(); //this is a middleware
router
    .route("/")
    .get(getAllExperiences)
    .post(createExperience);

router
    .route("/:id")
    .get(getExperience)
    .patch(updateExperience);
export default router;