import { createContext, useState, useEffect } from "react";
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

const city = Intl.DateTimeFormat().resolvedOptions().timeZone.split("/")[1];

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [globalState, setGlobalState] = useState<GlobalType>({
    uom: "C",
    location: { city },
  });

  useEffect(() => {
    const timeout = 6000;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        setGlobalState((prev) => ({
          ...prev,
          location: { city: prev.location.city, latitude, longitude },
        }));
      },
      null,
      { maximumAge: 0, timeout }
    );

    // eslint-disable-next-line
  }, []);

  return (
    <GlobalContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalContext.Provider>
  );
};
