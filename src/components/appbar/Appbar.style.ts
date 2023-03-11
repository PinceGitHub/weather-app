import { styled } from "@mui/material/styles";
import { AppBar, ToggleButton } from "@mui/material";

export const StyledAppBar = styled(AppBar)(() => ({
  position: "static",
  backgroundColor: "#362e4d",
}));

export const StyledToggleButton = styled(ToggleButton)(() => ({
  color: "white",
  "&.Mui-selected, &.Mui-selected:hover": {
    color: "white",
    backgroundColor: "#544d68",
  },
}));
