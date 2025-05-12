"use client";
import React from "react";
import {useRouter} from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <div className="h-screen p-1 lg:p-8 mt-16">
      <h1 className="mb-2 text-m font-bold tracking-tight">Home</h1>
      <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />
      <button type="button" onClick={() => router.push('/resume/education')}>Education</button><br />
      <button type="button" onClick={() => router.push('/resume/experience')}>Experience</button><br />
      <button type="button" onClick={() => router.push('/resume/skills')}>Skills</button><br />
      <button type="button" onClick={() => router.push('/resume/honors')}>Honors</button><br />
    </div>
  );
}