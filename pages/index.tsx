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
    image: 'https://i.postimg.cc/JGbb5Mnq/blackcat.jpg', // swapped URL
  },
  {
    name: 'Black Cat Fluffy Bonnet',
    price: 25,
    desc: 'Mysterious and cozy. Soft black plush with silky lining for an elegant nighttime look.',
    image: 'https://i.postimg.cc/y3R05zyb/hellokitty.jpg', // swapped URL
  },
];

export default function Home() {
  const { addToCart, toggleCart, cartItems } = useCart();

  return (
    <div>
      {/* Header */}
      <header className="container">
        <div className="logo">Adoře Luxury</div>
        <nav>
          <a href="#">Home</a>
          <a href="#shop">Shop</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <button
          onClick={() => toggleCart(true)}
          style={{
            backgroundColor: '#000',
            color: '#C69C6D',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          Cart ({cartItems.length})
        </button>
      </header>

      {/* Cart Sidebar */}
      <CartSidebar />

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

