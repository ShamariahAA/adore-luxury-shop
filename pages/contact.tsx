import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`New Message from ${formData.name}`);
    const body = encodeURIComponent(
      `From: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    // Opens email app with info pre-filled
    window.location.href = `mailto:laurenallen070@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contact-page container" style={{ padding: '4rem 1rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Contact Us</h1>
      <p style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.1rem' }}>
        Have a question or comment? Fill out the form below to reach us directly.
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.2rem',
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            padding: '0.8rem',
            border: '1px solid #C69C6D',
            borderRadius: '5px',
          }}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            padding: '0.8rem',
            border: '1px solid #C69C6D',
            borderRadius: '5px',
          }}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          style={{
            padding: '0.8rem',
            border: '1px solid #C69C6D',
            borderRadius: '5px',
            resize: 'vertical',
          }}
        />

        <button
          type="submit"
          style={{
            backgroundColor: '#000',
            color: '#C69C6D',
            padding: '0.9rem',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

