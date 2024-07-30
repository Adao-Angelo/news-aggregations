import { createContext, useContext, useState, ReactNode } from "react";

type FilterContextType = {
  filterUrl: string;
  setFilterUrl: (url: string) => void;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filterUrl, setFilterUrl] = useState("Angola news");

  return (
    <FilterContext.Provider value={{ filterUrl, setFilterUrl }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};
