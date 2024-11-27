import classNames from "@/utils/classNames";
import { useId, useRef } from "react";
import { SelectInputProps } from "./types";

function Select(props: SelectInputProps) {
  const {
    info,
    label,
    labelClassName,
    name,
    onChange,
    options,
    wrapperClassName,
  } = props;

  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className={classNames(wrapperClassName)}>
      <label
        htmlFor={id}
        className={classNames(labelClassName, "block mb-2 font-bold text--sm")}
      >
        {label}
      </label>
      <select name={name} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value}>{option.label}</option>
        ))}
      </select>
      {info && (
        <p className="text--sm font-normal my-2 text-brand-neutral-600">
          {info}
        </p>
      )}
    </div>
  );
}

export default Select;
