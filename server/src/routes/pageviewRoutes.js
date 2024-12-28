import { Router } from "express";
import { createPageView, getAllPageViews, getPageView, getPageViewStats, updatePageView } from "../controllers/pageviewController.js";

const router = Router();
router
    .route("/")
    .get(getAllPageViews)
    .post(createPageView);

router
    .route("/stats")
    .get(getPageViewStats);

router
    .route("/:id")
    .get(getPageView)
    .patch(updatePageView);

export default router;