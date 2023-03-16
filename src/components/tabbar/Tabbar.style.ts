import { styled } from "@mui/material/styles";
import { Box, Tabs, Tab, Skeleton } from "@mui/material";

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

export const HourlySkeletonContainer = styled(Box)(() => ({
  width: "80vw",
  height: "75vh",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "32px",
}));

export const HourlySkeleton = styled(Skeleton)(() => ({
  width: "100%",
  height: "calc(100vh + 150px)",
  transformOrigin: "0 0%",
}));
