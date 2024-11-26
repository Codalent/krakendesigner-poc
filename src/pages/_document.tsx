import Sidebar from "@/components/common/sidebar";
import Header from "@/components/header";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Header />
        <Main />
      </body>
      <NextScript />
    </Html>
  );
}
