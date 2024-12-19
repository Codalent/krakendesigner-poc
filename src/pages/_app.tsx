import Layout from "@/components/layout";
import ActionCall from "@/components/wrapper/ActionCall";
import SchemaContextProvider from "@/context/schemaContext";
import store from "@/store/store";
import "@/styles/main.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <SchemaContextProvider>
        <ActionCall />
        <Layout>
          <style jsx global>{`
            html {
              font-family: ${inter.style.fontFamily};
            }
          `}</style>
          <Component {...pageProps} />
        </Layout>
      </SchemaContextProvider>
    </Provider>
  );
}
