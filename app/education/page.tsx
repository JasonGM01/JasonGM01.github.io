type education = {
"_id": number,
"school": string,
"accro": string,
"courses": string[],
}

export default async function Education() {
    const res = await fetch("http://localhost:3000/api/education", { cache: "no-store" })
    const schools = await res.json();
    return (
            <div className="education-page">
                <strong>Education:</strong>
                <ul className="schools">
                    {schools.map((education: education) =>
                        <div key={education._id} className="school-card">
                            <p><strong>{education.school}</strong></p>
                            <p>A.K.A {education.accro}</p>
                            <p><strong>Courses</strong></p>
                            <div>{education.courses.map((course: string) =>
                                <p key={course}>{course}</p>
                            )}
                            </div>
                        </div>
                    )}
                </ul>
            </div>
    )
}