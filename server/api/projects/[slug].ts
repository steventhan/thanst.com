import { NowRequest, NowResponse } from "@vercel/node";
import { fetchAllProjects } from "./";

export default async (req: NowRequest, res: NowResponse) => {
  const projects = await fetchAllProjects();
  const matched = projects.find((project) => project.slug === req.query.slug);
  if (matched) return res.send(matched);
  return res.status(404).send(undefined);
};
