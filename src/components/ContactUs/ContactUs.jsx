import { useEffect, useRef } from "react";
import "./ContactUs.css";
import { useForm } from "@formspree/react";

const ContactUs = () => {
    const [state, handleSubmit] = useForm("xbjvddzy");
    const formRef = useRef();

    useEffect(() => {
        if (state.succeeded) formRef.current.reset();
    }, [state.succeeded]);

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact-title">
                    <h2 className="text">Contact Me</h2>
                </div>
                {state.result && state.errors && state.errors.length >= 1 && (
                    <p className="error">{"Oops! something went wrong..."}</p>
                )}
                {state.result && state.succeeded && (
                    <p className="successful">{"I've recieved your email."}</p>
                )}

                <form
                    onSubmit={handleSubmit}
                    ref={formRef}
                    className="contact-form"
                >
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
                    <button type="submit">
                        {state.submitting ? "Submitting..." : "Submit"}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;
