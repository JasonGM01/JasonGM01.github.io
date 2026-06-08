type skill = {
    "_id": number,
    "skill": string,
    "level": string,
    "type": string
}

export default async function Skills() {
    const res = await fetch("http://localhost:3000/api/skills", { cache: "no-store" });
    const skills = await res.json();
    const progSkills = skills.filter((skill: skill) => skill.type === "Programming");
    const frameSkills = skills.filter((skill: skill) => skill.type === "Framework");
    const DCSkills = skills.filter((skill: skill) => skill.type === "Database" || skill.type === "Cloud");
    const speakSkills = skills.filter((skill: skill) => skill.type === "Speaking");
    const autoSkills = skills.filter((skill: skill) => skill.type === "Automotive");

    return (
        <div>
            <div className="skills-page">
                <ul className="skills">
                    <div className="skill-card">
                        <strong>Programming</strong>
                        {progSkills.map((skill: skill) =>
                            <div key={skill._id} >
                                <p>{skill.skill}</p>
                                <p>Level: {skill.level}</p>
                                <br />
                            </div>
                        )}
                    </div>

                    <div className="skill-card">
                        <strong>Framework</strong>
                        {frameSkills.map((skill: skill) =>
                            <div key={skill._id}>
                                <p>{skill.skill}</p>
                                <p>Level: {skill.level}</p>
                                <br/>
                            </div>
                        )}
                    </div>

                      <div className="skill-card">
                        <strong>Database/Cloud</strong>
                        {DCSkills.map((skill: skill) => 
                            <div key={skill._id}>
                                <p>{skill.skill}</p>
                                <p>Level: {skill.level}</p>
                                <br/>    
                            </div>
                        )}
                      </div>

                    <div className="skill-card">
                        <strong>Speaking</strong>
                        {speakSkills.map((skill: skill) => 
                            <div key={skill._id}>
                                <p>{skill.skill}</p>
                                <p>Level: {skill.level}</p>
                                <br/>
                            </div>
                        )}
                    </div>

                    <div className="skill-card">
                        <strong>Automotive</strong>
                        {autoSkills.map((skill: skill) =>
                            <div key={skill._id}>
                                <p>{skill.skill}</p>
                                <p>Level: {skill.level}</p>
                                <br/>
                            </div>
                        )}
                    </div>
                </ul>
            </div>
        </div>
    )
}