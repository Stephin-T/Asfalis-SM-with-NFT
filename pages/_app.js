import "../styles/globals.css";
import "../lib/hexStyles.css";
import { AsfalisProvider } from "../context/AsfalisContext";

function MyApp({ Component, pageProps }) {
  return (
    <AsfalisProvider>
      <Component {...pageProps} />;
    </AsfalisProvider>
  );
}

export default MyApp;
