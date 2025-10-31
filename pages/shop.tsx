import { useCart } from "../context/CartContext";
import { CartSidebar } from "../components/CartSidebar";
import { Header } from "../components/Header";
import { useState } from "react";

interface Product {
  name: string;
  price: number;
  desc: string;
  image: string;
}

const products: Product[] = [
  {
    name: "Cheetah Fluffy Bonnet",
    price: 25,
    desc: "Fierce meets feminine. Bold cheetah print with soft pink satin interior for glamour and comfort.",
    image: "https://image2url.com/images/1761763134814-819d1200-1dd9-4a9d-b58d-a926df5ff20b.jpg",
  },
  {
    name: "Teddy Bear Fluffy Bonnet",
    price: 25,
    desc: "Wrap yourself in warmth and grace. Plush caramel teddy texture with silky blush-pink satin lining.",
    image: "https://image2url.com/images/1761761637780-a510e53e-a555-44d1-823f-cacdc8d8cbb4.jpg",
  },
  {
    name: "Hello Kitty Fluffy Bonnet",
    price: 25,
    desc: "Playful elegance, redefined. Snow-white plush with radiant red satin, cute yet refined charm.",
    image: "https://image2url.com/images/1761763252237-148d29ea-2bc0-4ef4-82a6-73621ea0a48c.jpg",
  },
  {
    name: "Black Cat Fluffy Bonnet",
    price: 25,
    desc: "Mysterious and cozy. Soft black plush with silky lining for an elegant nighttime look.",
    image: "https://image2url.com/images/1761763099360-2302772b-1511-4989-ac3c-2cdc59b93747.jpg",
  },
];

export default function Shop() {
  const { addToCart } = useCart();
  const [clickedItem, setClickedItem] = useState<string | null>(null);

  const handleAddToCart = (product: Product) => {
    addToCart({ ...product, quantity: 1 });
    setClickedItem(product.name);
    setTimeout(() => setClickedItem(null), 600); // remove bounce after 0.6s
  };

  return (
    <div>
      <Header />
      {/* ✅ Moved Cart button down slightly so it doesn't overlap content */}
      <div style={{ position: "relative", zIndex: 200 }}>
        <CartSidebar />
      </div>

      <section className="shop" style={{ padding: "2rem", marginTop: "2rem" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "1rem",
            color: "#C69C6D",
            letterSpacing: "1px",
          }}
        >
          <h2>Adoře Plush Bonnets</h2>

        </h2>
        <p style={{ textAlign: "center", color: "#555", marginBottom: "2rem" }}>
          Luxury handmade bonnets designed for elegance, comfort, and care.
        </p>

        <div
          className="products-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
          }}
        >
          {products.map((product) => (
            <div
              key={product.name}
              className="product-card"
              style={{
                border: "1px solid #eee",
                borderRadius: "1rem",
                padding: "1rem",
                boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                textAlign: "center",
                backgroundColor: "#fff",
                position: "relative",
                overflow: "hidden",
                transform:
                  clickedItem === product.name ? "scale(1.05)" : "scale(1)",
                transition: "transform 0.3s ease",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "0.75rem",
                  marginBottom: "1rem",
                }}
              />
              <h3 style={{ fontSize: "1.2rem", fontWeight: "600" }}>
                {product.name}
              </h3>
              <p style={{ color: "#777", margin: "0.5rem 0" }}>{product.desc}</p>
              <div
                style={{
                  fontSize: "1.1rem",
                  color: "#C69C6D",
                  marginBottom: "1rem",
                }}
              >
                ${product.price}
              </div>
              <button
                onClick={() => handleAddToCart(product)}
                style={{
                  backgroundColor: "#C69C6D",
                  color: "#fff",
                  border: "none",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "0.5rem",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#b48a5d")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#C69C6D")
                }
              >
                {clickedItem === product.name ? "Added!" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


