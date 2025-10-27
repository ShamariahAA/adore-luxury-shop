import { useCart } from "../context/CartContext";
import { useState } from "react";

export const CartSidebar = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(true); // starts open, can be toggled from Header

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {/* Sidebar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: isOpen ? 0 : "-400px",
          width: "350px",
          height: "100%",
          backgroundColor: "#FAF7F2",
          borderLeft: "3px solid #C69C6D",
          boxShadow: "-6px 0 20px rgba(0,0,0,0.15)",
          transition: "right 0.4s ease",
          padding: "1.5rem",
          zIndex: 200,
          overflowY: "auto",
          fontFamily: "serif",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #e4d9cc",
            paddingBottom: "0.5rem",
            marginBottom: "1rem",
          }}
        >
          <h3 style={{ fontWeight: 700, fontSize: "1.3rem" }}>Your Cart</h3>
          <button
            onClick={() => setIsOpen(false)}
            style={{
              background: "none",
              border: "none",
              color: "#C69C6D",
              fontSize: "1.6rem",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "color 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#000")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#C69C6D")}
          >
            ✕
          </button>
        </div>

        {/* Cart Items */}
        {cart.length === 0 ? (
          <p style={{ textAlign: "center" }}>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.name}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "1rem",
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
                    backgroundColor: "#fff",
                    border: "1px solid #C69C6D",
                    borderRadius: "5px",
                    padding: "0.3rem 0.5rem",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </div>
            ))}

            <p
              style={{
                fontWeight: 700,
                borderTop: "1px solid #e4d9cc",
                paddingTop: "1rem",
              }}
            >
              Total: ${total.toFixed(2)}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "1rem" }}>
              <button
                onClick={clearCart}
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid #C69C6D",
                  borderRadius: "25px",
                  padding: "0.5rem",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                Clear Cart
              </button>

              <form action="/api/checkout" method="POST">
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#C69C6D",
                    color: "#fff",
                    border: "none",
                    borderRadius: "25px",
                    padding: "0.5rem",
                    cursor: "pointer",
                    fontWeight: 700,
                  }}
                >
                  Proceed to Checkout
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </>
  );
};








