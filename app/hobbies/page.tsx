import { getSession } from "../../lib/session";
import { getDB } from "../../lib/mongodb";
import { HobbyAdmin } from "../admin/page";

export default async function Hobbies() {
    const session = await getSession();

    const db = await getDB();
    const cardHobby = await db.collection("hobbies").find({ type: "Cards" }).toArray();
    const watchHobby = await db.collection("hobbies").find({ type: "Watch" }).toArray();
    const extraHobby = await db.collection("hobbies").find({ type: "Extra" }).toArray();
    const phoneHobby = await db.collection("hobbies").find({ type: "Phone" }).toArray();
    return (
        <div className="hobbies-page">
            <p>Here are some hobbies: </p>
            <ul className="hobbies">
                <div className="hobby-card">
                    <p><strong>Card Games: </strong></p>
                    {cardHobby.map((hobby) =>
                        <div key={hobby._id.toString()}>
                            <p>{hobby.hobby}</p>
                            <br />
                        </div>
                    )}
                </div>


                <div className="hobby-card">
                    <p><strong>Television: </strong></p>
                    {watchHobby.map((hobby) =>
                        <div key={hobby._id.toString()}>
                            <p>{hobby.hobby}</p>
                            <br />
                        </div>
                    )}
                </div>


                <div className="hobby-card">
                    <p><strong>Phone Games: </strong></p>
                    {phoneHobby.map((hobby) =>
                        <div key={hobby._id.toString()}>
                            <p>{hobby.hobby}</p>
                            <br />
                        </div>
                    )}
                </div>


                <div className="hobby-card">
                    <p><strong>Extracurriculars: </strong></p>
                    {extraHobby.map((hobby) =>
                        <div key={hobby._id.toString()}>
                            <p>{hobby.hobby}</p>
                            <br />
                        </div>
                    )}
                </div>
            </ul>
            {session?.role === "Admin" && (
                <div>
                    <p><strong>Create New Project</strong></p>
                    <HobbyAdmin />
                </div>
            )}
        </div>
    )
}