import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaUser, FaEnvelope, FaPaperPlane, FaComment } from "react-icons/fa";
import "./Contact.css";

function Contact() {
    const form = useRef(null);
    const [modalMessage, setModalMessage] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm("service_uuxh68a", "template_ntt4bc9", form.current, "MlfysXtJyRnL98aRE")
            .then(() => {
                setModalMessage("✅ Email sent successfully!");
                setIsModalOpen(true);
                form.current.reset();
            })
            .catch(() => {
                setModalMessage("❌ Failed to send email. Please try again.");
                setIsModalOpen(true);
            });
    };

    return (
        <div className="contact-container" id="contact">
            <h1 className="contact-title">Contact Me</h1>
            <p className="contact-subtitle">I'd be happy to hear from you!</p>
            
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <div className="input-group">
                    <FaUser className="icon" />
                    <input type="text" name="user_name" placeholder="Your Name" required />
                </div>

                <div className="input-group">
                    <FaEnvelope className="icon" />
                    <input type="email" name="user_email" placeholder="Your Email" required />
                </div>

                <div className="input-group">
                    <FaComment className="icon" />
                    <textarea name="message" placeholder="Your Message" required></textarea>
                </div>

                <button type="submit" className="submit-button">
                    <FaPaperPlane className="send-icon" /> Send Message
                </button>
            </form>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <p>{modalMessage}</p>
                        <button className="close-button" onClick={() => setIsModalOpen(false)}>OK</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Contact;
