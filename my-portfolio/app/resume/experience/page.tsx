"use client";

import React from 'react';
import {useRouter} from 'next/navigation';

export default function Experiences(){
    const router = useRouter();
    return (
        <div className="p-1">
            <h5 className="mb-2 text-m font-bold tracking-tight">Experiences</h5>
            <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />
            <div className="mb-3 font-normal">
                <strong>Seiwa Market</strong>
                <p className="text-sm font-light">Drinks Buyer / IT Support</p>
                <p className="text-sm font-light italic">March 2016 - Present</p>
                <p className="text-sm font-light font">
                    At Seiwa Market, I take the dual role of being a Drinks Buyer and IT Support.
                    As a Drink Buyer, I controlled the flow of products and set prices.
                    As IT Support, I calibrated, maintained, and troubleshot card reader machines and computers.
                </p>
                <button type="button" onClick={() => router.push('/')}>Home</button><br />
            </div>
        </div>
    );
}