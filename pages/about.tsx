import { Header } from '../components/Header';

export default function About() {
  return (
    <div>
      <Header />

      <div className="about-page container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.2rem', marginBottom: '1.2rem', color: '#000' }}>About Adoře Luxury</h1>
        <p style={{ fontSize: '1.05rem', maxWidth: 800, margin: '0 auto', lineHeight: 1.8 }}>
          Welcome to <strong>Adoře Luxury</strong> — where elegance meets comfort.
          Our handcrafted luxury bonnets are designed to make you feel as beautiful as you truly are.
          Every piece is made with care, using soft, premium materials that protect your hair and elevate your nighttime routine.
        </p>

        <div style={{ marginTop: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.6rem', color: '#C69C6D' }}>Our Mission</h2>
          <p style={{ fontSize: '1rem', maxWidth: 700, margin: '0 auto', lineHeight: 1.8 }}>
            We believe luxury should feel personal. Adoře Luxury was created to celebrate self-care and confidence through
            comfort and design. Our mission is to make every woman feel adored — inside and out.
          </p>
        </div>

        <div style={{ marginTop: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.6rem', color: '#C69C6D' }}>Our Story</h2>
          <p style={{ fontSize: '1rem', maxWidth: 700, margin: '0 auto', lineHeight: 1.8 }}>
            What started as a passion for beauty and care has grown into a brand loved by many. Each bonnet reflects the heart
            behind Adoře — quality, elegance, and the belief that self-love begins with how we care for ourselves.
          </p>
        </div>
      </div>
    </div>
  );
}




