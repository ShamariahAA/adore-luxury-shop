import { useState } from "react";
import { CartSidebar } from "./CartSidebar";

export const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#FAF7F2",
        borderBottom: "2px solid #C69C6D",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <h1 style={{ fontWeight: 700, fontSize: "1.5rem" }}>Adoře Luxury</h1>

      <nav style={{ display: "flex", gap: "1.5rem" }}>
        <a
          href="/"
          style={{ textDecoration: "none", color: "#000", fontWeight: 600 }}
        >
          Home
        </a>
        <a
          href="/about"
          style={{ textDecoration: "none", color: "#000", fontWeight: 600 }}
        >
          About
        </a>
        <a
          href="/contact"
          style={{ textDecoration: "none", color: "#000", fontWeight: 600 }}
        >
          Contact
        </a>
      </nav>

      {/* Cart Button */}
      <button
        onClick={() => setCartOpen(!cartOpen)}
        style={{
          backgroundColor: "#000",
          color: "#C69C6D",
          border: "2px solid #C69C6D",
          padding: "0.6rem 1.2rem",
          borderRadius: "30px",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Cart 🛒
      </button>

      {/* Sidebar */}
      {cartOpen && <CartSidebar />}
    </header>
  );
};


