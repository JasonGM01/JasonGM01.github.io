"use client"

import {useRouter} from 'next/navigation';

export default function Logout(){
    const router = useRouter();

    async function LogoutUser(){
        await fetch("/api/logout", {
            method: "POST",
        });

        router.push("/login");
        router.refresh();
    }

    return <button onClick={LogoutUser}>Logout</button>
}