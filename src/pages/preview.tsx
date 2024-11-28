import { RootState } from "@/store/slice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const preview = () => {
  const { data: endpoints } = useSelector(
    (state: RootState) => state.endpoints
  );
  const config = useSelector((state: RootState) => state.config);
  const [previewObj, setPreviewObj] = useState({});

  const createPreviewObjHandler = () => {
    const krakendConfig: KrakendConfig = { ...config };
    if (endpoints.length > 0) {
      krakendConfig["endpoints"] = endpoints;
    }
    setPreviewObj(krakendConfig);
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
