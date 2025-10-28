// components/CartSidebar.tsx
import { useCart } from '../context/CartContext';
import { useState } from 'react';

export const CartSidebar = () => {
  const { cartItems, removeFromCart, clearCart, isCartOpen, toggleCart } = useCart();

  const handleCheckout = async () => {
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cartItems }),
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe checkout
      } else {
        alert('Checkout failed.');
      }
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  return (
    <aside
      className="cart-sidebar"
      style={{
        position: 'fixed',
        top: 0,
        right: isCartOpen ? 0 : '-350px', // Slide in/out
        width: '300px',
        height: '100%',
        backgroundColor: '#fff',
        boxShadow: '0 0 15px rgba(0,0,0,0.3)',
        padding: '1rem',
        transition: 'right 0.3s ease-in-out',
        zIndex: 1000,
        overflowY: 'auto',
      }}
    >
      <button
        onClick={() => toggleCart(false)}
        style={{
          background: 'none',
          border: 'none',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          marginBottom: '1rem',
        }}
      >
        ✕ Close
      </button>

      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cartItems.map((item, index) => (
              <li key={index} style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <img src={item.image} alt={item.name} width={60} style={{ borderRadius: '4px' }} />
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontWeight: 600 }}>{item.name}</p>
                  <p style={{ margin: '0.2rem 0' }}>${item.price}</p>
                  <p style={{ margin: '0.2rem 0' }}>Qty: {item.quantity}</p>
                  <button onClick={() => removeFromCart(item.name)} style={{ fontSize: '0.8rem' }}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <button
            onClick={handleCheckout}
            style={{
              width: '100%',
              backgroundColor: '#000',
              color: '#C69C6D',
              border: 'none',
              padding: '0.7rem 1rem',
              marginBottom: '0.5rem',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Proceed to Checkout
          </button>

          <button
            onClick={clearCart}
            style={{
              width: '100%',
              backgroundColor: '#ddd',
              color: '#000',
              border: 'none',
              padding: '0.7rem 1rem',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Clear Cart
          </button>
        </>
      )}
    </aside>
  );
};
