import { Router } from "express";
import { getGithubProfile } from "../controller/controller.githubProfile";

const router = Router();

router.post("/github-profile", getGithubProfile);

export default router;
