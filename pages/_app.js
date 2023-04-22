import 'styles/styles.css';
import 'nextra-theme-docs/style.css'
import { GlobalContextProvider } from '../contexts/GlobalContext';

export default function Nextra({ Component, pageProps }) {
    // Make the global context available to every page.
    return (
        <GlobalContextProvider>
            <Component {...pageProps} />
        </GlobalContextProvider>
    );
}
