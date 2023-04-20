// pages/_app.js or pages/_app.tsx

import 'styles/styles.css';
import 'nextra-theme-docs/style.css'
import { GlobalContextProvider } from '../contexts/GlobalContext';

export default function Nextra({ Component, pageProps }) {
    return (
        <GlobalContextProvider>
            <Component {...pageProps} />
        </GlobalContextProvider>
    );
}
