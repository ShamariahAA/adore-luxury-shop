// components/CartSidebar.tsx
import { useCart } from '../context/CartContext';

export const CartSidebar = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const handleCheckout = async () => {
    try {
      const response = await fetch('/api/checkout', { // ✅ FIXED route
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cartItems }), // ✅ match backend key
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url; // ✅ Redirect to Stripe Checkout
      } else {
        alert('Checkout failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during checkout:', error);
      alert('An error occurred during checkout.');
    }
  };

  return (
    <aside className="cart-sidebar">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt={item.name} width={60} />
                <div>
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>Qty: {item.quantity}</p>
                  <button onClick={() => removeFromCart(item.name)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>

          <button onClick={handleCheckout}>Proceed to Checkout</button>
          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </aside>
  );
};
