import React from "react";
import {useRouter} from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <div className="h-screen p-4 lg:p-8 mt-16">
      <button type="button" onClick={() => router.push('@/app/components/resume/education')}>Education</button>
      <button type="button" onClick={() => router.push('@/app/cpmponents/resume/experience')}>Experience</button>
      <button type="button" onClick={() => router.push('@/app/components/resume/skills')}>Skills</button>
      <button type="button" onClick={() => router.push('@/app/components/resume/honors')}>Honors</button>
    </div>
  );
}