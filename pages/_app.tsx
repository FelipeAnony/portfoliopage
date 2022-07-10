import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Template from '../components/Template';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Template>
      <Component {...pageProps} />
    </Template>
  );
}

export default MyApp;
