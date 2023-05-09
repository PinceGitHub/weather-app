import { styled } from "@mui/material/styles";
import { AppBar, Stack, Typography, Box, ToggleButton } from "@mui/material";
import { CloudCircle } from "@mui/icons-material";

export const AppbarContainer = styled(AppBar)(() => ({
  position: "static",
  backgroundColor: "#362e4d",
}));

export const ToolbarWrapper = styled(Stack)(() => ({
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const AppTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    display: "none",
  },
  [theme.breakpoints.up("sm")]: {
    flex: "1",
    display: "block",
  },
}));

export const AppIcon = styled(CloudCircle)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    display: "block",
    flex: "0.5",
  },
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export const SearchContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    flex: "3",
  },
  [theme.breakpoints.up("sm")]: {
    flex: "1",
  },
}));

export const UOMWrapper = styled(Stack)(({ theme }) => ({
  flex: "1",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-end",
  [theme.breakpoints.up("xs")]: {
    marginLeft: "5px",
  },
}));

export const UOMToggleButton = styled(ToggleButton)(() => ({
  color: "white",
  "&.Mui-selected, &.Mui-selected:hover": {
    color: "white",
    backgroundColor: "#544d68",
  },
}));
