import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Add smooth scrolling polyfill for older browsers
    if (typeof window !== 'undefined') {
      // Optional: Add Google Analytics or other tracking here
    }
  }, []);

  return <Component {...pageProps} />;
}
