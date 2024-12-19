import Accordion from "@/components/common/Accordion";
import FlexibleLayout from "@/components/common/FlexibleLayout";
import Pill from "@/components/common/pill";
import getPillColor from "@/constants/pillColors";
import { structureUI } from "@/constants/structure";
import { useSchemaContext } from "@/context/schemaContext";
import { RootState } from "@/store/slice";
import { removeEndpoint, updateEndpoint } from "@/store/slice/endpointsSlice";
import { AppDispatch } from "@/store/store";
import { deepCopy } from "@/utils";
import { extractFieldsData } from "@/utils/extractData";
import { faInfoCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const EndPointPage = () => {
  const router = useRouter();
  const data = useSchemaContext().data.properties.endpoints;
  const dispatch = useDispatch<AppDispatch>();
  const { data: endpoints } = useSelector((s: RootState) => s.endpoints);
  const [krakendEndpoints, setKrakendEndpoints] = useState(endpoints);
  const [openEndpoint, setOpenEndpoint] = useState<any>(
    router.query?.target || null
  );

  const toggleAccordionHandler = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    index: number
  ) => {
    e.preventDefault();
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

  const fields = extractFieldsData(
    structureUI.endpointInputUI.selectedFields,
    data.items.properties
  );

  const backedRequestFields = extractFieldsData(
    structureUI.backendRequestUI.selectedFields,
    data.items.properties.backend.items.properties
  );

  return (
    <div className="space-y-5">
      {krakendEndpoints.map((endpoint: any, index: number) => {
        return (
          <Accordion
            key={index}
            index={index}
            endpoint={endpoint}
            toggleAccordionHandler={toggleAccordionHandler}
            deleteEndPointHandler={deleteEndPointHandler}
            isOpen={openEndpoint === index}
          >
            <div className="border-t p-2.5">
              <div>
                <p className="inline">
                  Endpoints are the paths of the <b> API contract</b> you are
                  about to create for someone else to rely on.
                </p>
                <a
                  href="https://www.krakend.io/docs/enterprise/endpoints/"
                  target="_blank"
                  className="inline ml-1.5"
                >
                  Introduction to endpoints
                </a>
              </div>

              <div className="grid grid-cols-12 gap-6 mt-4">
                {fields.map((singleField, fieldIndex) => {
                  return (
                    <FlexibleLayout
                      key={fieldIndex}
                      fieldData={singleField}
                      value={endpoint[singleField.fieldName]}
                      onChange={(e: any) => {
                        updatedEndpointDataHandler(
                          index,
                          singleField.fieldName,
                          e.target.value
                        );
                      }}
                    />
                  );
                })}
              </div>

              <div className="my-8 border" />

              <div>
                <h2 className="heading--h3 font-medium mb-5">
                  Backends (Upstream) for <code>{endpoint.endpoint}</code>
                </h2>
                <div className="border rounded border-brand-blue">
                  <div className="flex items-center gap-4 bg-brand-blue text-white p-3">
                    <Pill
                      title={endpoint.backend[0].method}
                      color={getPillColor(endpoint.backend[0].method)}
                    />
                    <div className="flex-1 flex items-center justify-between">
                      <p>{endpoint.backend[0].url_pattern}</p>
                      <button className="text-white hover:text-opacity-70 py-1 px-2.5 hover:bg-black/10 rounded-md transition">
                        <FontAwesomeIcon icon={faTrash} size="xs" />
                      </button>
                    </div>
                  </div>
                  <div className="p-2.5">
                    <ul className="flex border-b">
                      <li>
                        <p
                          className="px-4 py-2.5 text-sm font-bold text-brand-neutral-700 border-t-4 border-t-brand-blue bg-white border-r"
                          style={{ marginBottom: "-1px" }}
                        >
                          Request
                        </p>
                      </li>
                      <li>
                        <button className="px-4 py-2.5 text-sm font-bold text-brand-blue">
                          Response manipulation
                        </button>
                      </li>
                      <li>
                        <button className="px-4 py-2.5 text-sm font-bold text-brand-blue">
                          Throttling
                        </button>
                      </li>
                      <li>
                        <button className="px-4 py-2.5 text-sm font-bold text-brand-blue">
                          Connectivity
                        </button>
                      </li>
                      <li>
                        <button className="px-4 py-2.5 text-sm font-bold text-brand-blue">
                          Authentication
                        </button>
                      </li>
                      <li>
                        <button className="px-4 py-2.5 text-sm font-bold text-brand-blue">
                          Policies
                        </button>
                      </li>
                    </ul>

                    <div className="border-t-4 py-2 px-1.5 my-6 bg-blue-200 flex items-center gap-2">
                      <FontAwesomeIcon
                        icon={faInfoCircle}
                        className="text-brand-blue-500"
                      />
                      <p>
                        The request options define how KrakenD interacts with
                        the upstream service.
                      </p>
                    </div>

                    <div className="border rounded border-brand-blue">
                      <div className="flex items-center gap-4 bg-brand-blue text-white p-3">
                        <p className="text--lg">Connection</p>
                      </div>
                      <div className="p-2.5 grid grid-cols-12 gap-6 mt-4">
                        {backedRequestFields.map((singleField, fieldIndex) => {
                          return (
                            <FlexibleLayout
                              key={fieldIndex}
                              fieldData={singleField}
                              value={endpoint.backend[0][singleField.fieldName]}
                              onChange={(e: any) => {
                                updateEndpointBackendHandler(
                                  index,
                                  singleField.fieldName,
                                  e.target.value
                                );
                              }}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Accordion>
        );
      })}
    </div>
  );
};

export default EndPointPage;
