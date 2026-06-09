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
                    <p><strong>Card Games: </strong></p>
                    {cardHobby.map((hobby: hobby) =>
                        <div key={hobby._id}>
                            <p>{hobby.hobby}</p>
                            <br/>
                        </div>
                    )}
                </div>

                
                <div className="hobby-card">
                    <p><strong>Television: </strong></p>
                    {watchHobby.map((hobby: hobby) =>
                        <div key={hobby._id}>
                            <p>{hobby.hobby}</p>
                            <br/>
                        </div>
                    )}
                </div>

                
                <div className="hobby-card">
                    <p><strong>Phone Games: </strong></p>
                    {phoneHobby.map((hobby: hobby) =>
                        <div key={hobby._id}>
                            <p>{hobby.hobby}</p>
                            <br/>
                        </div>
                    )}
                </div>

                
                <div className="hobby-card">
                    <p><strong>Extracurriculars: </strong></p>
                    {extraHobby.map((hobby: hobby) =>
                        <div key={hobby._id}>
                            <p>{hobby.hobby}</p>
                            <br/>
                        </div>
                    )}
                </div>
            </ul>
        </div>
    )
}