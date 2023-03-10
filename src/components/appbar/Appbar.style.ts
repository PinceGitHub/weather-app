import { styled } from "@mui/material/styles";
import { AppBar, ToggleButton } from "@mui/material";

export const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: "#1d1d30",
}));

export const StyledToggleButton = styled(ToggleButton)(() => ({
  color: "white",
  "&.Mui-selected, &.Mui-selected:hover": {
    color: "white",
    backgroundColor: "#3f3f4f",
  },
}));
