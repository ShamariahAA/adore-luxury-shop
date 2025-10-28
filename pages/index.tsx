import { useState } from 'react';
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
    desc: 'Fierce meets feminine.',
    image: 'https://i.postimg.cc/Wqd51Kwp/caramel.jpg',
  },
  {
    name: 'Caramel Fluffy Bonnet',
    price: 25,
    desc: 'Wrap yourself in warmth and grace.',
    image: 'https://i.postimg.cc/JGbb5Mnq/blackcat.jpg',
  },
  {
    name: 'Hello Kitty Fluffy Bonnet',
    price: 25,
    desc: 'Playful elegance, redefined.',
    image: 'https://i.postimg.cc/xyz-hellokitty.jpg',
  },
  {
    name: 'Black Cat Fluffy Bonnet',
    price: 25,
    desc: 'Mysterious and cozy.',
    image: 'https://i.postimg.cc/xyz-blackcat.jpg',
  },
];

export default function Home() {
  const { addToCart } = useCart();
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div>
      {/* Header */}
      <header className="container">
        <div className="logo">Adoře Luxury</div>
        <nav>
          <a href="/">Home</a>
          <a href="#shop">Shop</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
        <button className="cart-btn" onClick={() => setCartOpen(!cartOpen)}>Cart</button>
      </header>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />

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
    </div>
  );
}

