import classNames from "@/utils/classNames";
import { useId, useRef } from "react";
import { InputProps } from "./types";

function Input(props: InputProps) {
  const {
    info,
    inputClassName,
    label,
    labelClassName,
    name,
    onChange,
    placeholder,
    value,
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
      <input
        placeholder={placeholder}
        value={value}
        name={name}
        id={id}
        className={classNames(inputClassName)}
        onChange={onChange}
      />
      {info && (
        <div
          className="text--sm font-normal my-2 text-brand-neutral-600"
          dangerouslySetInnerHTML={{ __html: info }}
        />
      )}
    </div>
  );
}

export default Input;
