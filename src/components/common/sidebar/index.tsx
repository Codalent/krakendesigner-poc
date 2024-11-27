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
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const navigation = [
  { name: "Dashboard", href: "/", current: true },
  {
    name: "EndPoints",
    current: false,
    children: true,
  },
  { name: "Preview", href: "/preview", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  const dispatch = useDispatch<AppDispatch>();
  const { data: endpoints } = useSelector((state: any) => state.endpoints);
  const [currentEndpointTitleIndex, setEndpointTitleIndex] = useState<number>(
    endpoints.length
  );
  const addEndpointHandler = () => {
    const endPointObj = {
      ...endpointConstant,
      endpoint: `Endpoint ${currentEndpointTitleIndex + 1}`,
    };
    setEndpointTitleIndex(currentEndpointTitleIndex + 1);
    dispatch(addEndpoint(endPointObj));
  };

  return (
    <div className="flex grow flex-col gap-y-5 border-r pr-6 border-gray-200 py-6">
      <nav className="flex flex-1 flex-col">
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
                        "w-full flex cursor-pointer rounded-md py-2 pl-10 pr-2 text-sm/6 font-semibold"
                      )}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <Disclosure as="div">
                      <DisclosureButton
                        className={classNames(
                          item.current
                            ? "bg-brand-neutral-150 text-black"
                            : "hover:bg-gray-50 hover:text-black text-brand-neutral-50",
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
                              "hover:bg-brand-neutral-150",
                              "block w-full rounded-md py-2 pl-9 pr-2 font-medium text-sm/6 hover:bg-brand-neutral-150 hover:text-black text-brand-neutral-50"
                            )}
                            onClick={() => addEndpointHandler()}
                          >
                            + Add Endpoint
                          </button>
                        </li>
                        {endpoints.map((endpoint: any, index: number) => {
                          return (
                            <li key={index}>
                              <Link
                                href={`/endpoints?target=${index}`}
                                className="flex hover:bg-brand-neutral-150 cursor-pointer rounded-md py-2 pl-9 pr-2 text-sm/6 text-gray-700"
                              >
                                {endpoint.endpoint}
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
