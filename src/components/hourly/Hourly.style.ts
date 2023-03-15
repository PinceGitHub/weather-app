import { styled } from "@mui/material/styles";
import {
  Box,
  Skeleton,
  Stack,
  CardHeader,
  CardContent,
  Typography,
} from "@mui/material";

export const SkeletonContainer = styled(Box)(() => ({
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

export const HourlyContainer = styled(Box)(() => ({
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
}));

export const SummaryWrapper = styled(Stack)(() => ({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
  width: "100%",
}));

export const SummaryTemp = styled(Typography)(() => ({
  fontWeight: "700",
}));

export const SummaryIconWrapper = styled(Stack)(() => ({
  flexDirection: "row",
  alignItems: "center",
}));

export const SummaryImg = styled("img")(() => ({
  height: "2.5rem",
  width: "2.5rem",
}));

export const DetailWrapper = styled(Stack)(() => ({
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "flex-start",
  border: "2px solid lightgray",
  borderRadius: "5px",
  padding: "16px",
}));

export const DetailTop = styled(Stack)(() => ({
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
  width: "100%",
}));

export const DetailBottom = styled(Stack)(() => ({
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
  width: "100%",
  marginTop: "16px",
}));

export const DetailItem = styled(Stack)(() => ({
  flex: "1",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  marginRight: "8px",
  marginTop: "8px",
}));

export const DetailIconWrapper = styled(Stack)(() => ({
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
}));

export const IconText = styled(Typography)(() => ({
  fontWeight: "700",
}));
