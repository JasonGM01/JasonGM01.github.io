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
                /><br/>

                <input className="contact-card"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    placeholder="type"
                /><br/>
                
                <button className="submit-button" type="submit">Add</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export function SkillsAdmin() {
    const router = useRouter();
    const [skill, setSkill] = useState("");
    const [level, setLevel] = useState("");
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
                body: JSON.stringify({ skill, type, level })
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
                <input className="skill-card"
                    value={skill}
                    onChange={(e) => setSkill(e.target.value)}
                    placeholder="skill"
                /><br/>

                <input className="skill-card"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    placeholder="type"
                /><br/>

                <input className="skill-card"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                placeholder="level"
                /><br/>
                
                <button className="submit-button" type="submit">Add</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}