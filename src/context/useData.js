import { createContext, useContext, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const initialData = {
    name: "Szymon",
    email: "wowow@gmail.com",
    isAdmin: true,
  };
  const [userData] = useState(initialData);

  return (
    <DataContext.Provider value={{ userData }}>{children}</DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (context === undefined || context === null) {
    throw new Error("DataContext must be used within a Provider");
  }
  return context;
};

export default DataContext;
