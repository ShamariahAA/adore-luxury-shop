import { useCart } from "../context/CartContext";

export const CartSidebar = () => {
  const { cartItems, addToCart, removeFromCart, clearCart } = useCart();

  // Function to reduce quantity by one
  const decreaseQuantity = (itemName: string) => {
    const item = cartItems.find((i) => i.name === itemName);
    if (!item) return;

    if (item.quantity > 1) {
      // Decrease by 1
      addToCart({ ...item, quantity: -1 }); // negative quantity reduces amount
    } else {
      // If only one left, remove item entirely
      removeFromCart(itemName);
    }
  };

  // Calculate total
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <aside
      style={{
        position: "fixed",
        top: "80px", // below header
        right: 0,
        width: "350px",
        height: "calc(100% - 80px)",
        backgroundColor: "#111",
        color: "#C69C6D",
        padding: "1.5rem",
        boxShadow: "-4px 0 10px rgba(0,0,0,0.3)",
        zIndex: 200,
        overflowY: "auto",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p style={{ textAlign: "center", color: "#999" }}>
          Your cart is empty.
        </p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.name}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid #333",
              paddingBottom: "0.8rem",
              marginBottom: "0.8rem",
            }}
          >
            <div>
              <p style={{ fontWeight: "bold" }}>{item.name}</p>
              <p style={{ fontSize: "0.9rem", color: "#aaa" }}>
                ${item.price.toFixed(2)}
              </p>
            </div>

            {/* Quantity Controls */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <button
                onClick={() => decreaseQuantity(item.name)}
                style={{
                  background: "none",
                  border: "1px solid #C69C6D",
                  color: "#C69C6D",
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              >
                –
              </button>

              <span style={{ minWidth: "20px", textAlign: "center" }}>
                {item.quantity}
              </span>

              <button
                onClick={() => addToCart({ ...item, quantity: 1 })}
                style={{
                  background: "none",
                  border: "1px solid #C69C6D",
                  color: "#C69C6D",
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              >
                +
              </button>
            </div>
          </div>
        ))
      )}

      {/* Footer */}
      {cartItems.length > 0 && (
        <div style={{ marginTop: "1.5rem" }}>
          <h3 style={{ textAlign: "center" }}>Total: ${total.toFixed(2)}</h3>

          <button
            onClick={clearCart}
            style={{
              display: "block",
              width: "100%",
              backgroundColor: "#C69C6D",
              color: "#000",
              border: "none",
              borderRadius: "8px",
              padding: "0.75rem",
              marginTop: "1rem",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Clear Cart
          </button>

          <button
            style={{
              display: "block",
              width: "100%",
              backgroundColor: "#000",
              color: "#C69C6D",
              border: "2px solid #C69C6D",
              borderRadius: "8px",
              padding: "0.75rem",
              marginTop: "0.75rem",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Checkout
          </button>
        </div>
      )}
    </aside>
  );
};











