"use client";

import React from 'react';
import {useRouter} from 'next/navigation';

export default function Honors(){
    const router = useRouter();
    return(
        <div className="p-1">
            <h5 className="mb-2 text-m font-bold tracking-tight">Honors</h5>
            <button type="button" onClick={() => router.push('/')}>Home</button><br />
        </div>
    );
}