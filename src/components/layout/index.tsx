import Sidebar from "../common/sidebar";
import Footer from "../footer";
import Header from "../header";

function Layout({ children }: LayoutProps) {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 container--boxed">
        <div className="grid grid-cols-12 h-full">
          <div className="col-span-3 h-full">
            <Sidebar />
          </div>
          <div className="col-span-9 pl-6 py-6">{children}</div>
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
