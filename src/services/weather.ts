import { request } from "../utils/axios-utils";
import LocationType from "../types/location";

export const fetchWeatherData = (location: LocationType) => {
  const q = !(location.latitude && location.longitude)
    ? location.city
    : `${location.latitude},${location.longitude}`;
  const days = 1;
  const lang = "en";

  return request("/forecast.json", { q, days, lang });
};

export const fetchCities = (searchTerm: string) => {
  return request("/search.json", { q: searchTerm });
};
