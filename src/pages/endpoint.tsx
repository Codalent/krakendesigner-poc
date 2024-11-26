import Accordion from "@/components/common/Accordion";
import Sidebar from "@/components/common/sidebar";
import localFont from "next/font/local";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

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

export default function endPoint() {
  const router = useRouter();
  const { data: endpoints } = useSelector((state: any) => state.endpoints);
  const [openEndpoint, setOpenEndpoint] = useState<any>(
    router.query?.target || null
  );

  const toggleAccordionHandler = (index: number) => {
    if (openEndpoint === index) {
      setOpenEndpoint(null);
      router.push("/endpoint");
    } else {
      router.push(`/endpoint?target=${index}`);
      setOpenEndpoint(index);
    }
  };

  // For toggle the Endpoint Accordion based on url change
  useEffect(() => {
    if (router.query?.target) setOpenEndpoint(+router.query?.target);
  }, [router.query]);

  return (
    <main
      className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)]`}
    >
      <div className="grid grid-cols-12 gap-6 h-full">
        <div className="col-span-3 h-full">
          <Sidebar />
        </div>
        <div className="col-span-9">
          <div>
            <h1>KrakenD - API Gateway</h1>
          </div>
          <div>
            {Object.values(endpoints).map((endpoint, index) => {
              return (
                <Accordion
                  title={endpoint.endpoint}
                  key={index}
                  index={index}
                  toggleAccordionHandler={toggleAccordionHandler}
                  isOpen={openEndpoint === index}
                >
                  Hello
                </Accordion>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
