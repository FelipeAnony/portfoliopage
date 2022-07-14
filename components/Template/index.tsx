import Head from 'next/head';
import Script from 'next/script';
import Footer from '../Footer';
import ResponsiveMenu from '../ResponsiveMenu';

import Styles from './styles.module.css';

function Template({ children }: { children: JSX.Element }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta lang="en" />

        <title>Felipe M. Oliveira | Front-end Developer</title>
        <meta name="title" content="Felipe M. Oliveira | Front-end Developer" />
        <meta
          name="description"
          content="Hi! My name is Felipe,  I've been a front-end developer since 2021. I describe myself as an optimistic person,  eager to learn new things. I'm extremely hardworking and dedicated. My philosophy of life is that a life is good when you are the best you can be."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta
          property="og:title"
          content="Felipe M. Oliveira | Front-end Developer"
        />
        <meta
          property="og:description"
          content="Hi! My name is Felipe,  I've been a front-end developer since 2021. I describe myself as an optimistic person,  eager to learn new things. I'm extremely hardworking and dedicated. My philosophy of life is that a life is good when you are the best you can be."
        />
        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta
          property="twitter:title"
          content="Felipe M. Oliveira | Front-end Developer"
        />
        <meta
          property="twitter:description"
          content="Hi! My name is Felipe,  I've been a front-end developer since 2021. I describe myself as an optimistic person,  eager to learn new things. I'm extremely hardworking and dedicated. My philosophy of life is that a life is good when you are the best you can be."
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
      </Head>
      <header className={Styles.header}>
        <ResponsiveMenu />
      </header>
      <main className={Styles.main}>{children}</main>
      <footer className={Styles.footer}>
        <Footer />
      </footer>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-9BZBJTCF2C"
        strategy="afterInteractive"
      />
      <Script id="analitcs" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];

          function gtag(){
            dataLayer.push(arguments);
          }

          gtag('js', new Date());
          gtag('config', 'G-9BZBJTCF2C');
          `}
      </Script>
    </>
  );
}

export default Template;
