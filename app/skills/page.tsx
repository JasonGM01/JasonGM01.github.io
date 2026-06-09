import { getSession } from '@/lib/session';
import { SkillAdmin } from '../admin/page';
import { getDB } from '@/lib/mongodb';

export default async function Skills() {
    const session = await getSession();
    const db = await getDB();

    const progSkills = await db.collection("skills").find({ type: "Programming" }).toArray();

    const frameSkills = await db.collection("skills").find({ type: "Framework" }).toArray();

    const DCSkills = await db
        .collection("skills")
        .find({
            type: {
                $in: [
                    "Cloud",
                    "Database"
                ]
            }
        }).toArray();

    const speakSkills = await db.collection("skills").find({ type: "Speaking" }).toArray();

    const autoSkills = await db.collection("skills").find({ type: "Automotive" }).toArray();

    return (
        <div>
            <div className="skills-page">
                <strong>Skills:</strong>
                <ul className="skills">
                    <div className="skill-card">
                        <strong>Programming</strong>
                        {progSkills.map((skill) =>
                            <div key={skill._id.toString()}>
                                <p>{skill.skill}</p>
                                <p>Level: {skill.level}</p>
                                <br />
                            </div>
                        )}
                    </div>

                    <div className="skill-card">
                        <strong>Framework</strong>
                        {frameSkills.map((skill) =>
                            <div key={skill._id.toString()}>
                                <p>{skill.skill}</p>
                                <p>Level: {skill.level}</p>
                                <br />
                            </div>
                        )}
                    </div>

                    <div className="skill-card">
                        <strong>Database/Cloud</strong>
                        {DCSkills.map((skill) =>
                            <div key={skill._id.toString()}>
                                <p>{skill.skill}</p>
                                <p>Level: {skill.level}</p>
                                <br />
                            </div>
                        )}
                    </div>

                    <div className="skill-card">
                        <strong>Speaking</strong>
                        {speakSkills.map((skill) =>
                            <div key={skill._id.toString()}>
                                <p>{skill.skill}</p>
                                <p>Level: {skill.level}</p>
                                <br />
                            </div>
                        )}
                    </div>

                    <div className="skill-card">
                        <strong>Automotive</strong>
                        {autoSkills.map((skill) =>
                            <div key={skill._id.toString()}>
                                <p>{skill.skill}</p>
                                <p>Level: {skill.level}</p>
                                <br />
                            </div>
                        )}
                    </div>
                </ul>

                {session?.role === "Admin" && (
                    <div>
                        <p><strong>Create New Skill:</strong></p>
                        <SkillAdmin />
                    </div>
                )}
            </div>
        </div>
    )
}