type project = {
"_id":number,
"title": string,
"description":string,
"type": string[],
"link": string
}

export default async function Projects() {
    const res = await fetch("http://localhost:3000/api/projects", { cache: "no-store" });

    const projects = await res.json();
    const javaProjects = projects.filter((project: project) => project.type.includes("Java"));
    const webProjects = projects.filter((project: project) => project.type.includes("Web") || project.type.includes("Group"));
    const nodeProjects = projects.filter((project: project) => project.type.includes("Node"));
    
    return (
            <div className="projects-page">
                <strong>Projects:</strong>
                <ul className="projects">
                    <div className="project-card">
                        <strong>Java Projects</strong>
                        {javaProjects.map((project: project) => 
                            <div key={project._id}>
                                <p><strong>{project.title}</strong></p>
                                <p>{project.description}</p>
                                <p>{project.type.join(", ")}</p>
                                <a href={project.link}>{project.link}</a>
                                <br/><br/>
                            </div>
                        )}
                    </div>

                    <div className="project-card">
                        <strong>Web/Group Projects</strong>
                        {webProjects.map((project: project) => 
                            <div key={project._id}>
                                <p><strong>{project.title}</strong></p>
                                <p>{project.description}</p>
                                <p>{project.type.join(", ")}</p>
                                <a href={project.link}>{project.link}</a>
                                <br/><br/>
                            </div>
                        )}

                    </div>
                    <br></br>

                    <div className="project-card">
                        <strong>Backend</strong>
                        {nodeProjects.map((project: project) => 
                            <div key={project._id}>
                                <p><strong>{project.title}</strong></p>
                                <p>{project.description}</p>
                                <p>{project.type.join(", ")}</p>
                                <a href={project.link}>{project.link}</a>
                                <br/><br/>
                            </div>
                        )}
                    </div>
                    <br></br>
                </ul>
            </div>
    )
}