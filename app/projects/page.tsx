import Link from 'next/link';
import Navbar from '../components/navbar/page';

const Projects = () => {
    return (
        <div >
            <Navbar />
            <div className="projects-page">
                <strong>Projects:</strong>

                <ul className="projects">
                    <div className="project-card">
                        <strong>Java Projects</strong>
                        <p>Paint Cost Calculator</p>
                        <p>Amusement Park Simulator</p>
                        <p>Infix To Postfix Converter</p>
                    </div>
                    <br></br>

                    <div className="project-card">
                        <strong>Web/Group Projects</strong>
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
export default Projects;