import express from "express";
import checkToken from "../middlewares/auth.middleware.js";
import {
  generateInterViewReportController,
  getAllInterviewReportsController,
  getInterviewReportByIdController,
} from "../controllers/ai.controller.js";
import upload from "../middlewares/file.middleware.js";

const router  = express.Router();

router.post("/report", checkToken, upload.single("resume"), generateInterViewReportController);
router.get("/reports", checkToken, getAllInterviewReportsController);
router.get("/report/:interviewId", checkToken, getInterviewReportByIdController);

export default router
