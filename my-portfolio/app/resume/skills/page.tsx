"use client";

import React from 'react';
import {useRouter} from 'next/navigation';

export default function Skills(){
    const router = useRouter();
    return(
        <div className="p-1">
            <h5 className="mb-2 text-m font-bold tracking-tight">Skills</h5>
                <button type="button" onClick={() => router.push('/')}>Home</button><br />
        </div>
    );
}