import { createContext, useState } from "react";
import LocationType from "../types/location";

type GlobalType = {
  uom: string;
  location: LocationType;
};

type GlobalProviderProps = {
  children: React.ReactNode;
};

type GlobalContextType = {
  globalState: GlobalType;
  setGlobalState: React.Dispatch<React.SetStateAction<GlobalType>>;
};

export const GlobalContext = createContext<GlobalContextType>(null!);

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [globalState, setGlobalState] = useState<GlobalType>({
    uom: "C",
    location: { city: "" },
  });

  return (
    <GlobalContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalContext.Provider>
  );
};
