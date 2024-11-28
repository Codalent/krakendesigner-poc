declare type Methods = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

declare type KrakendConfig = {
  $schema: string;
  cache_ttl: string;
  name: string;
  output_encoding: string;
  timeout: string;
  endpoints?: {
    endpoint: string;
    method: Methods;
    output_encoding: string;
    backend: [
      {
        url_pattern: string;
        encoding: string;
        sd: string;
        method: Methods;
      }
    ];
  }[];
}

declare type SelectOptions = { value: string; label: string }[];
declare type PillColors = "danger" | "success" | "warning" | "info" | "default"