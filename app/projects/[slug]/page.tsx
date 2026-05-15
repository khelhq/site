import { getProjectBySlug } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectClient from "./ProjectClient";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return <ProjectClient project={project} />;
}
