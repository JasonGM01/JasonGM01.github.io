"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function ContactAdmin() {
    const router = useRouter();
    const [contact, setContact] = useState("");
    const [type, setType] = useState("");
    const [message, setMessage] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const res = await fetch("/api/contacts",
            {
                method: "POST",
                headers:
                {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ contact, type })
            });
        const data = await res.json();

        if (data) {
            setMessage("Failed to add contact")
        }

        setMessage("Added successfully");
        router.refresh();
    }

    return (
        <div className="admin-stuff">
            <form onSubmit={handleSubmit}>
                <input className="contact-card"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="contact"
                /><br />

                <input className="contact-card"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    placeholder="type"
                /><br />

                <button className="submit-button" type="submit">Add</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export function SkillAdmin() {
    const router = useRouter();
    const [skill, setSkill] = useState("");
    const [level, setLevel] = useState("");
    const [type, setType] = useState("");
    const [message, setMessage] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const res = await fetch("/api/skills",
            {
                method: "POST",
                headers:
                {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ skill, type, level })
            });
        const data = await res.json();

        if (data) {
            setMessage("Failed to add skill")
        }

        setMessage("Added successfully");
        router.refresh();
    }

    return (
        <div className="admin-stuff">
            <form onSubmit={handleSubmit}>
                <input className="skill-card"
                    value={skill}
                    onChange={(e) => setSkill(e.target.value)}
                    placeholder="skill"
                /><br />

                <input className="skill-card"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    placeholder="type"
                /><br />

                <input className="skill-card"
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    placeholder="level"
                /><br />

                <button className="submit-button" type="submit">Add</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export function ProjectAdmin() {
    const router = useRouter();
    const [project, setProject] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [link, setLink] = useState("");
    const [message, setMessage] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const res = await fetch("/api/projects",
            {
                method: "POST",
                headers:
                {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ project, description, type, link })
            });
        const data = await res.json();

        if (data) {
            setMessage("Failed to add project")
        }

        setMessage("Added successfully");
        router.refresh();
    }

    return (
        <div className="admin-stuff">
            <form onSubmit={handleSubmit}>
                <input className="project-card"
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                    placeholder="Project"
                /><br />

                <input className="project-card"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    placeholder="type"
                /><br />

                <input className="project-card"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="description"
                /><br />

                <input className="project-card"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    placeholder="link"
                /><br />

                <button className="submit-button" type="submit">Add</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export function EducationAdmin() {
    const router = useRouter();
    const [school, setSchool] = useState("");
    const [accro, setAccro] = useState("");
    const [courses, setCourses] = useState("");
    const [date, setDate] = useState("");
    const [message, setMessage] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const res = await fetch("/api/education",
            {
                method: "POST",
                headers:
                {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ school, accro, courses, date })
            });
        const data = await res.json();

        if (data) {
            setMessage("Failed to add school")
        }

        setMessage("Added successfully");
        router.refresh();
    }

    return (
        <div className="admin-stuff">
            <form onSubmit={handleSubmit}>
                <input className="school-card"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                    placeholder="school"
                /><br />

                <input className="school-card"
                    value={accro}
                    onChange={(e) => setAccro(e.target.value)}
                    placeholder="acronym"
                /><br />

                <input className="school-card"
                    value={courses}
                    onChange={(e) => setCourses(e.target.value)}
                    placeholder="courses"
                /><br />

                <input className="school-card"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    placeholder="date"
                /><br />

                <button className="submit-button" type="submit">Add</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}