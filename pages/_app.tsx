import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CartProvider } from "../context/CartContext";
import { Header } from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Header />
      <main style={{ marginTop: "80px" }}> {/* optional spacing so content isn't hidden behind sticky header */}
        <Component {...pageProps} />
      </main>
    </CartProvider>
  );
}

export default MyApp;
