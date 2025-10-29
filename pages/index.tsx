import { Header } from '../components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <section className="hero">
        <h1>Welcome to Adoře Luxury</h1>
        <p className="tagline">
          Indulge in elegance and comfort — explore our collection of luxury bonnets.
        </p>
        <a href="/shop" className="btn-primary">Shop Now</a>
      </section>
    </div>
  );
}

