import { endpointConstant } from "@/constants/krakend";
import { addEndpoint } from "@/store/slice/endpointsSlice";
import { AppDispatch } from "@/store/store";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  {
    name: "EndPoints",
    current: false,
    children: true,
  },
  { name: "Preview", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  const dispatch = useDispatch<AppDispatch>();
  const { data: endpoints } = useSelector((state: any) => state.endpoints);
  const router = useRouter();
  const addEndpointHandler = () => {
    const noOfEndpoints = Object.keys(endpoints).length;
    const endPointObj = {
      ...endpointConstant,
      endpoint: `Endpoint ${noOfEndpoints + 1}`,
    };
    dispatch(addEndpoint({ index: noOfEndpoints, data: endPointObj }));
  };

  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  {!item.children ? (
                    <button
                      className={classNames(
                        item.current ? "bg-gray-50" : "hover:bg-gray-50",
                        "block cursor-pointer rounded-md py-2 pl-10 pr-2 text-sm/6 font-semibold text-gray-700"
                      )}
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Disclosure as="div">
                      <DisclosureButton
                        className={classNames(
                          item.current ? "bg-gray-50" : "hover:bg-gray-50",
                          "group flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm/6 font-semibold text-gray-700"
                        )}
                      >
                        <ChevronRightIcon
                          aria-hidden="true"
                          className="size-5 shrink-0 text-gray-400 group-data-[open]:rotate-90 group-data-[open]:text-gray-500"
                        />
                        {item.name}
                      </DisclosureButton>
                      <DisclosurePanel as="ul" className="mt-1 px-2">
                        <li>
                          <button
                            className={classNames(
                              "hover:bg-gray-50",
                              "block w-full rounded-md py-2 pl-9 pr-2 text-sm/6 text-gray-700"
                            )}
                            onClick={() => addEndpointHandler()}
                          >
                            Add Endpoint
                          </button>
                        </li>
                        {Object.values(endpoints).map(
                          (endpoint: any, index: number) => {
                            return (
                              <li key={index}>
                                <Link
                                  href={`/endpoint?target=${endpoint.id}`}
                                  className="block hover:bg-gray-400 cursor-pointer rounded-md py-2 pl-9 pr-2 text-sm/6 text-gray-700"
                                >
                                  {endpoint.endpoint}
                                </Link>
                              </li>
                            );
                          }
                        )}
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
