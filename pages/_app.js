import "tailwindcss/tailwind.css";
import Head from "next/head";
import "./_app.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>deadcheckr</title>
        <meta
          name="description"
          content="Check if a GOT character got got"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#fcf4ed"></meta>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta property="og:title" content="deadcheckr &amp; Check if a GOT character got got" />
        <meta
          property="og:description"
          content="Check if a GOT character got got"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:text:title"
          content="deadcheckr"
        />
        <meta
          name="twitter:description"
          content="Check if a GOT character got got"
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
