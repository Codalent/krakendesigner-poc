import { useSchemaContext } from "@/context/schemaContext";
import krakendSchema from "@/public/json/krakend.json";
import $RefParser from "@apidevtools/json-schema-ref-parser";
import { useEffect } from "react";

const ActionCall = () => {
  const { setData, setLoading } = useSchemaContext();

  const krakendSchemaHandler = async () => {
    setLoading(true);
    const dereferencedSchema = await $RefParser.dereference(krakendSchema);
    setData(dereferencedSchema);
    setLoading(false);
  };

  useEffect(() => {
    krakendSchemaHandler();
  }, []);
  return null;
};

export default ActionCall;
