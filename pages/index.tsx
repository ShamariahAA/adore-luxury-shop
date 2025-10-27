import { useCart } from "../context/CartContext";
import { CartSidebar } from "../components/CartSidebar";

interface Product {
  name: string;
  price: number;
  desc: string;
  image: string;
}

const products: Product[] = [
  {
    name: "Cheetah Fluffy Bonnet",
    price: 25, // updated price
    desc: "Fierce meets feminine. Bold cheetah print with soft pink satin interior for glamour and comfort.",
    image: "https://i.postimg.cc/Wqd51Kwp/caramel.jpg",
  },
  {
    name: "Caramel Fluffy Bonnet",
    price: 45,
    desc: "Wrap yourself in warmth and grace. Plush caramel teddy texture with silky blush-pink satin lining.",
    image: "https://i.postimg.cc/JGbb5Mnq/blackcat.jpg",
  },
  {
    name: "Hello Kitty Fluffy Bonnet",
    price: 45,
    desc: "Playful elegance, redefined. Snow-white plush with radiant red satin, cute yet refined charm.",
    image: "https://i.postimg.cc/56Hr4Hs6/cheetah.jpg",
  },
  {
    name: "Black Cat Fluffy Bonnet",
    price: 45,
    desc: "Mysterious and cozy. Soft black plush with silky lining for an elegant nighttime look.",
    image: "https://i.postimg.cc/y3R05zyb/hellokitty.jpg",
  },
];

export default function Home() {
  const { addToCart } = useCart();

  return (
    <>
      <CartSidebar />

      <section className="hero" style={{ textAlign: "center", padding: "2rem 1rem" }}>
        <h1>Adoře Luxury</h1>
        <p className="tagline">Elegance in Every Sleep</p>
        <button
          className="btn-primary"
          onClick={() =>
            document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Shop Now
        </button>
      </section>

      <section className="shop" id="shop" style={{ padding: "2rem" }}>
        <h2>Our Plush Bonnets</h2>
        <div className="products-grid" style={{ display: "grid", gap: "2rem", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
          {products.map((product) => (
            <div
              key={product.name}
              className="product-card"
              style={{
                border: "1px solid #e4d9cc",
                borderRadius: "10px",
                padding: "1rem",
                textAlign: "center",
                fontFamily: "serif",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
                style={{ width: "100%", borderRadius: "10px", marginBottom: "1rem" }}
              />
              <div className="product-name" style={{ fontWeight: 700, marginBottom: "0.5rem" }}>
                {product.name}
              </div>

