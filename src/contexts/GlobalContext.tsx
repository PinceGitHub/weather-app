import LocationType from "../types/location";
import { createContext, useState, useEffect } from "react";
import { useQuery } from "react-query";
import { fetchWeatherData } from "../services/weather";
import useSnackbar from "../hooks/useSnackbar";

type GlobalType = {
  uom: string;
  location: LocationType;
  weatherData: any | null;
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
  const city = Intl.DateTimeFormat().resolvedOptions().timeZone.split("/")[1];

  //custom hook**********************************************************
  const snackbar = useSnackbar();

  //state****************************************************************
  const [globalState, setGlobalState] = useState<GlobalType>({
    uom: "C",
    location: { city },
    weatherData: null,
  });

  //fetch data************************************************************
  useQuery(
    [
      "weather",
      globalState.location.city,
      globalState.location.latitude,
      globalState.location.longitude,
    ],
    () => fetchWeatherData(globalState.location),
    {
      refetchOnWindowFocus: true,
      onSuccess: (resp) => {
        if (resp.success) {
          setGlobalState((prev) => ({
            ...prev,
            weatherData: resp.data,
          }));
        } else {
          snackbar({
            show: true,
            messageType: "error",
            message: resp.data.message,
          });
        }
      },
      onError: (error: any) => {
        snackbar({
          show: true,
          messageType: "error",
          message: error.message,
        });
      },
    }
  );

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
