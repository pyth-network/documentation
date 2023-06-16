import "nextra-theme-docs/style.css";
import { GlobalContextProvider } from "../contexts/GlobalContext";
import "../styles/styles.css";

export default function Nextra({ Component, pageProps }) {
  // Make the global context available to every page.
  return (
    <GlobalContextProvider>
      <Component {...pageProps} />
    </GlobalContextProvider>
  );
}
