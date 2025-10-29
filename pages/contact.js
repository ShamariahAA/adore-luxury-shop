import { Header } from '../components/Header';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('error');
    }
  };

  return (
    <div>
      <Header />
      <main style={{ maxWidth: 600, margin: '4rem auto', padding: '1rem' }}>
        <h1 style={{ textAlign: 'center' }}>Contact Us</h1>
        <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Have a question or comment? Fill out the form below.
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

        {status === 'sent' && <p style={{ color: 'green', textAlign: 'center' }}>✅ Message Sent Successfully!</p>}
        {status === 'error' && <p style={{ color: 'red', textAlign: 'center' }}>❌ Failed to send message.</p>}
      </main>
    </div>
  );
}
