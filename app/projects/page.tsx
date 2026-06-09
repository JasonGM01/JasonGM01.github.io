import { getDB } from "@/lib/mongodb";
import { getSession } from "@/lib/session";
import { ProjectAdmin } from "../admin/page";

export default async function Projects() {
    const session = await getSession();
    const db = await getDB();

    const javaProjects = await db.collection("projects").find({ type: "Java" }).toArray();
    const webProjects = await db.collection("projects").find({ type: { $in: ["Web", "Group"] } }).toArray();
    const nodeProjects = await db.collection("projects").find({ type: "Node" }).toArray();

    return (
        <div className="projects-page">
            <strong>Projects:</strong>
            <ul className="projects">
                <div className="project-card">
                    <strong>Java Projects</strong>
                    {javaProjects.map((project) =>
                        <div key={project._id.toString()}>
                            <p><strong>{project.title}</strong></p>
                            <p>{project.description}</p>
                            <p>{project.type.join(", ")}</p>
                            <a href={project.link}>{project.link}</a>
                            <br /><br />
                        </div>
                    )}
                </div>

                <div className="project-card">
                    <strong>Web/Group Projects</strong>
                    {webProjects.map((project) =>
                        <div key={project._id.toString()}>
                            <p><strong>{project.title}</strong></p>
                            <p>{project.description}</p>
                            <p>{project.type.join(", ")}</p>
                            <a href={project.link}>{project.link}</a>
                            <br /><br />
                        </div>
                    )}

                </div>
                <br />

                <div className="project-card">
                    <strong>Backend</strong>
                    {nodeProjects.map((project) =>
                        <div key={project._id.toString()}>
                            <p><strong>{project.title}</strong></p>
                            <p>{project.description}</p>
                            <p>{project.type.join(", ")}</p>
                            <a href={project.link}>{project.link}</a>
                            <br /><br />
                        </div>
                    )}
                </div>
                <br />
            </ul>

            {session?.role === "Admin" && (
                <div>
                    <p><strong>Create New Project</strong></p>
                    <ProjectAdmin />
                </div>
            )}
        </div>
    )
}