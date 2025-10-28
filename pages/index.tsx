// pages/index.tsx
import { useCart } from '../context/CartContext';
import { CartSidebar } from '../components/CartSidebar';

interface Product {
  name: string;
  price: number;
  desc: string;
  image: string;
}

const products: Product[] = [
  {
    name: 'Cheetah Fluffy Bonnet',
    price: 25,
    desc: 'Fierce meets feminine. Bold cheetah print with soft pink satin interior for glamour and comfort.',
    image: 'https://i.postimg.cc/Wqd51Kwp/caramel.jpg',
  },
  {
    name: 'Caramel Fluffy Bonnet',
    price: 25,
    desc: 'Wrap yourself in warmth and grace. Plush caramel teddy texture with silky blush-pink satin lining.',
    image: 'https://i.postimg.cc/JGbb5Mnq/blackcat.jpg',
  },
  {
    name: 'Hello Kitty Fluffy Bonnet',
    price: 25,
    desc: 'Playful elegance, redefined. Snow-white plush with radiant red satin, cute yet refined charm.',
    image: 'https://i.postimg.cc/y3R05zyb/hellokitty.jpg',
  },
  {
    name: 'Black Cat Fluffy Bonnet',
    price: 25,
    desc: 'Mysterious and cozy. Soft black plush with silky lining for an elegant nighttime look.',
    image: 'https://i.postimg.cc/0NwLMB7v/blackcat2.jpg', // switched URL
  },
];

export default function Home() {
  const { addToCart } = useCart();

  return (
    <div>
      {/* Single Header */}
      <header className="container">
        <div className="logo">Adoře Luxury</div>
        <nav>
          <a href="#hero">Home</a>
          <a href="#shop">Shop</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" id="hero">
        <h1>Adoře Luxury Bonnets</h1>
        <p className="tagline">Elegant. Cozy. Chic.</p>
      </section>

      {/* Shop Section */}
      <section className="shop" id="shop">
        <h2>Our Plush Bonnets</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.name}>
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-name">{product.name}</div>
              <div className="product-desc">{product.desc}</div>
              <div className="product-price">${product.price}</div>
              <button
                className="btn-add-cart"
                onClick={() => addToCart({ ...product, quantity: 1 })}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: '5rem 1rem', textAlign: 'center' }}>
        <h2>About Us</h2>
        <p>
          At Adoře Luxury, we craft the coziest and most elegant bonnets for your nighttime comfort.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '5rem 1rem', textAlign: 'center' }}>
        <h2>Contact Us</h2>
        <p>Email: info@adoreluxury.com</p>
      </section>

      {/* Cart Sidebar */}
      <CartSidebar />

      {/* Footer */}
      <footer>
        &copy; {new Date().getFullYear()} Adoře Luxury. All rights reserved.
      </footer>
    </div>
  );
}
