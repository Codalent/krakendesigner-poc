import { createContext, useContext, useState } from "react";

const initialState: any = {
  loading: true,
  data: null,
  error: null,
  setLoading: (loading: boolean) => {},
  setData: (data: any) => {},
  setError: (error: any) => {},
};

const SchemaContext = createContext(initialState);
export const useSchemaContext = () => useContext(SchemaContext);

const SchemaContextProvider = ({ children }: any) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState(null);
  return (
    <SchemaContext.Provider
      value={{ loading, data, error, setLoading, setData, setError }}
    >
      {children}
    </SchemaContext.Provider>
  );
};

export default SchemaContextProvider;
