import { useState, useEffect } from "react";
import { Search as SearchIcon } from "@mui/icons-material";
import {
  SearchContainer,
  SearchIconWrapper,
  StyledAutoComplete,
  SearchInputField,
} from "./Search.style";
import data from "../../mock-data/searched-city-list";

type SearchType = {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
};

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState<Array<SearchType>>([]);

  useEffect(() => {
    try {
      if (searchText !== "" && searchText.length >= 3) {
        setSuggestions(data);
      }
    } catch (error: any) {
      alert(error.message);
    }
  }, [searchText]);

  return (
    <SearchContainer>
      <SearchIconWrapper sx={{ display: { xs: "none", sm: "block" } }}>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledAutoComplete
        freeSolo
        disableClearable
        options={suggestions.map((suggestion: SearchType) => {
          return `${suggestion.name}, ${suggestion.region}, ${suggestion.country}`;
        })}
        renderInput={(params) => (
          <SearchInputField
            onChange={(e) => setSearchText(e.currentTarget.value)}
            {...params}
            placeholder="Search City or Zip Code"
            InputProps={{
              ...params.InputProps,
            }}
          />
        )}
      />
    </SearchContainer>
  );
};

export default Search;
