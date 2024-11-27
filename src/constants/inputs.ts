import { SelectOptions } from "@/components/common/inputs/types";

const methodsOptions: SelectOptions = [
  {
    value: "GET",
    label: "GET",
  },
  {
    value: "POST",
    label: "POST",
  },
  {
    value: "PUT",
    label: "PUT",
  },
  {
    value: "PATCH",
    label: "PATCH",
  },
  {
    value: "DELETE",
    label: "DELETE",
  },
];

const outputEncodingOptions: SelectOptions = [
  {
    label: "JSON",
    value: "json",
  },
  {
    label: "JSON",
    value: "JSON object",
  },
  {
    label: "Fast JSON(EE)",
    value: "fast-json",
  },
  {
    label: "Negotiate content",
    value: "negotiate",
  },
  {
    label: "String(text / plain)",
    value: "string",
  },
  {
    label: "No - op(just proxy)",
    value: "no-op",
  },
];

const backendOutputEncodingOptions: SelectOptions = [
  {
    value: "json",
    label: "JSON object",
  },
  {
    value: "xml",
    label: "XML",
  },
  {
    value: "rss",
    label: "RSS",
  },
  {
    value: "string",
    label: "String",
  },
  {
    value: "no-op",
    label: "No-Op (Leave as is)",
  },
];

export { methodsOptions, outputEncodingOptions, backendOutputEncodingOptions };
