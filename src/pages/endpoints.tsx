import EndPointPage from "@/components/pages/endpoint";
import React from "react";
import { useSchemaContext } from "@/context/schemaContext";

const Endpoint = () => {
  const { data } = useSchemaContext();
  if (!data) return null;
  return <EndPointPage />;
};

export default Endpoint;
