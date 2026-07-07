import express from "express";
import {
  createEbookQuestion,
  getEbookQuestions,
  deleteEbookQuestion,
} from "../controllers/ebookQuestion.controller.js";
import { isLoggedIn, isAdmin } from "../middlewares/auth.middleware.js";

import upload from "../middlewares/multer.js";

const ebookQuestionRoute = express.Router();

ebookQuestionRoute.post("/create", isLoggedIn, isAdmin, upload.single("questionImage"), createEbookQuestion);
ebookQuestionRoute.get("/ebook/:ebookId", getEbookQuestions);
ebookQuestionRoute.get("/ebook/:ebookId/chapter/:chapterNumber", getEbookQuestions);
ebookQuestionRoute.delete("/delete/:id", isLoggedIn, isAdmin, deleteEbookQuestion);

export default ebookQuestionRoute;
