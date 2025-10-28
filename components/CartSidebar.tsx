import { useCart, CartItem } from '../context/CartContext';
import React from 'react';

export const CartSidebar = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <aside className="cart-sidebar">
      <h3>Your Cart</h3>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div>
          {cart.map((item: CartItem) => (
            <div key={item.name} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-image" />
              <div>
                <div>{item.name}</div>
                <div>
                  {item.quantity} x ${item.price}
                </div>
              </div>
              <button onClick={() => removeFromCart(item.name)}>Remove</button>
            </div>
          ))}
          <div className="cart-total">
            <strong>Total: ${total.toFixed(2)}</strong>
          </div>
          <button onClick={clearCart} className="btn-clear-cart">
            Clear Cart
          </button>
        </div>
      )}
    </aside>
  );
};









