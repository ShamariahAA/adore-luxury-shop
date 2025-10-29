import { useCart } from '../context/CartContext';
import { CartSidebar } from '../components/CartSidebar';
import { Header } from '../components/Header'; // ✅ Added header import

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
    name: "Caramel Fluffy Bonnet",
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

  return (
    <div>
      <Header /> {/* ✅ Navigation bar now appears */}
      <CartSidebar />
      
      <section className="shop">
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
