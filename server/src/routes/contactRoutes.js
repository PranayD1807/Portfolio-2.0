import { Router } from "express";
import { sendMail } from "../controllers/contactController.js"

const router = Router(); //this is a middleware
router
    .route("/")
    .post(sendMail);

export default router;