import { OrderProvider } from "@/context/cartContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <OrderProvider>
      <Component {...pageProps} />
    </OrderProvider>
  );
}
