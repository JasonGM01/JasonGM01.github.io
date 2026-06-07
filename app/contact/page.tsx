import Navbar from '../components/navbar/page';

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="contact-page">
                <strong>You can contact me here:</strong>

                <ul className="contacts">
                    <div className="contact-card">
                        <strong>Email:</strong>
                        <div>jasongonzalezmolina2701@gmail.com</div>
                    </div>

                    <div className="contact-card">
                        <strong>Phone:</strong>
                        <div>+1(310)650-0042</div>
                    </div>
                </ul>
            </div>
        </div>
    );
}
export default Contact;