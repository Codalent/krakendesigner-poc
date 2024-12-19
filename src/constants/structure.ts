export const structureUI = {
  endpointInputUI: {
    selectedFields: [
      {
        fieldName: "endpoint",
        fieldLabel: "KrakenD Endpoint",
        fieldDescription:
          "<p>This is the URI your clients will connect to. Must start with slash. Use curly braces to insert <code>{endpoint_parameters}</code> that can be passed to the backends. URLs ending in <code>/*</code> are treated as wildcards.</p>",
      },
      {
        fieldName: "method",
        fieldLabel: "Method",
        fieldDescription: "<p>Method</p>",
      },
      {
        fieldName: "output_encoding",
        fieldLabel: "Output",
        fieldDescription: "<p>Encode response as...</p>",
      },
    ],
    showOtherFields: false,
  },
  backendRequestUI: {
    selectedFields: [
      {
        fieldName: "method",
        fieldLabel: "Method",
        fieldDescription: "",
      },
      {
        fieldName: "url_pattern",
        fieldLabel: "URL",
        fieldDescription:
          "<p>The endpoint of the backend server to query. Reuse here any <code>{parameters}</code> defined in the parent endpoint. Also see <a href='https://www.krakend.io/docs/enterprise/endpoints/dynamic-routing/' target='_blank'>Header routing</a></p>",
      },
      {
        fieldName: "encoding",
        fieldLabel: "Decode as:",
        fieldDescription: "<p>Encode response as...</p>",
      },
    ],
    showOtherFields: false,
  },
};
