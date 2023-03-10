import {
  Toolbar,
  Typography,
  Stack,
  Box,
  ToggleButtonGroup,
} from "@mui/material";
import { StyledAppBar, StyledToggleButton } from "./Appbar.style";
import Search from "../search/Search";
import { useState } from "react";

const Appbar = () => {
  const [selectedUOM, setSelectedUOM] = useState("celcius");

  return (
    <StyledAppBar>
      <Toolbar>
        <Stack
          width="100%"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            flex="1"
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Weather App
          </Typography>
          <Box flex={{ xs: "3", sm: "1" }}>
            <Search />
          </Box>
          <Stack
            flex="1"
            ml={{ xs: "5px" }}
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-end"
          >
            <ToggleButtonGroup
              value={selectedUOM}
              exclusive
              onChange={(e, v) => setSelectedUOM(v)}
              aria-label="Platform"
            >
              <StyledToggleButton value="celcius">&#8451;</StyledToggleButton>
              <StyledToggleButton value="farhenite">&#8457;</StyledToggleButton>
            </ToggleButtonGroup>
          </Stack>
        </Stack>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Appbar;
