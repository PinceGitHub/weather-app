import { useState, useEffect } from "react";
import { Search as SearchIcon } from "@mui/icons-material";
import {
  SearchWrapper,
  SearchIconWrapper,
  SearchAutoComplete,
  SearchInputField,
} from "./Search.style";
import useGlobal from "../../hooks/useGlobal";
import useSnackbar from "../../hooks/useSnackbar";
import { fetchCities } from "../../services/weather";

//types*************************************
type SearchType = {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
};

const Search = () => {
  //custom hooks***************************************
  const global = useGlobal();
  const snackbar = useSnackbar();

  //states*************************************************
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<Array<SearchType>>([]);

  //search cities********************************************
  const searchCities = async () => {
    if (searchTerm.length >= 3) {
      try {
        const resp = await fetchCities(searchTerm);

        if (resp.success) {
          setSuggestions(resp.data);
        } else {
          snackbar({
            show: true,
            messageType: "error",
            message: resp.data.message,
          });
        }
      } catch (error: any) {
        snackbar({
          show: true,
          messageType: "error",
          message: error.message,
        });
      }
    } else if (searchTerm.length < 3 && suggestions.length > 0) {
      setSuggestions([]);
    }
  };

  //effects*****************************************
  useEffect(() => {
    const handleSearchCities = setTimeout(async () => {
      await searchCities();
    }, 2000);

    return () => clearTimeout(handleSearchCities);
    // eslint-disable-next-line
  }, [searchTerm]);

  //select city********************************************
  const handleSelectCity = (value: any) => {
    global.setGlobalState((prev) => ({
      ...prev,
      location: {
        city: value.name,
        latitude: value.lat,
        longitude: value.lon,
      },
    }));
  };

  return (
    <SearchWrapper>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <SearchAutoComplete
        freeSolo
        disableClearable
        options={suggestions}
        getOptionLabel={(option: any) =>
          `${option.name}, ${option.region}, ${option.country}`
        }
        onChange={(e, v) => handleSelectCity(v)}
        renderInput={(params) => (
          <SearchInputField
            {...params}
            placeholder="Search City or Zip Code"
            InputProps={{
              ...params.InputProps,
            }}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        )}
      />
    </SearchWrapper>
  );
};

export default Search;
