import React from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';
import Head from 'next/head';
import { AppProps } from 'next/app';
import '../styles.css';
import '../styles/navBar.css';
import '../styles/selectLocation.css';
import '../styles/pageNavigate.css';
import '../styles/searchBar.css';
import '../styles/banner.css';

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      NProgress.start();
    });

    Router.events.on('routeChangeComplete', () => {
      NProgress.done();
    });

    Router.events.on('routeChangeError', () => {
      NProgress.done();
    });
  }, []);
  return (
    <>
      <Head>
        <title>Plantilla Next.js | Avila Tek</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
