import { useState } from "react";

export default function ContactMe(){

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

    const onFormUpdate = (category, value) => {
        setFormData({
            ...formData,
            [category]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending");
        let response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(formData)
        });
        let result = await response.json();
        setButtonText("Submit");
        setFormData(formInitialData);
        if (result.code === 200){
            setStatus({success: true, message: "Message sent succesfully"});
            setTimeout(() => {
                setStatus({});
            }, 3000);
        } else {
            setStatus({success: false, message: "Something went wrong, please try again later"});
        }
    }

    return (
        <section id="Contact" className="contact--section">
            <div>
                <p className="sub--title">Get In Touch</p>
                <h2>Contact Me</h2>
                <p className="text-lg">texto texto textotexto</p>
            </div>
            <form className="contact--form--contaier" onSubmit={handleSubmit}>
                <div className="container">
                    <label htmlFor="first-name" className="contact--label">
                        <span className="text-md">First Name</span>
                        <input type="text" className="contact--input text-md" 
                               name="first-name" id="first-name" required
                               value={formData.firstName} 
                               onChange={(e) => onFormUpdate("firstName", e.target.value)}>
                        </input>
                    </label>
                    <label htmlFor="last-name" className="contact--label">
                        <span className="text-md">Last Name</span>
                        <input type="text" className="contact--input text-md" 
                               name="last-name" id="last-name" required
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
                               name="phone-number" id="phone-number"
                               value={formData.phone} 
                               onChange={(e) => onFormUpdate("phone", e.target.value)}>
                        </input>
                    </label>
                    <label htmlFor="message" className="contact--label">
                        <span className="text-md">Message</span>
                        <textarea className="contact--input text-md" 
                            id="message" rows="8" placeholder="Please type your message" 
                            value={formData.message} 
                            onChange={(e) => onFormUpdate("message", e.target.value)}/>
                    </label>
                    <div>
                        <button className="btn btn-primary contact--form--btn">{buttonText}</button>
                        {status.message && (
                            <div className="row">
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