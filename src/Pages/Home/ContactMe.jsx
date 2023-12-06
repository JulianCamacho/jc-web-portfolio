import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

export default function ContactMe() {

    const formInitialData = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    };

    const [formData, setFormData] = useState(formInitialData);
    const [buttonText, setButtonText] = useState("Submit");
    const [status, setStatus] = useState({});
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
        setButtonText("Sending");
        emailjs.sendForm('service_hfue7mk', 'template_979xe15', form.current, 'FU0-pLV2D1dQZQgKk')
            .then((result) => {
                setButtonText("Submit");
                setStatus({ success: true, message: "Message sent succesfully" });
                setTimeout(() => {
                    setStatus({});
                }, 3000);
                setFormData(formInitialData);
            }, (error) => {
                setButtonText("Submit");
                setStatus({ success: false, message: "Something went wrong, please try again later" });
            });
    };
    
    const onFormUpdate = (category, value) => {
        setFormData({
            ...formData,
            [category]: value,
        });
    };

    return (
        <section id="Contact" className="contact--section">
            <div>
                <p className="sub--title">Get In Touch</p>
                <h2>Contact Me</h2>
                <p className="text-lg">Fill the form or contact me at camachohjosejulian@gmail.com</p>
            </div>
            <form className="contact--form--contaier" ref={form} onSubmit={sendEmail}>
                <div className="container">
                    <label htmlFor="first-name" className="contact--label">
                        <span className="text-md">First Name</span>
                        <input type="text" className="contact--input text-md"
                            name="firstName" id="first-name" required
                            value={formData.firstName}
                            onChange={(e) => onFormUpdate("firstName", e.target.value)}>
                        </input>
                    </label>
                    <label htmlFor="last-name" className="contact--label">
                        <span className="text-md">Last Name</span>
                        <input type="text" className="contact--input text-md"
                            name="lastName" id="last-name" required
                            value={formData.lastName}
                            onChange={(e) => onFormUpdate("lastName", e.target.value)}>
                        </input>
                    </label>
                    <label htmlFor="email" className="contact--label">
                        <span className="text-md">Email</span>
                        <input type="text" className="contact--input text-md"
                            name="email" id="email" required
                            value={formData.email}
                            onChange={(e) => onFormUpdate("email", e.target.value)}>
                        </input>
                    </label>
                    <label htmlFor="phone-number" className="contact--label">
                        <span className="text-md">Phone Number</span>
                        <input type="text" className="contact--input text-md"
                            name="phone" id="phone-number"
                            value={formData.phone}
                            onChange={(e) => onFormUpdate("phone", e.target.value)}>
                        </input>
                    </label>
                    <label htmlFor="message" className="contact--label">
                        <span className="text-md">Message</span>
                        <textarea className="contact--input text-md" name="message"
                            id="message" rows="8" placeholder="Please type your message"
                            value={formData.message}
                            onChange={(e) => onFormUpdate("message", e.target.value)} />
                    </label>
                    <div>
                        <button className="btn btn-primary contact--form--btn">{buttonText}</button>
                        {status.message && (
                            <div className="row">
                                <br/>
                                <br/>
                                <p className={status.success === false ? "danger" : "success"}>
                                    {status.message}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </form>
        </section>
    )
}