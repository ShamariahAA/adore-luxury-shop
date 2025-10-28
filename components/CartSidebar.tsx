// components/CartSidebar.tsx
import { useCart } from "../context/CartContext";
import { useState } from "react";

export const CartSidebar = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false); // control sidebar visibility

  const handleCheckout = async () => {
    try {
      const response = await fetch("/api/checkout", { // matches your checkout.js
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cartItems }),
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe checkout
      } else {
        alert("Checkout failed.");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <>
      {/* Button to toggle sidebar */}
      <button
        className="btn-toggle-cart"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          right: 20,
          top: 100,
          backgroundColor: "#000",
          color: "#C69C6D",
          padding: "0.5rem 1rem",
          borderRadius: "8px",
          zIndex: 200,
        }}
      >
        {isOpen ? "Close Cart" : "Open Cart"}
      </button>

      {isOpen && (
        <aside
          className="cart-sidebar"
          style={{
            position: "fixed",
            right: 0,
            top: 0,
            height: "100vh",
            width: "350px",
            backgroundColor: "#fff",
            boxShadow: "-2px 0 10px rgba(0,0,0,0.2)",
            padding: "1rem",
            zIndex: 150,
            overflowY: "auto",
          }}
        >
          <h2>Your Cart</h2>
          {cartItems.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            <>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {cartItems.map((item, index) => (
                  <li
                    key={index}
                    style={{
                      display: "flex",
                      marginBottom: "1rem",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      width={60}
                      height={60}
                      style={{ objectFit: "cover", borderRadius: "6px" }}
                    />
                    <div style={{ marginLeft: "0.5rem", flex: 1 }}>
                      <p style={{ margin: 0, fontWeight: 600 }}>{item.name}</p>
                      <p style={{ margin: "0.2rem 0" }}>${item.price}</p>
                      <p style={{ margin: "0.2rem 0" }}>Qty: {item.quantity}</p>
                      <button
                        onClick={() => removeFromCart(item.name)}
                        style={{
                          backgroundColor: "#C69C6D",
                          color: "#000",
                          border: "none",
                          padding: "0.2rem 0.5rem",
                          borderRadius: "4px",
                          marginTop: "0.2rem",
                          cursor: "pointer",
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <button
                onClick={handleCheckout}
                style={{
                  backgroundColor: "#000",
                  color: "#C69C6D",
                  border: "none",
                  padding: "0.6rem 1.2rem",
                  fontWeight: 700,
                  width: "100%",
                  marginBottom: "0.5rem",
                  cursor: "pointer",
                  borderRadius: "6px",
                }}
              >
                Proceed to Checkout
              </button>
              <button
                onClick={clearCart}
                style={{
                  backgroundColor: "#C69C6D",
                  color: "#000",
                  border: "none",
                  padding: "0.6rem 1.2rem",
                  fontWeight: 700,
                  width: "100%",
                  cursor: "pointer",
                  borderRadius: "6px",
                }}
              >
                Clear Cart
              </button>
            </>
          )}
        </aside>
      )}
    </>
  );
};
