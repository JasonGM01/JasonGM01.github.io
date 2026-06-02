import Link from 'next/link';
import './globals.css';

export default function Home() {
  return (
    <div className="main-page">
      <strong className="main-text">Main Page</strong>
      <ul className="link-column">
        <p>
          <Link className="education-button" href="./education">Education</Link>
        </p>

        <p>
          <Link className="skill-button" href="./skills">Skills</Link>
        </p>

        <p>
          <Link className="project-button" href="/projects">Projects</Link>
        </p>
      </ul>
    </div>
  );
}
