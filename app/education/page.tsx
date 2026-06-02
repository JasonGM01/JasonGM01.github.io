import Link from 'next/link';

export default function Education() {
    return (
        <div className="Education-page">
            <ul>
                <strong>Schools:</strong>
                <p>California State University, Dominguez Hills</p>
                <p>A.K.A. CSUDH</p>
                <strong>Courses: </strong>
                <ul>
                    <p>Data Structures</p>
                    <p>Algorithms</p>
                    <p>Software Engineering</p>
                    <p>Software Development</p>
                    <p>C Programming</p>
                    <p>Programming Languages</p>
                </ul>
                <br></br>

                <p>El Camino Community College</p>
                <p>A.K.A. ECC</p>
                <strong>Courses: </strong>
                <ul>
                    <p>Data Structures and Algorithms</p>
                    <p>Computer Science 1</p>
                    <p>Computer Science 2</p>
                    <p>Discrete Math</p>
                </ul>
            </ul>
            <br></br>
            <Link className="home-button" href="/">Home</Link>
        </div>
    )
}