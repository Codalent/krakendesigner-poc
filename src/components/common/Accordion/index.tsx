import getPillColor from "@/constants/pillColors";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useEffect, useRef, useState } from "react";
import Pill from "../pill";
import { AccordionProps } from "./types";

const Accordion: FC<AccordionProps> = ({
  toggleAccordionHandler,
  index,
  isOpen,
  children,
  endpoint,
  deleteEndPointHandler,
}) => {
  const faqRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (faqRef.current) {
      if (isOpen) {
        setHeight(`${faqRef.current.scrollHeight}px`);
      } else {
        setHeight("0px");
      }
    }
  }, [isOpen]);

  return (
    <div className="border rounded shadow-sm border-t-4 border-t-brand-blue flex flex-col bg-white">
      <div className="px-4 py-3 flex items-center justify-between gap-4 min-h-20 sm:min-h-[auto]">
        <a
          href="#"
          className="text--xl font-normal"
          onClick={(e) => toggleAccordionHandler(e, index)}
        >
          {endpoint.endpoint}
        </a>
        <ul className="inline-flex gap-2.5 items-center">
          <li>
            <Pill title={endpoint.output_encoding} />
          </li>
          <li>
            <Pill
              title={endpoint.method}
              color={getPillColor(endpoint.method)}
            />
          </li>
          <li>
            <button
              onClick={() => deleteEndPointHandler(index)}
              className="text-brand-neutral-700 hover:text-opacity-70 py-1 px-2.5 hover:bg-black/10 rounded-md transition"
            >
              <FontAwesomeIcon icon={faTrash} size="xs" />
            </button>
          </li>
        </ul>
      </div>
      <div
        ref={faqRef}
        style={{ height: height }}
        className="transition-all duration-300 h-full overflow-hidden"
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
