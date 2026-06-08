"use client";

import { useState } from 'react';

export default function Login(){
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e: React.FormEvent){
        e.preventDefault();
   

    const res = await fetch("/api/login",
        {
            method: "POST",
            headers: 
            {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password}),
        });

        const data = await res.json();

        if(!res.ok){
            setMessage(data.error || "Login failed");
        }

        setMessage("Login successful");
        console.log("Logged in user: ", data.user);
    }

    return (
        <div className="login-page">
            <form onSubmit={handleSubmit}>
                <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                />

                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                    type="password"
                />

                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}