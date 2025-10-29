import { useCart } from '../context/CartContext';
import { Header } from '../components/Header';

type Product = {
  name: string;
  price: number;
  desc: string;
  image: string; // path under /public
};

const products: Product[] = [
  {
    name: 'Cheetah Fluffy Bonnet',
    price: 25,
    desc: 'Fierce meets feminine. Bold cheetah print with soft pink satin interior for glamour and comfort.',
    image: '/images/cheetah.jpg',
  },
  {
    name: 'Caramel Fluffy Bonnet',
    price: 25,
    desc: 'Wrap yourself in warmth and grace. Plush caramel teddy texture with silky blush-pink satin lining.',
    image: '/images/caramel.jpg',
  },
  {
    name: 'Hello Kitty Fluffy Bonnet',
    price: 25,
    desc: 'Playful elegance, redefined. Snow-white plush with radiant red satin, cute yet refined charm.',
    image: '/images/hello-kitty.jpg',
  },
  {
    name: 'Black Cat Fluffy Bonnet',
    price: 25,
    desc: 'Mysterious and cozy. Soft black plush with silky lilac lining for an elegant nighttime look.',
    image: '/images/black-cat.jpg',
  },
];

export default function Home() {
  const { addToCart } = useCart();

  return (
    <div>
      {/* Site-wide header with cart counter + floating cart button */}
      <Header />

      <section className="shop" id="shop" style={{ backgroundColor: '#F9F4E7', padding: '3rem 0 5rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.2rem', marginBottom: '2rem', fontWeight: 700 }}>
          Our Plush Bonnets
        </h2>

        <div
          className="products-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem',
            width: '90%',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          {products.map((p) => (
            <div
              key={p.name}
              className="product-card"
              style={{
                background: '#fff',
                borderRadius: 8,
                boxShadow: '0 8px 15px rgb(0 0 0 / 0.1)',
                padding: '1rem 1rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <img
                src={p.image}
                alt={p.name}
                className="product-image"
                style={{
                  width: '100%',
                  maxWidth: 320,
                  height: 260,
                  objectFit: 'cover',
                  borderRadius: 8,
                }}
              />
              <div className="product-name" style={{ fontWeight: 900, fontSize: '1.15rem', marginTop: '0.8rem' }}>
                {p.name}
              </div>
              <div
                className="product-desc"
                style={{ fontStyle: 'italic', color: '#8B7D5C', fontSize: '0.95rem', textAlign: 'center', margin: '0.4rem 0 0.9rem' }}
              >
                {p.desc}
              </div>
              <div className="product-price" style={{ fontWeight: 700, color: '#C69C6D', marginBottom: '0.8rem' }}>
                ${p.price.toFixed(2)}
              </div>

              <button
                className="btn-add-cart"
                onClick={() => addToCart({ name: p.name, price: p.price, image: p.image, quantity: 1 })}
                style={{
                  backgroundColor: '#000',
                  color: '#C69C6D',
                  border: '2px solid #C69C6D',
                  padding: '0.6rem 1.2rem',
                  borderRadius: 6,
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
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
