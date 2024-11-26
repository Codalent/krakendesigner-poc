import { FC, useEffect, useRef, useState } from "react";
import { AccordionProps } from "./types";

const Accordion: FC<AccordionProps> = ({
  toggleAccordionHandler,
  index,
  isOpen,
  title,
  children,
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
    <div
      className={`flex flex-col border border-solid rounded-lg`}
      style={{ borderColor: "#04041f1f" }}
    >
      <div
        className={`cursor-pointer px-4 py-3 flex items-center justify-between gap-4 min-h-20 sm:min-h-[auto]`}
        onClick={() => toggleAccordionHandler(index)}
      >
        <p className="text--lg text-brand-neutral-700">{title}</p>
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
