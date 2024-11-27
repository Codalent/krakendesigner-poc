export const endpointConstant = {
  endpoint: "/v1/abatable-flower/{id_flower}",
  method: "GET",
  output_encoding: "json",
  backend: [
    {
      url_pattern: "/",
      encoding: "json",
      sd: "static",
      method: "GET",
    },
  ],
};
