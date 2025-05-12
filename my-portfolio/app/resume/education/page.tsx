"use client";

import React from 'react';
import {useRouter} from "next/navigation";

export default function Education(){
    const router = useRouter();
    return (
        <div className="p-1">
            <h5 className="mb-2 text-m font-bold tracking-tight">Education</h5>
            <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />
            <div className="mb-3 font-normal">
                <strong>California State University, Dominguez Hills</strong>
                <p className="text-sm font-light">Bachelor of Science, Computer Science</p>
                <p className="text-sm font-light italic">January 2025 - May 2026</p>
                <p className="text-sm font-light font">
                    At California State University, Dominguez Hills, I am pursuing a Bachelor of Science degree...
                </p>
                <button type="button" onClick={() => router.push('/')}>Home</button><br />
            </div>
        </div>
    );
}