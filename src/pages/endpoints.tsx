import Accordion from "@/components/common/Accordion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deepCopy } from "@/utils";
import { removeEndpoint, updateEndpoint } from "@/store/slice/endpointsSlice";
import { AppDispatch } from "@/store/store";

export default function endPoint() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { data: endpoints } = useSelector((state: any) => state.endpoints);

  const [krakendEndpoints, setKrakendEndpoints] = useState(endpoints);
  const [openEndpoint, setOpenEndpoint] = useState<any>(
    router.query?.target || null
  );

  const toggleAccordionHandler = (index: number) => {
    if (openEndpoint === index) {
      setOpenEndpoint(null);
      router.push("/endpoints");
    } else {
      router.push(`/endpoints?target=${index}`);
      setOpenEndpoint(index);
    }
  };

  const updatedEndpointDataHandler = (
    index: number,
    key: string,
    value: any
  ) => {
    const endpointsCopy = deepCopy(endpoints);
    endpointsCopy[index][key] = value;
    setKrakendEndpoints(endpointsCopy);
    dispatch(updateEndpoint(endpointsCopy));
  };
  const updateEndpointBackendHandler = (
    index: number,
    key: string,
    value: any
  ) => {
    const endpointsCopy = deepCopy(endpoints);
    endpointsCopy[index].backend[0][key] = value;
    setKrakendEndpoints(endpointsCopy);
    dispatch(updateEndpoint(endpointsCopy));
  };

  const deleteEndPointHandler = (index: any) => {
    dispatch(removeEndpoint(index));
  };

  // For toggle the Endpoint Accordion based on url change
  useEffect(() => {
    if (router.query?.target) setOpenEndpoint(+router.query?.target);
  }, [router.query]);

  // for copy the items to local state
  useEffect(() => {
    setKrakendEndpoints(endpoints);
  }, [endpoints.length]);

  return (
    <div>
      <div>
        <h1>KrakenD - API Gateway</h1>
      </div>
      <div>
        {krakendEndpoints.map((endpoint: any, index: number) => {
          return (
            <Accordion
              title={endpoint.endpoint}
              key={index}
              index={index}
              toggleAccordionHandler={toggleAccordionHandler}
              isOpen={openEndpoint === index}
            >
              <div>
                <label htmlFor={`endpoint-${index}`}>KrakenD Endpoint</label>
                <input
                  id={`endpoint-${index}`}
                  value={endpoint.endpoint}
                  onChange={(e: any) =>
                    updatedEndpointDataHandler(
                      index,
                      "endpoint",
                      e.target.value
                    )
                  }
                />
              </div>
              <div>
                <label htmlFor={`method-${index}`}>Method</label>
                <select
                  name="method"
                  id={`method-${index}`}
                  value={endpoint.method}
                  onChange={(e: any) =>
                    updatedEndpointDataHandler(index, "method", e.target.value)
                  }
                >
                  <option value="GET">GET</option>
                  <option value="POST">POST</option>
                  <option value="PUT">PUT</option>
                  <option value="PATCH">PATCH</option>
                  <option value="DELETE">DELETE</option>
                </select>
              </div>
              <div>
                <label htmlFor="output_encoding">Output</label>
                <select
                  name="output_encoding"
                  value={endpoint.output_encoding}
                  id="output_encoding"
                  onChange={(e: any) =>
                    updatedEndpointDataHandler(
                      index,
                      "output_encoding",
                      e.target.value
                    )
                  }
                >
                  <option value="json">JSON object</option>
                  <option value="json-collection">JSON object</option>
                  <option value="fast-json">Fast JSON (EE)</option>
                  <option value="negotiate">Negotiate content</option>
                  <option value="string">String (text/plain)</option>
                  <option value="no-op">No-op (just proxy)</option>
                </select>
              </div>
              <button onClick={() => deleteEndPointHandler(index)}>
                Delete Endpoint
              </button>
              <div className="mt-28">
                <h2>Backend</h2>
                <div>
                  <div>
                    <label htmlFor={`method-be-${index}`}>Method</label>
                    <select
                      name="method"
                      id={`method-be-${index}`}
                      value={endpoint.backend[0].method}
                      onChange={(e: any) =>
                        updateEndpointBackendHandler(
                          index,
                          "method",
                          e.target.value
                        )
                      }
                    >
                      <option value="GET">GET</option>
                      <option value="POST">POST</option>
                      <option value="PUT">PUT</option>
                      <option value="PATCH">PATCH</option>
                      <option value="DELETE">DELETE</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor={`endpoint-be-${index}`}>
                      KrakenD Endpoint
                    </label>
                    <input
                      id={`endpoint-be-${index}`}
                      name="url_pattern"
                      value={endpoint.backend[0].url_pattern}
                      onChange={(e: any) =>
                        updateEndpointBackendHandler(
                          index,
                          "url_pattern",
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor="output_encoding">Decode as:</label>
                    <select
                      name="encoding"
                      id="output_encoding"
                      value={endpoint.backend[0].encoding}
                      onChange={(e: any) =>
                        updateEndpointBackendHandler(
                          index,
                          "encoding",
                          e.target.value
                        )
                      }
                    >
                      <option value="json">JSON object</option>
                      <option value="xml">XML</option>
                      <option value="rss">RSS</option>
                      <option value="string">String</option>
                      <option value="no-op">No-Op (Leave as is)</option>
                    </select>
                  </div>
                </div>
              </div>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
}
