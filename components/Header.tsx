import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { CartSidebar } from './CartSidebar';

export const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { cartItems } = useCart();

  // Count total quantity in cart
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <header
        style={{
          backgroundColor: '#000',
          color: '#C69C6D',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 2rem',
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}
      >
        <div className="logo" style={{ fontWeight: 900, fontSize: '1.8rem' }}>
          Adoře Luxury
        </div>

        <nav>
  <a href="/">Home</a>
  <a href="/shop">Shop</a>
  <a href="/about">About</a>
  <a href="/contact">Contact</a>
</nav>

      </header>

      {/* Floating Cart Button */}
      <button
        onClick={() => setCartOpen(!cartOpen)}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          backgroundColor: '#000',
          color: '#C69C6D',
          border: '2px solid #C69C6D',
          borderRadius: '50%',
          width: '55px',
          height: '55px',
          fontSize: '1.4rem',
          cursor: 'pointer',
          zIndex: 150,
        }}
        aria-label="Open cart"
      >
        🛒
        {totalItems > 0 && (
          <span
            style={{
              position: 'absolute',
              top: '4px',
              right: '4px',
              backgroundColor: '#C69C6D',
              color: '#000',
              borderRadius: '50%',
              padding: '2px 6px',
              fontSize: '0.8rem',
              fontWeight: 'bold',
            }}
          >
            {totalItems}
          </span>
        )}
      </button>

      {cartOpen && <CartSidebar />}
    </>
  );
};



