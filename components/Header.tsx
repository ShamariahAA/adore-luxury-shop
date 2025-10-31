import { useCart } from "../context/CartContext";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { CartSidebar } from "./CartSidebar";

export const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { cartItems } = useCart();
  const router = useRouter();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // ✅ Close cart automatically when navigating to another page
  useEffect(() => {
    const handleRouteChange = () => setCartOpen(false);
    router.events.on("routeChangeStart", handleRouteChange);
    return () => router.events.off("routeChangeStart", handleRouteChange);
  }, [router]);

  return (
    <>
      <header
        style={{
          backgroundColor: "#000",
          color: "#C69C6D",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        {/* Logo */}
        <div style={{ fontWeight: 900, fontSize: "1.8rem" }}>Adoře Luxury</div>

        {/* Navigation */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            fontWeight: 500,
          }}
        >
          <a href="/" style={{ color: "#C69C6D", textDecoration: "none" }}>Home</a>
          <a href="/shop" style={{ color: "#C69C6D", textDecoration: "none" }}>Shop</a>
          <a href="/about" style={{ color: "#C69C6D", textDecoration: "none" }}>About</a>
          <a href="/contact" style={{ color: "#C69C6D", textDecoration: "none" }}>Contact</a>

          {/* Cart Icon with Counter */}
          <button
            onClick={() => setCartOpen(!cartOpen)}
            style={{
              backgroundColor: "transparent",
              border: "1px solid #C69C6D",
              borderRadius: "50%",
              width: "48px",
              height: "48px",
              fontSize: "1.3rem",
              color: "#C69C6D",
              cursor: "pointer",
              position: "relative",
            }}
            aria-label="Toggle cart"
          >
            🛒
            {totalItems > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-6px",
                  right: "-6px",
                  backgroundColor: "#C69C6D",
                  color: "#000",
                  borderRadius: "50%",
                  padding: "2px 6px",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                }}
              >
                {totalItems}
              </span>
            )}
          </button>
        </nav>
      </header>

      {/* ✅ Cart Sidebar appears only when toggled */}
      {cartOpen && <CartSidebar />}
    </>
  );
};
