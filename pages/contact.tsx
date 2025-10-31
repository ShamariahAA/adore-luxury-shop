import { useState } from "react";
import { Header } from "../components/Header";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        "service_ajgbzqr", // your EmailJS service ID
        "template_rb1gaff", // your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to_email: "adoreluxuryshop@gmail.com",
        },
        "tF6RXKQCoerDYVvr3" // your public key
      );

      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <div>
      <Header />
      <main style={{ maxWidth: 600, margin: "4rem auto", padding: "1rem" }}>
        <h1 style={{ textAlign: "center" }}>Contact Us</h1>
        <p style={{ textAlign: "center", marginBottom: "2rem" }}>
          Have a question or comment? Fill out the form below and we’ll respond soon.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </form>

        {status === "sent" && (
          <p style={{ color: "green", textAlign: "center", marginTop: "1rem" }}>
            ✅ Message sent successfully! We’ll be in touch soon.
          </p>
        )}
        {status === "error" && (
          <p style={{ color: "red", textAlign: "center", marginTop: "1rem" }}>
            ❌ Failed to send message. Please try again.
          </p>
        )}
      </main>
    </div>
  );
}

