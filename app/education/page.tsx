import Link from 'next/link';
import '../globals.css';

export default function Education() {
    return (
        <div className="education-page">
            <ul className="schools">
                <strong>Schools:</strong>
                <div className="school-card">
                    <p>California State University, Dominguez Hills</p>
                    <p>A.K.A. CSUDH</p>
                    <div className="courses">
                        <strong>Courses: </strong>
                        <p>Data Structures</p>
                        <p>Algorithms</p>
                        <p>Software Engineering</p>
                        <p>Software Development</p>
                        <p>C Programming</p>
                        <p>Programming Languages</p>
                    </div>
                </div>
                <br></br>

                <div className="school-card">
                    <p>El Camino Community College</p>
                    <p>A.K.A. ECC</p>
                    <div className="courses">
                        <strong>Courses: </strong>
                        <p>Data Structures and Algorithms</p>
                        <p>Computer Science 1</p>
                        <p>Computer Science 2</p>
                        <p>Discrete Math</p>
                    </div>
                </div>

                <br></br>
                <Link className="home-button" href="/">Home</Link>
            </ul>
        </div>
    )
}