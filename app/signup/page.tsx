"use client";

import { useState } from 'react';

export default function Signup(){
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e: React.FormEvent){
        e.preventDefault();
   

    const res = await fetch("/api/signup",
        {
            method: "POST",
            headers: 
            {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({userName, email, password}),
        });

        const data = await res.json();
        console.log(data);
    }

    return (
        <div className="signup-page">
            <form onSubmit={handleSubmit}>
                <input 
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Username"
                />

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

                <button type="submit">Create Account</button>
            </form>
        </div>
    );
}