import { useCart } from '../context/CartContext';

export const CartSidebar = () => {
  const { cart, removeFromCart, total } = useCart();

  if (cart.length === 0) return <div className="cart-sidebar">Your cart is empty</div>;

  const handleCheckout = async () => {
    // Call your API route to create a checkout session
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cart }),
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url; // redirect to Stripe checkout
    }
  };

  return (
    <div className="cart-sidebar">
      <h3>Your Cart</h3>
      {cart.map((item) => (
        <div key={item.name} className="cart-item">
          <img src={item.image} alt={item.name} style={{ width: '50px', borderRadius: '5px' }} />
          <div>
            <p>{item.name}</p>
            <p>{item.quantity} × ${item.price}</p>
          </div>
          <button onClick={() => removeFromCart(item.name)}>Remove</button>
        </div>
      ))}

      <div className="cart-total">
        <strong>Total: ${total.toFixed(2)}</strong>
      </div>

      <button className="btn-checkout" onClick={handleCheckout}>
        Proceed to Checkout
      </button>
    </div>
  );
};
