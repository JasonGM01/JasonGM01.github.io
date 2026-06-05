import Link from 'next/link';
import Navbar from '../components/navbar/page';

const Education = () => {
    return (
        <div>
            <Navbar />
            <div className="education-page">
                <strong>Education:</strong>
                <ul className="schools">
                    <div className="school-card">
                        <strong>California State University, Dominguez Hills</strong>
                        <p>A.K.A. CSUDH</p>
                        <strong>Courses: </strong>
                        <p>Data Structures</p>
                        <p>Algorithms</p>
                        <p>Software Engineering</p>
                        <p>Software Development</p>
                        <p>C Programming</p>
                        <p>Programming Languages</p>
                    </div>
                    <br></br>

                    <div className="school-card">
                        <strong>El Camino Community College</strong>
                        <p>A.K.A. ECC</p>
                        <strong>Courses: </strong>
                        <p>Data Structures and Algorithms</p>
                        <p>Computer Science 1</p>
                        <p>Computer Science 2</p>
                        <p>Discrete Math</p>

                    </div>
                    <br></br>
                </ul>
            </div>
        </div>
    )
}
export default Education;