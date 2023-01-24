import Head from "next/head";
import * as React from "react";
import Footer from "../footer";
import NavigationBar from "../navigation-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Head>
        <title>MSupplies.</title>
        <meta name="description" content="Wig making supplies shop" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <NavigationBar /> */}
      {children}
      <Footer />
    </div>
  );
}
