"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
    const router = useRouter();
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const res = await fetch("/api/login",
            {
                method: "POST",
                headers:
                {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

        const data = await res.json();

        if (!res.ok) {
            setMessage(data.error || "Login failed");
        }

        setMessage("Login successful");
        router.push("/");
        router.refresh();
        console.log("Logged in user: ", data.user);
    }

    return (
        <div className="login-page">
            <div className="logins">
                <form onSubmit={handleSubmit}>
                    <input className="login-card"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email"
                    /><br />

                    <input className="login-card"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="password"
                        type="password"
                    /><br />
                    <button className="submit-button" type="submit">Login</button>
                </form>
            </div>
            {message && <p>{message}</p>}
            <a href="/signup">Don't have an account?</a>
        </div>
    );
}