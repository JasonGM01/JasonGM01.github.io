type contact ={
    "_id": number,
    "contact": string,
    "type": string
}

export default async function Contact(){
    const res = await fetch("http://localhost:3000/api/contacts", {cache: "no-store"});
    const contacts = await res.json();
    return (
            <div className="contact-page">
                <strong>You can contact me here:</strong>
                <ul className="contacts">
                    {contacts.map((contact: contact) => 
                        <div key={contact._id} className="contact-card">
                            <p><strong>{contact.type}</strong></p>
                            <p>{contact.type === "Linkedin" 
                            ? (<a href={contact.contact}>{contact.contact}</a>)
                            : <span>{contact.contact}</span>}</p>
                        </div>
                    )}
                </ul>
            </div>
    );
}