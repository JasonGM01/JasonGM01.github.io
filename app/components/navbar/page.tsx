"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar({session}: {session: any}) {
    const pathName = usePathname();

    return (
        <nav className="navi">
            <ul className="navbar-layout">
                {pathName !== '/' && (
                    <li>
                        <Link className="home-button" href="/">Home</Link>
                    </li>
                )}

                {pathName !== '/education' && (
                    <li className="education-button">
                        <Link href="/education"><strong>Education</strong></Link>
                    </li>
                )}

                {pathName !== '/skills' && (
                    <li className="skill-button">
                        <Link href="/skills"><strong>Skills</strong></Link>
                    </li>
                )}

                {pathName !== '/projects' && (
                    <li className="project-button">
                        <Link href="/projects"><strong>Projects</strong></Link>
                    </li>
                )}

                {pathName !== '/contact' && (
                    <li className="contact-button">
                        <Link href="/contact"><strong>Contact Me</strong></Link>
                    </li>
                )}

                {!session
                &&pathName !== '/users' 
                && pathName !== '/login' 
                && pathName !== '/signup' 
                && (
                    <li className="user-button">
                        <Link href="/users"><strong>Login/Signup</strong></Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}