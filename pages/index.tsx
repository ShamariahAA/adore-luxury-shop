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
    image: 'https://i.postimg.cc/b1e19f78-998a-48cd-8135-902a915ac2ae.jpg', // Leopard print
  },
  {
    name: 'Caramel Fluffy Bonnet',
    price: 25,
    desc: 'Wrap yourself in warmth and grace. Plush caramel teddy texture with silky blush-pink satin lining.',
    image: 'https://i.postimg.cc/b753ee65-5721-4e12-99a4-997c878b3d2d.jpg', // Brown teddy
  },
  {
    name: 'Hello Kitty Fluffy Bonnet',
    price: 25,
    desc: 'Playful elegance, redefined. Snow-white plush with radiant red satin, cute yet refined charm.',
    image: 'https://i.postimg.cc/53fcb892-3bf3-4d51-8349-e72012eb8c84.jpg', // Pink/red interior
  },
  {
    name: 'Black Cat Fluffy Bonnet',
    price: 25,
    desc: 'Mysterious and cozy. Soft black plush with silky lilac lining for an elegant nighttime look.',
    image: 'https://i.postimg.cc/4886a80b-8c46-4fa6-b6a3-347fe354f8df.jpg', // Black bonnet
  },
];

export default function Home() {
  const { addToCart } = useCart();

  return (
    <div>
      <header className="container">
        <div className="logo">Adoře Luxury</div>
        <nav>
          <a href="#">Home</a>
          <a href="#shop">Shop</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

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

      <CartSidebar />
    </div>
  );
}
