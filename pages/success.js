import Link from 'next/link';

export default function Success() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#FAF7F2',
        fontFamily: 'serif',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', color: '#000', marginBottom: '1rem' }}>
        Thank you for your order! 💛
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '2rem' }}>
        Your payment was successful. You will receive a confirmation email shortly.
      </p>
      <Link href="/">
        <button
          style={{
            padding: '0.8rem 1.5rem',
            backgroundColor: '#C69C6D',
            color: '#000',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
        >
          Back to Shop
        </button>
      </Link>
    </div>
  );
}
