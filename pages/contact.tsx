import { Header } from '../components/Header';
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .send(
        'service_ajgbzqr',          // 🔹 Replace this with your EmailJS Service ID (e.g. service_g6hy43p)
        'template_rb1gaff',        // ✅ Your Template ID
        formData,
        'tF6RXKQCoerDYVvr3'        // ✅ Your Public Key
      )
      .then(
        () => {
          setStatus('sent');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('FAILED...', error);
          setStatus('error');
        }
      );
  };

  return (
    <div>
      <Header />
      <main style={{ maxWidth: 600, margin: '4rem auto', padding: '1rem' }}>
        <h1 style={{ textAlign: 'center' }}>Contact Us</h1>
        <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Have a question or comment? Fill out the form below and we’ll respond soon.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
          <button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {status === 'sent' && (
          <p style={{ color: 'green', textAlign: 'center', marginTop: '1rem' }}>
            ✅ Message Sent Successfully! We’ll be in touch soon.
          </p>
        )}
        {status === 'error' && (
          <p style={{ color: 'red', textAlign: 'center', marginTop: '1rem' }}>
            ❌ Failed to send message. Please try again.
          </p>
        )}
      </main>
    </div>
  );
}
