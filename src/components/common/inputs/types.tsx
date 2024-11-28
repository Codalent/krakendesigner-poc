import { ChangeEventHandler, SelectHTMLAttributes } from "react";

export interface InputProps {
  info?: string | React.ReactNode;
  inputClassName?: string;
  label: string;
  labelClassName?: string;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
  placeholder?: string;
  value: string;
  wrapperClassName?: string;
}

export interface SelectInputProps extends InputProps {
  options: { label: string; value: string }[];
}

export type SelectOptions = { value: string; label: string }[];
