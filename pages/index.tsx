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
    image: 'https://i.postimg.cc/56Hr4Hs6/cheetah.jpg',
  },
  {
    name: 'Black Cat Fluffy Bonnet',
    price: 25,
    desc: 'Mysterious and cozy. Soft black plush with silky lining for an elegant nighttime look.',
    image: 'https://i.postimg.cc/y3R05zyb/hellokitty.jpg',
  },
];

export default function Home() {
  const { addToCart } = useCart();

  return (
    <>
      <CartSidebar />

      <section className="hero">
        <h1>Adoře Luxury</h1>
        <p className="tagline">Elegance in Every Sleep</p>
        <button
          className="btn-primary"
          onClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Shop Now
        </button>
      </section>

      <section className="shop" id="shop">
        <h2>Our Plush Bonnets</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.name} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-name">{product.name}</div>
              <div className="product-desc">{product.desc}</div>
              <div className="product-price">${product.price}</div>
              <button
                className="btn-add-cart"
                onClick={() =>
                  addToCart({
                    name: product.name,
                    price: product.price,
                    quantity: 1,
                    image: product.image,
                  })
                }
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
