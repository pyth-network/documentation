import { AppProps } from "next/app";
import Script from "next/script";
import "nextra-theme-docs/style.css";
import { ReactNode, useEffect, useState, useRef } from "react";
import * as amplitude from "@amplitude/analytics-browser";
import { autocapturePlugin } from "@amplitude/plugin-autocapture-browser";
import "../styles/styles.css";
import TagManager from "react-gtm-module";
import { AskCookbook } from "../components/AskCookbook";

const tagManagerArgs = {
  gtmId: "GTM-MN3TWRGJ",
};
const AMPLITUDE_API_KEY = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY;

type NextraAppProps = AppProps & {
  Component: AppProps["Component"] & {
    getLayout: (page: ReactNode) => ReactNode;
  };
};

export default function Nextra({ Component, pageProps }: NextraAppProps) {
  const [mounted, setMounted] = useState(false);
  const amplitudeInitialized = useRef(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);
  useEffect(() => {
    if (AMPLITUDE_API_KEY && !amplitudeInitialized.current) {
      amplitude.add(autocapturePlugin());
      amplitude.init(AMPLITUDE_API_KEY, {
        defaultTracking: true,
      });
      amplitudeInitialized.current = true;
    }
  }, []);

  // Make the global context available to every page.
  return (
    // prevent react hydration error
    mounted && (
      <>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7TVVW3MEK7"
        />
        <Script id="google-tag">
          {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());

         gtag('config', 'G-7TVVW3MEK7');
       `}
        </Script>
        <Component {...pageProps} />
        <AskCookbook />
      </>
    )
  );
}
