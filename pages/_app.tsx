import React from "react";
import NProgress from "nprogress";
import Router from "next/router";
import Head from "next/head";
import { AppProps } from "next/app";
import "../styles.css";
import "../styles/navBar.css";
import "../styles/selectLocation.css";
import "../styles/pageNavigate.css";
import "../styles/searchBar.css";
import "../styles/banner.css";
import "../styles/section.css";
import "../styles/category.css";
import "../styles/productCard.css";
import "../styles/service.css";
import "../styles/brand.css";
import "../styles/Footer.css";

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    Router.events.on("routeChangeStart", () => {
      NProgress.start();
    });

    Router.events.on("routeChangeComplete", () => {
      NProgress.done();
    });

    Router.events.on("routeChangeError", () => {
      NProgress.done();
    });
  }, []);
  return (
    <>
      <Head>
        <title>Plantilla Next.js | Avila Tek</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
