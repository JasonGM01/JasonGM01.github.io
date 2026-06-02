import Link from 'next/link';
import '../globals.css';

export default function Skills() {
    return (
        <div className="skills-page">
            <ul className="skills-row">
                <strong>Skills:</strong>
                <ul className="card">
                    <strong>Programming Languages</strong>
                    <p>C++</p>
                    <p>Java</p>
                    <p>Python</p>
                    <p>Dart</p>
                    <p>Javascript</p>
                    <p>CSS</p>
                </ul>
                <br></br>

                <ul className="card">
                    <strong>Frameworks</strong>
                    <p>React</p>
                    <p>node.js</p>
                    <p>next.js</p>
                    <p>Flutter</p>
                </ul>
                <br></br>

                <ul className="card">
                    <strong>Cloud / Database</strong>
                    <p>Firebase Firestore</p>
                    <p>Supabase</p>
                    <p>MongoDB</p>
                    <p>Docker</p>
                </ul>
                <br></br>

                <ul className="card">
                    <strong>Speaking Languages</strong>
                    <p>Spanish (Fluent)</p>
                    <p>English (Fluent)</p>
                    <p>Japanese (Conversational)</p>
                    <p>German (not too well)</p>
                </ul>
                <br></br>

                <ul className="card">
                    <strong>Automotive</strong>
                    <p>Engine Performance</p>
                    <p>Drivetrains</p>
                    <p>Suspensions</p>
                    <p>Electronic Diagnosis</p>
                    <p>Remove and Replace</p>
                </ul>

                <br></br>

                <Link className="home-button" href="/">Home</Link>
            </ul>
        </div>
    )
}