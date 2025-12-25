import { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    emailjs.send(
      "service_4tghdij",  
      "template_z0k5pwa",     
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message
      },
      "_UFku6kGXWlQvvvTQ"     
    )
    .then(() => {
      setStatus("Message sent successfully! ✅");
      setForm({ name: "", email: "", message: "" });
    })
    .catch(() => {
      setStatus("Failed to send message ❌. Try again.");
    });
  }

  return (
    <section className="contact-hero">
      <div className="contact-container">

        {/* LEFT TEXT */}
        <div className="contact-text">
          <h1>Let’s Work Together</h1>
          <p>
            Have a project, job opportunity, or collaboration in mind?
            Send me a message and I’ll get back to you soon.
          </p>
        </div>

        {/* RIGHT FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>

          {status && <p className="status-msg">{status}</p>}
        </form>

      </div>
    </section>
  );
}

export default Contact;
