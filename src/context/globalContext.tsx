// src/contexts/GlobalContext.tsx
import React, { createContext, useState, useContext, ReactNode } from "react";

interface GlobalContextType {
  pageState: any; // Define a more specific type based on your state structure
  storePageState: (page: string, state: any) => void; // Adjust the type of state as needed
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [pageState, setPageState] = useState({});

  const storePageState = (page: string, state: any) => {
    setPageState((prevState) => ({ ...prevState, [page]: state }));
  };

  return (
    <GlobalContext.Provider value={{ pageState, storePageState }}>
      {children}
    </GlobalContext.Provider>
  );
};
