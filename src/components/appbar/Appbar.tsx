import { useState } from "react";
import { Toolbar, ToggleButtonGroup } from "@mui/material";
import {
  AppbarContainer,
  ToolbarWrapper,
  AppTitle,
  SearchContainer,
  UOMWrapper,
  UOMToggleButton,
} from "./Appbar.style";
import Search from "../search/Search";

const Appbar = () => {
  const [selectedUOM, setSelectedUOM] = useState("celcius");

  return (
    <AppbarContainer>
      <Toolbar>
        <ToolbarWrapper>
          <AppTitle variant="h6" noWrap>
            Weather App
          </AppTitle>
          <SearchContainer>
            <Search />
          </SearchContainer>
          <UOMWrapper>
            <ToggleButtonGroup
              value={selectedUOM}
              exclusive
              onChange={(e, v) => setSelectedUOM(v)}
              aria-label="Platform"
            >
              <UOMToggleButton value="celcius">&#8451;</UOMToggleButton>
              <UOMToggleButton value="farhenite">&#8457;</UOMToggleButton>
            </ToggleButtonGroup>
          </UOMWrapper>
        </ToolbarWrapper>
      </Toolbar>
    </AppbarContainer>
  );
};

export default Appbar;
