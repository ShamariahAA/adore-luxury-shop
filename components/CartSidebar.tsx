import { useCart } from "../context/CartContext";
import { useState } from "react";

export const CartSidebar = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckout = async () => {
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cartItems }),
      });

      const data = await response.json();
      if (data.url) window.location.href = data.url;
      else alert("Checkout failed.");
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <>
      {/* 🛒 Cart button directly under header */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        <button
          onClick={() => setIsOpen(true)}
          style={{
            backgroundColor: "#C69C6D",
            color: "#fff",
            border: "none",
            padding: "10px 25px",
            borderRadius: "25px",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
            position: "relative",
          }}
        >
          🛒 Cart
          {cartItems.length > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-8px",
                right: "-8px",
                background: "#ff4d4d",
                color: "#fff",
                borderRadius: "50%",
                width: "22px",
                height: "22px",
                fontSize: "13px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
              }}
            >
              {cartItems.length}
            </span>
          )}
        </button>
      </div>

      {/* 🧺 Sidebar Drawer */}
      {isOpen && (
        <aside
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "320px",
            height: "100vh",
            background: "#fff",
            boxShadow: "-3px 0 10px rgba(0,0,0,0.2)",
            padding: "20px",
            zIndex: 1200,
            overflowY: "auto",
          }}
        >
          <button
            onClick={() => setIsOpen(false)}
            style={{
              background: "none",
              border: "none",
              fontSize: "20px",
              cursor: "pointer",
              color: "#C69C6D",
              position: "absolute",
              top: "10px",
              right: "15px",
            }}
          >
            ✕
          </button>

          <h2 style={{ color: "#C69C6D", marginTop: "40px" }}>Your Cart</h2>
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
                      alignItems: "center",
                      marginBottom: "15px",
                      borderBottom: "1px solid #eee",
                      paddingBottom: "10px",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      width={60}
                      height={60}
                      style={{
                        borderRadius: "8px",
                        marginRight: "10px",
                        objectFit: "cover",
                      }}
                    />
                    <div>
                      <p style={{ fontWeight: "bold" }}>{item.name}</p>
                      <p>${item.price}</p>
                      <button
                        onClick={() => removeFromCart(item.name)}
                        style={{
                          border: "none",
                          background: "none",
                          color: "#C69C6D",
                          cursor: "pointer",
                          fontSize: "0.9rem",
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
                  backgroundColor: "#C69C6D",
                  color: "white",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  width: "100%",
                  marginBottom: "10px",
                }}
              >
                Proceed to Checkout
              </button>
              <button
                onClick={clearCart}
                style={{
                  backgroundColor: "#eee",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  width: "100%",
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





