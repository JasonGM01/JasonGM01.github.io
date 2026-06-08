type hobby = {
    "_id": number,
    "hobby": string,
    "type": string
}

export default async function Hobbies() {
    const res = await fetch("http://localhost:3000/api/hobbies", { cache: "no-store" });

    const hobbies = await res.json();
    const cardHobby = hobbies.filter((hobby: hobby) => hobby.type === "Cards");
    const watchHobby = hobbies.filter((hobby: hobby) => hobby.type === "Watch");
    const extraHobby = hobbies.filter((hobby: hobby) => hobby.type === "Extra");
    const phoneHobby = hobbies.filter((hobby: hobby) => hobby.type === "Phone");
    return (
        <div className="hobbies-page">
            <p>Here are some hobbies: </p>
            <ul className="hobbies">
                <div className="hobby-card">
                    {cardHobby.map((hobby: hobby) =>
                        <div key={hobby._id}>
                            <p><strong>{hobby.hobby}</strong></p>
                            <p>{hobby.type} Games</p>
                            <br/>
                        </div>
                    )}
                </div>

                <div className="hobby-card">
                    {watchHobby.map((hobby: hobby) =>
                        <div key={hobby._id}>
                            <p><strong>{hobby.hobby}</strong></p>
                            <p>{hobby.type} T.V.</p>
                            <br/>
                        </div>
                    )}
                </div>

                <div className="hobby-card">
                    {phoneHobby.map((hobby: hobby) =>
                        <div key={hobby._id}>
                            <p><strong>{hobby.hobby}</strong></p>
                            <p>{hobby.type} Games</p>
                            <br/>
                        </div>
                    )}
                </div>

                <div className="hobby-card">
                    {extraHobby.map((hobby: hobby) =>
                        <div key={hobby._id}>
                            <p><strong>{hobby.hobby}</strong></p>
                            <p>{hobby.type}curricular</p>
                            <br/>
                        </div>
                    )}
                </div>
            </ul>
        </div>
    )
}