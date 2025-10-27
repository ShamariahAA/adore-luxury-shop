import { useCart } from '../context/CartContext';
import { useState } from 'react';

export const CartSidebar = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    if (cart.length === 0) return;
    setLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cart }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url; // redirect to Stripe Checkout
      } else {
        alert('Checkout failed.');
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Cart Button */}
      <button
        onClick={() => setIsOpen(true)}
        style={{
          position: 'fixed',
          top: 20,
          right: 20,
          zIndex: 300,
          backgroundColor: '#000',
          color: '#C69C6D',
          border: '2px solid #C69C6D',
          padding: '0.6rem 1.2rem',
          borderRadius: '30px',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = '#C69C6D';
          e.currentTarget.style.color = '#000';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = '#000';
          e.currentTarget.style.color = '#C69C6D';
        }}
      >
        Cart 🛒 ({cart.length})
      </button>

      {/* Sidebar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: isOpen ? 0 : '-400px',
          width: '350px',
          height: '100%',
          backgroundColor: '#FAF7F2', // ivory
          borderLeft: '3px solid #C69C6D',
          boxShadow: '-6px 0 20px rgba(0,0,0,0.15)',
          transition: 'right 0.4s ease',
          padding: '1.5rem',
          zIndex: 200,
          overflowY: 'auto',
          fontFamily: 'serif',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid #e4d9cc',
            paddingBottom: '0.5rem',
            marginBottom: '1rem',
          }}
        >
          <h3 style={{ fontWeight: 700, fontSize: '1.3rem' }}>Your Cart</h3>
          <button
            onClick={() => setIsOpen(false)}
            style={{
              background: 'none',
              border: 'none',
              color: '#C69C6D',
              fontSize: '1.6rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'color 0.3s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = '#000')}
            onMouseOut={(e) => (e.currentTarget.style.color = '#C69C6D')}
          >
            ✕
          </button>
        </div>

        {/* Cart Items */}
        {cart.length === 0 ? (
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <p style={{ color: '#333', marginBottom: '1rem' }}>Your cart is empty.</p>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                width: '100%',
                padding: '0.8rem',
                backgroundColor: '#C69C6D',
                color: '#000',
                border: 'none',
                borderRadius: '6px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#000')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#C69C6D')}
            >
              Close Cart
            </button>
          </div>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.name}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem',
                  paddingBottom: '0.5rem',
                  borderBottom: '1px dashed #d7c9b6',
                }}
              >
                <div>
                  <strong>{item.name}</strong>
                  <p>
                    {item.quantity} × ${item.price}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.name)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#C69C6D',
                    cursor: 'pointer',
                    fontWeight: 600,
                    transition: 'color 0.3s ease',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = '#000')}
                  onMouseOut={(e) => (e.currentTarget.style.color = '#C69C6D')}
                >
                  Remove
                </button>
              </div>
            ))}

            <p style={{ fontWeight: 700, borderTop: '1px solid #e4d9cc', paddingTop: '1rem' }}>
              Total: ${total.toFixed(2)}
            </p>

            {/* Stripe Checkout Button */}
            <button
              onClick={handleCheckout}
              disabled={loading}
              style={{
                marginTop: '0.8rem',
                width: '100%',
                padding: '0.8rem',
                backgroundColor: '#C69C6D',
                color: '#000',
                border: 'none',
                borderRadius: '6px',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              {loading ? 'Processing...' : 'Proceed to Checkout 💳'}
            </button>

            {/* Clear Cart */}
            <button
              onClick={clearCart}
              style={{
                marginTop: '0.5rem',
                width: '100%',
                padding: '0.7rem',
                backgroundColor: '#000',
                color: '#C69C6D',
                border: 'none',
                borderRadius: '4px',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              Clear Cart
            </button>

            {/* Close Cart */}
            <button
              onClick={() => setIsOpen(false)}
              style={{
                marginTop: '0.5rem',
                width: '100%',
                padding: '0.7rem',
                backgroundColor: '#ddd',
                color: '#000',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Close
            </button>
          </>
        )}
      </div>
    </>
  );
};



