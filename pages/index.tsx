// pages/index.tsx
import { useCart } from '../context/CartContext';
import { CartSidebar } from '../components/CartSidebar';

interface Product {
  name: string;
  price: number;
  desc: string;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

const products: Product[] = [
  {
    name: 'Cheetah Fluffy Bonnet',
    price: 25,
    desc: 'Fierce meets feminine. Bold cheetah print with soft pink satin interior.',
    image: 'https://i.postimg.cc/Wqd51Kwp/cheetah.jpg',
  },
  {
    name: 'Caramel Fluffy Bonnet',
    price: 25,
    desc: 'Wrap yourself in warmth and grace. Plush caramel teddy texture.',
    image: 'https://i.postimg.cc/JGbb5Mnq/caramel.jpg',
  },
  {
    name: 'Hello Kitty Fluffy Bonnet',
    price: 25,
    desc: 'Playful elegance, redefined. Snow-white plush with radiant red satin.',
    image: 'https://i.postimg.cc/y3R05zyb/hellokitty.jpg',
  },
  {
    name: 'Black Cat Fluffy Bonnet',
    price: 25,
    desc: 'Mysterious and cozy. Soft black plush with silky lining.',
    image: 'https://i.postimg.cc/JGbb5Mnq/blackcat.jpg',
  },
];

export default function Home() {
  const { addToCart } = useCart();

  return (
    <div>
      <CartSidebar />

      {/* Single Header */}
      <header className="container">
        <div className="logo">Adoře Luxury</div>
        <nav>
          <a href="#">Home</a>
          <a href="#shop">Shop</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Shop Section */}
      <section className="shop" id="shop">
        <h2>Our Plush Bonnets</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.name}>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <div className="product-name">{product.name}</div>
              <div className="product-desc">{product.desc}</div>
              <div className="product-price">${product.price}</div>
              <button
                className="btn-add-cart"
                onClick={() => addToCart({ ...product, quantity: 1 } as CartItem)}
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
