import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const preview = () => {
  const { data: endpoints } = useSelector((state: any) => state.endpoints);
  const [previewObj, setPreviewObj] = useState({});

  const createPreviewObjHandler = () => {
    const baseObject: any = {
      $schema: "https://www.krakend.io/schema/krakend.json",
      version: 3,
      name: "KrakenD - API Gateway",
      timeout: "3000ms",
      cache_ttl: "300s",
    };
    if (endpoints.length > 0) {
      baseObject["endpoints"] = endpoints;
    }
    setPreviewObj(baseObject);
  };

  useEffect(() => {
    createPreviewObjHandler();
  }, [endpoints]);

  return (
    <div>
      <pre>{JSON.stringify(previewObj, null, 2)}</pre>
    </div>
  );
};

export default preview;
