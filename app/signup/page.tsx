"use client";

import { useState } from 'react';
import {useRouter} from 'next/navigation';

export default function Signup() {
    const router = useRouter();
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();


        const res = await fetch("/api/signup",
            {
                method: "POST",
                headers:
                {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userName, email, password }),
            });

        const data = await res.json();
        if (!res.ok) {
            setMessage(data.error || "Signup failed");
            return;
        }

        setMessage("Signup successful");
        router.push("/");
        router.refresh();
        console.log("Signed in as user: ", data.user);
    }

    return (
        <div className="signup-page">
            <div className="signups">
                <form onSubmit={handleSubmit}>
                    <input className="signup-card"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Username"
                    /><br />

                    <input className="signup-card"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email"
                    /><br />

                    <input className="signup-card"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="password"
                        type="password"
                    /><br />

                    <button className="submit-button" type="submit">Create Account</button>
                </form>
            </div>
            {message && <p>{message}</p>}
            <a href="/login">Already have an account?</a>
        </div>
    );
}