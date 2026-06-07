import Navbar from '../components/navbar/page';

export default async function Projects() {
    const res = await fetch("http://localhost:3000/api/projects", { cache: "no-store" });

    const projects = await res.json();
    const javaProjects = projects.filter((project: any) => project.type === "Java");
    const webProjects = projects.filter((project: any) => project.type === "Web");
    const groupProjects = projects.filter((project: any) => project.type === "Group");
    const nodeProjects = projects.filter((project: any) => project.type === "Node");
    
    return (
        <div >
            <Navbar />
            <div className="projects-page">
                <strong>Projects:</strong>

                <ul className="projects">
                    <div className="project-card">
                        <strong>Java Projects</strong>
                        {javaProjects.map((project: any) => (
                            <div key={project._id}>
                                <p><strong>{project.title}</strong></p>
                                <p>{project.description}</p>
                                <a href={project.link}>{project.link}</a>
                                <br/><br/>
                            </div>
                        ))}
                    </div>
                    <br></br>

                    <div className="project-card">
                        <strong>Web/Group Projects</strong>
                        {/* {webProjects.map((project: any) => (
                            <div key={project._id}>
                                <p><strong>{project.title}</strong></p>
                                <p>{project.description}</p>
                                <a href={project.link}>{project.link}</a>
                                <br/><br/>
                            </div>
                        ))}
                        
                        {groupProjects.map((project: any) => (
                            <div key={project._id}>
                                <p><strong>{project.title}</strong></p>
                                <p>{project.description}</p>
                                <a href={project.link}>{project.link}</a>
                                <br/><br/>
                            </div>
                        ))} */}
                        <p>Comm Share</p>
                        <p>Algo Tester</p>
                        <p>Portfolio Website</p>
                        <p>Code Astra</p>
                        <p>Plantaer (recently started)</p>
                        <p>Storefront - CSUDH</p>
                    </div>
                    <br></br>

                    <div className="project-card">
                        <strong>Backend</strong>
                        {/* {nodeProjects.map((project: any) => (
                            <div key={project._id}>
                                <p><strong>{project.title}</strong></p>
                                <p>{project.description}</p>
                                <a href={project.link}>{project.link}</a>
                                <br/><br/>
                            </div>
                        ))} */}
                        <p>Legacy Car Care</p>
                        <p>Comm Share (Again)</p>
                        <p>StoreFront (Again)</p>
                    </div>
                    <br></br>
                </ul>
            </div>
        </div>
    )
}