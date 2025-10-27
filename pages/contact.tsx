import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "serif", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}>Contact Us</h1>
      {submitted ? (
        <p style={{ fontSize: "1.1rem" }}>Thank you! We will get back to you shortly.</p>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <label>
            Name:
            <input type="text" name="name" required style={{ width: "100%", padding: "0.5rem", marginTop: "0.3rem" }} />
          </label>
          <label>
            Email:
            <input type="email" name="email" required style={{ width: "100%", padding: "0.5rem", marginTop: "0.3rem" }} />
          </label>
          <label>
            Message:
            <textarea name="message" required rows={5} style={{ width: "100%", padding: "0.5rem", marginTop: "0.3rem" }} />
          </label>
          <button
            type="submit"
            style={{
              padding: "0.7rem",
              backgroundColor: "#C69C6D",
              color: "#000",
              border: "none",
              borderRadius: "6px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
