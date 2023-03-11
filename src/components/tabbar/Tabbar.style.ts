import { styled } from "@mui/material/styles";
import { Box, Tabs, Tab } from "@mui/material";

export const TabbarContainer = styled(Box)(() => ({
  "&": {
    width: "100%",
    backgroundColor: "#7a748b",
  },
}));

export const StyledTabs = styled(Tabs)(() => ({
  "& .MuiTabs-indicator": {
    backgroundColor: "white",
  },
}));

export const StyledTab = styled(Tab)(() => ({
  "&": {
    color: "white",
  },
  "&.Mui-selected": {
    color: "white",
  },
}));
