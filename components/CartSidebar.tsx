import { useCart } from "../context/CartContext";
import { useState, useEffect } from "react";

export const CartSidebar = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [animate, setAnimate] = useState(false);

  // Hide/show cart button on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowButton(false);
      } else {
        setShowButton(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Trigger animation when cart item count changes
  useEffect(() => {
    if (cartItems.length > 0) {
      setAnimate(true);
      const timeout = setTimeout(() => setAnimate(false), 600);
      return () => clearTimeout(timeout);
    }
  }, [cartItems.length]);

  // Handle checkout
  const handleCheckout = async () => {
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cartItems }),
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Checkout failed.");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <>
      {/* Floating Cart Button */}
      {showButton && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 300,
            backgroundColor: "#000",
            color: "#C69C6D",
            border: "2px solid #C69C6D",
            borderRadius: "30px",
            padding: "0.6rem 1.2rem",
            fontWeight: "bold",
            transform: animate ? "scale(1.2)" : "scale(1)",
            transition: "all 0.3s ease",
          }}
        >
          🛒 Cart ({cartItems.length})
        </button>
      )}

      {/* Overlay (dim background) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.4)",
            zIndex: 399,
            transition: "opacity 0.3s ease",
          }}
        />
      )}

      {/* Animated Sidebar Drawer */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: isOpen ? 0 : "-320px",
          width: "300px",
          height: "100%",
          backgroundColor: "#fff",
          boxShadow: "-4px 0 10px rgba(0,0,0,0.2)",
          padding: "1.5rem",
          zIndex: 400,
          overflowY: "auto",
          transition: "right 0.4s ease",
        }}
      >
        <button
          onClick={() => setIsOpen(false)}
          style={{
            background: "none",
            border: "none",
            fontSize: "1.5rem",
            position: "absolute",
            top: 10,
            right: 15,
            cursor: "pointer",
          }}
        >
          ✕
        </button>

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
                    alignItems: "center",
                    marginBottom: "1rem",
                    borderBottom: "1px solid #ddd",
                    paddingBottom: "1rem",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "60px", marginRight: "10px" }}
                  />
                  <div>
                    <p style={{ margin: 0, fontWeight: "bold" }}>{item.name}</p>
                    <p style={{ margin: "4px 0" }}>${item.price}</p>
                    <p style={{ margin: "4px 0" }}>Qty: {item.quantity}</p>
                    <button
                      onClick={() => removeFromCart(item.name)}
                      style={{
                        background: "none",
                        border: "none",
                        color: "#C69C6D",
                        cursor: "pointer",
                        fontWeight: "bold",
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
                padding: "0.8rem",
                width: "100%",
                borderRadius: "5px",
                fontWeight: "bold",
                marginBottom: "0.5rem",
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
                padding: "0.8rem",
                width: "100%",
                borderRadius: "5px",
                fontWeight: "bold",
              }}
            >
              Clear Cart
            </button>
          </>
        )}
      </div>
    </>
  );
};

