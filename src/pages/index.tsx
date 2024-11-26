import Sidebar from "@/components/common/sidebar";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <main
      className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)]`}
    >
      <div className="grid grid-cols-12 gap-6 h-full">
        <div className="col-span-3 h-full">
          <Sidebar />
        </div>
        <div className="col-span-9">
          <h1>hello world</h1>
        </div>
      </div>
    </main>
  );
}
