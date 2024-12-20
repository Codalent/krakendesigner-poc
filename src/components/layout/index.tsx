import { useEffect, useLayoutEffect, useRef } from "react";
import Sidebar from "../common/sidebar";
import Footer from "../footer";
import Header from "../header";
import Seo from "./seo";

function Layout({ children }: LayoutProps) {
  const ref = useRef<HTMLDivElement>(null);

  // TODO: Temporary solution for full height layout
  useLayoutEffect(() => {
    const header = document.querySelector("header");
    if (header && ref.current) {
      ref.current.style.minHeight =
        window.innerHeight - header.offsetHeight + "px";
    }
  }, []);

  return (
    <main className="flex flex-col min-h-screen">
      <Seo />
      <Header />
      <div className="flex-1">
        <div className="grid grid-cols-12" ref={ref}>
          <div className="col-span-3">
            <Sidebar />
          </div>
          <div className="col-span-9 p-6">
            <div>
              <h1 className="heading--h1 text-brand-blue mb-8">
                KrakenD - API Gateway
              </h1>
            </div>
            {children}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </main>
  );
}
export default Layout;

type LayoutProps = {
  children: React.ReactNode;
};
