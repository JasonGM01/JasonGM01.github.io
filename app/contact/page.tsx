import { redirect } from 'next/navigation';
import { getSession } from '@/lib/session';
import { ContactAdmin } from '../admin/page';
import { getDB } from '@/lib/mongodb';

export default async function Contact() {
    const session = await getSession();


    if (!session) {
        redirect("/login");
    }

    const db = await getDB();
    const contacts = await db.collection("contacts").find({}).toArray();
    return (
        <div className="contact-page">
            <strong>You can contact me here:</strong>
            <ul className="contacts">
                {contacts.map((contact) =>
                    <div key={contact._id.toString()} className="contact-card">
                        <p><strong>{contact.type}</strong></p>
                        <p>{contact.type === "Linkedin"
                            ? (<a href={contact.contact}>{contact.contact}</a>)
                            : <span>{contact.contact}</span>}</p>
                    </div>
                )}
            </ul>

            {session?.role === "Admin" && (
                <div>
                    <p><strong>Create New Contact Method: </strong></p>
                    <ContactAdmin />
                </div>
            )}
        </div>
    );
}

