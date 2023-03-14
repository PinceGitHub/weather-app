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
import useGlobal from "../../hooks/useGlobal";

const Appbar = () => {
  const global = useGlobal();

  const handleOnChangeUOM = (uom: any) => {
    global.setGlobalState((prev) => ({
      ...prev,
      uom,
    }));
  };

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
              value={global.globalState.uom}
              exclusive
              onChange={(e, v) => handleOnChangeUOM(v)}
              aria-label="Platform"
            >
              <UOMToggleButton value="C">&#8451;</UOMToggleButton>
              <UOMToggleButton value="F">&#8457;</UOMToggleButton>
            </ToggleButtonGroup>
          </UOMWrapper>
        </ToolbarWrapper>
      </Toolbar>
    </AppbarContainer>
  );
};

export default Appbar;
