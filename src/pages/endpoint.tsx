import Accordion from "@/components/common/Accordion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

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
    <div>
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
  );
}
