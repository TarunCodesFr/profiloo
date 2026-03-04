import { Request, Response } from "express";

export async function getGithubProfile(req: Request, res: Response) {
  const username = req.body.username;
  if (!username) {
    return res.status(400).json({ error: "Username is required" });
  }

  try {
    const data = fetch(`https://api.github.com/users/${username}`);
    const response = await data;
    if (!response.ok) {
      return res
        .status(response.status)
        .json({ error: "GitHub user not found or the profile is private" });
    }
    res.json(await response.json());
  } catch (error) {
    console.error("Error fetching GitHub profile:", error);
    res.status(500).json({ error: "Failed to fetch GitHub profile" });
  }
}
