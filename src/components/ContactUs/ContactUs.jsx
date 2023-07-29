import "./ContactUs.css";

const ContactUs = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact-title">
                    <h2 className="text">Contact Me</h2>
                </div>
                <form action="" className="contact-form">
                    <div>
                        <span>
                            <label htmlFor="f-name">First name:</label>
                            <input
                                type="text"
                                name="f-name"
                                id="f-name"
                                required
                            />
                        </span>
                        <span>
                            <label htmlFor="l-name">Last name:</label>
                            <input
                                type="text"
                                name="l-name"
                                id="l-name"
                                required
                            />
                        </span>
                    </div>
                    <span>
                        <label htmlFor="email">Your email:</label>
                        <input type="email" name="email" id="email" required />
                    </span>
                    <span>
                        <label htmlFor="message">Your message:</label>
                        <textarea
                            name="message"
                            id="message"
                            cols="30"
                            rows="10"
                            required
                        />
                    </span>
                    <button>Submit</button>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;
