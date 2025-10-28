// pages/index.tsx
import { useCart } from "../context/CartContext";
import { CartSidebar } from "../components/CartSidebar";

type Product = {
  name: string;
  price: number;
  image: string; // make sure your product has an image URL
};

type CartItem = Product & {
  quantity: number;
};

const products: Product[] = [
  { name: "Luxury Bag", price: 299.99, image: "/images/bag.jpg" },
  { name: "Silk Scarf", price: 149.99, image: "/images/scarf.jpg" },
  { name: "Gold Earrings", price: 99.99, image: "/images/earrings.jpg" },
];

export default function Home() {
  const { addToCart } = useCart();

  return (
    <>
      <CartSidebar />
      <main style={{ padding: "2rem", fontFamily: "serif" }}>
        <h2 style={{ fontWeight: 700, fontSize: "2rem", marginBottom: "1.5rem" }}>
          Shop Our Collection
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "2rem",
          }}
        >
          {products.map((product) => (
            <div
              key={product.name}
              style={{
                border: "1px solid #e4d9cc",
                borderRadius: "10px",
                padding: "1rem",
                textAlign: "center",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "0.5rem",
                }}
              />
              <h3 style={{ fontWeight: 600 }}>{product.name}</h3>
              <p style={{ margin: "0.5rem 0", fontWeight: 700 }}>
                ${product.price.toFixed(2)}
              </p>
              <button
                onClick={() =>
                  addToCart({
                    ...product,
                    quantity: 1, // default quantity
                  } as CartItem)
                }
                style={{
                  backgroundColor: "#000",
                  color: "#C69C6D",
                  border: "2px solid #C69C6D",
                  padding: "0.5rem 1rem",
                  borderRadius: "30px",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}





