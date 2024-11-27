import { endpointConstant } from "@/constants/krakend";
import { addEndpoint } from "@/store/slice/endpointsSlice";
import { AppDispatch } from "@/store/store";
import {
  faAngleLeft,
  faArrowsToEye,
  faDashboard,
  faEyeDropperEmpty,
  faEyeLowVision,
  faList,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pill from "../pill";
import getPillColor from "@/constants/pillColors";
import classNames from "@/utils/classNames";

const navigation = [
  { name: "Dashboard", href: "/", current: true, icon: faDashboard },
  {
    name: "EndPoints",
    current: false,
    children: true,
  },
  {
    name: "Preview",
    href: "/preview",
    current: false,
    icon: faArrowsToEye,
  },
];

export default function Sidebar() {
  const dispatch = useDispatch<AppDispatch>();
  const { data: endpoints } = useSelector((state: any) => state.endpoints);
  const [currentEndpointTitleIndex, setEndpointTitleIndex] = useState<number>(
    endpoints.length
  );
  const addEndpointHandler = () => {
    setEndpointTitleIndex(currentEndpointTitleIndex + 1);
    dispatch(addEndpoint(endpointConstant));
  };

  return (
    <div className="flex grow flex-col gap-y-5 border-r pr-6 border-gray-200 py-6 h-full">
      <nav className="sticky top-6">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  {!item.children ? (
                    <Link
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-brand-neutral-150 text-black/80"
                          : "hover:bg-gray-50 hover:text-black",
                        "w-full flex items-center gap-2 cursor-pointer rounded-md py-2 pl-10 pr-2 text-sm/6 font-semibold"
                      )}
                    >
                      {item.icon && <FontAwesomeIcon icon={item.icon} />}
                      <p>{item.name}</p>
                    </Link>
                  ) : (
                    <Disclosure as="div">
                      <DisclosureButton
                        className={classNames(
                          item.current
                            ? "bg-brand-neutral-150 text-black"
                            : "hover:bg-gray-50 hover:text-black text-brand-neutral-50",
                          "group flex w-full items-center gap-x-3 rounded-md py-2 pl-10 pr-2 text-left text-sm/6 font-semibold text-gray-700"
                        )}
                      >
                        <FontAwesomeIcon icon={faList} />
                        <p className="flex-1">{item.name}</p>
                        <FontAwesomeIcon
                          icon={faAngleLeft}
                          size="xs"
                          className="transition-transform group-data-[open]:-rotate-90"
                        />
                      </DisclosureButton>
                      <DisclosurePanel as="ul" className="space-y-1">
                        <li>
                          <button
                            className={classNames(
                              "hover:bg-brand-neutral-150",
                              "block w-full text-left rounded-md py-2 pl-14 pr-2 font-medium text-sm/6 hover:bg-brand-neutral-150 hover:text-black text-brand-neutral-700/70"
                            )}
                            onClick={() => addEndpointHandler()}
                          >
                            <FontAwesomeIcon icon={faPlus} /> Add Endpoint
                          </button>
                        </li>
                        {endpoints.map((endpoint: any, index: number) => {
                          return (
                            <li key={index}>
                              <Link
                                href={`/endpoints?target=${index}`}
                                className="flex gap-1.5 hover:bg-brand-neutral-150 cursor-pointer rounded-md py-2 pl-14 pr-2 text-sm/6 text-gray-700"
                              >
                                <Pill
                                  title={endpoint.method}
                                  size="small"
                                  color={getPillColor(endpoint.method)}
                                />
                                <span className="whitespace-nowrap overflow-hidden text-ellipsis flex-1">
                                  {endpoint.endpoint}
                                </span>
                              </Link>
                            </li>
                          );
                        })}
                      </DisclosurePanel>
                    </Disclosure>
                  )}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
