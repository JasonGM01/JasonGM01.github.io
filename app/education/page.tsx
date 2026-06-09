import { getDB } from "@/lib/mongodb";
import { getSession } from "@/lib/session";
import { EducationAdmin } from "../admin/page";

export default async function Education() {
    const session = await getSession();
    const db = await getDB();
    const schools = await db.collection("education").find({}).toArray();
    return (
        <div className="education-page">
            <strong>Education:</strong>
            <ul className="schools">
                {schools.map((education) =>
                    <div key={education._id.toString()} className="school-card">
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
            {session?.role === "Admin" && (
                <div>
                    <p><strong>Create New Education:</strong></p>
                    <EducationAdmin />
                </div>
            )}
        </div>
    );
}