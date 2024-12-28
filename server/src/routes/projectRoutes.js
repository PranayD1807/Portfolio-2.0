import { Router } from "express";
import { getAllProjects, createProject, getProject, updateProject } from "../controllers/projectController.js";

const router = Router();
router
    .route("/")
    .get(getAllProjects)
    .post(createProject);

router
    .route("/:id")
    .get(getProject)
    .patch(updateProject);
export default router;