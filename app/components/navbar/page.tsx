import Link from 'next/link';
import '../../globals.css';

export default function Navbar() {

    return (
        <nav>
            <ul className="navbar-layout">
                <li className="education-button">
                    <Link href="/education"><strong>Education</strong></Link>
                </li>
                <li className="skill-button">
                    <Link href="/skills"><strong>Skills</strong></Link>
                </li>
                <li className="project-button">
                    <Link href="/projects"><strong>Projects</strong></Link>
                </li>
                <li className="contact-button">
                    <Link href="/contact"><strong>Contact Me</strong></Link>
                </li>
            </ul>
        </nav>
    )
}