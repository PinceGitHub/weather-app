import { styled } from "@mui/material/styles";
import {
  Box,
  Skeleton,
  CardHeader,
  Stack,
  CardContent,
  Typography,
  ListItem,
} from "@mui/material";

export const SkeletonContainer = styled(Box)(() => ({
  width: "80vw",
  height: "75vh",
  ml: "auto",
  mr: "auto",
  mt: 4,
}));

export const TodaySkeleton = styled(Skeleton)(() => ({
  width: "100%",
  height: "calc(100vh + 150px)",
  transformOrigin: "0 0%",
}));

export const TodayContainer = styled(Box)(() => ({
  marginLeft: "auto",
  marginRight: "auto",
  padding: "25px 0",
  width: "80vw",
}));

export const HeaderContainer = styled(CardHeader)(() => ({
  backgroundColor: "#3b3b56",
  color: "white",
}));

export const HeaderWrapper = styled(Stack)(() => ({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
}));

export const HeaderText = styled(Typography)(() => ({
  fontSize: "1.25rem",
  fontWeight: "500",
}));

export const SubHeadertext = styled(Typography)(() => ({
  fontSize: "0.8rem",
  fontWeight: "400",
}));

export const BodyContainer = styled(CardContent)(() => ({
  padding: "10px 15px",
  backgroundColor: "#7f7a8e",
  color: "white",
}));

export const BodyWrapper = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.up("sm")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

export const CurrentCondition = styled(Stack)(({ theme }) => ({
  flex: "1",
  flexDirection: "row",
  alignItems: "center",
  [theme.breakpoints.up("xs")]: {
    justifyContent: "center",
  },
  [theme.breakpoints.up("sm")]: {
    justifyContent: "center",
  },
  [theme.breakpoints.up("md")]: {
    justifyContent: "flex-start",
  },
}));

export const ConditionImg = styled("img")(() => ({
  height: "2.5rem",
  width: "2.5rem",
}));

export const ConditionText = styled(Typography)(() => ({
  fontWeight: "500",
  fontSize: "1.5rem",
  marginLeft: "5px",
}));

export const CurrentTemp = styled(Stack)(() => ({
  flex: "1",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
}));

export const Temp = styled(Typography)(() => ({
  fontWeight: "500",
  fontSize: "5rem",
}));

export const AstroWrapper = styled(Stack)(({ theme }) => ({
  flex: "1",
  [theme.breakpoints.up("xs")]: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
}));

export const AstroIconWrapper = styled(Stack)(() => ({
  flexDirection: "row",
  alignItems: "end",
  justifyContent: "space-between",
}));

export const AstroIcon = styled("img")(() => ({
  height: "2rem",
  width: "2rem",
}));

export const IconText = styled(Typography)(() => ({
  fontWeight: "500",
  fontSize: "1rem",
  marginLeft: "10px",
}));

export const ListContainer = styled(Box)(() => ({
  flex: "1",
}));

export const ListIconItem = styled(ListItem)(() => ({
  justifyContent: "space-between",
  borderBottom: "1px solid",
}));

export const IconWrapper = styled(Stack)(() => ({
  flexDirection: "row",
  alignItems: "end",
  justifyContent: "space-between",
}));
