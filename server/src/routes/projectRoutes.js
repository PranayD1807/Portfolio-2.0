import { Router } from "express";
import { getAllProjects, createProject, getProject, updateProject } from "../controllers/projectController.js";
import { basicAuth } from "../middlewares/authMiddleware.js"

const router = Router();
router
    .route("/")
    .get(getAllProjects)
    .post(basicAuth, createProject);

router
    .route("/:id")
    .get(getProject)
    .patch(basicAuth, updateProject);
export default router;