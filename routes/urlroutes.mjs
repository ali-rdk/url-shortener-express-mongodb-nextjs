import { Router } from "express";
import {
  getDataController,
  redirectController,
  shortenController,
} from "../controller/index.mjs";

export const URLRoutes = Router();

URLRoutes.post("/shorten", shortenController);
URLRoutes.get("/:shortId", redirectController);
URLRoutes.get("/", getDataController);
