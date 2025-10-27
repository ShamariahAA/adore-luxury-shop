// pages/index.tsx
import { useCart } from '../context/CartContext';
import { CartSidebar } from '../components/CartSidebar';

interface Product {
  name: string;
  price: number;
}

const products: Product[] = [
  { name: 'Luxury Bag', price: 250 },
  { name: 'Designer Shoes', price: 180 },
  { name: 'Silk Scarf', price: 90 },
];

export default function Home() {
  const { addToCart } = useCart();

  return (
    <>
      <CartSidebar />

      <main style={{ padding: '2rem', fontFamily: 'serif' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Adoře Luxury Shop</h1>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {products.map((product) => (
            <div
              key={product.name}
              style={{
                border: '1px solid #C69C6D',
                padding: '1rem',
                borderRadius: '10px',
                textAlign: 'center',
              }}
            >
              <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{product.name}</h2>
              <p style={{ marginBottom: '1rem' }}>${product.price.toFixed(2)}</p>
              <button
                onClick={() => addToCart(product)}
                style={{
                  backgroundColor: '#000',
                  color: '#C69C6D',
                  border: '2px solid #C69C6D',
                  padding: '0.5rem 1rem',
                  borderRadius: '30px',
                  cursor: 'pointer',
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



