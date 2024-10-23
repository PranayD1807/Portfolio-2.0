import { Router } from "express";
import { getAllProjects, createProject, getProject, updateProject, deleteProject } from "../controllers/projectController.js";

const router = Router(); //this is a middleware
router
    .route("/")
    .get(getAllProjects)
    .post(createProject);

router
    .route("/:id")
    .get(getProject)
    .patch(updateProject)
    .delete(deleteProject);

export default router;