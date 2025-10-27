import Link from 'next/link';

export default function Cancel() {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '4rem',
        fontFamily: 'serif',
        color: '#333',
      }}
    >
      <h1 style={{ color: '#C69C6D', fontSize: '2rem', marginBottom: '1rem' }}>
        Payment Canceled ❌
      </h1>
      <p style={{ marginBottom: '2rem' }}>
        Your payment was canceled. Don’t worry — you can try again anytime.
      </p>

      <Link
        href="/"
        style={{
          backgroundColor: '#C69C6D',
          color: '#000',
          padding: '0.8rem 1.6rem',
          borderRadius: '6px',
          textDecoration: 'none',
          fontWeight: 'bold',
          transition: 'all 0.3s ease',
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#000')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#C69C6D')}
      >
        Back to Shop 🛍️
      </Link>
    </div>
  );
}


