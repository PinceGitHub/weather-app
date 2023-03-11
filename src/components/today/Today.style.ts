import { styled } from "@mui/material/styles";
import { Box, CardHeader, CardContent, Typography } from "@mui/material";

export const TodayContainer = styled(Box)(() => ({
  margin: "25px auto 0 auto",
  width: "80vw",
}));

export const StyledCardHeader = styled(CardHeader)(() => ({
  backgroundColor: "#3b3b56",
  color: "white",
}));

export const HeaderText = styled(Typography)(() => ({
  fontSize: "1.25rem",
  fontWeight: "500",
}));

export const SubHeadertext = styled(Typography)(() => ({
  fontSize: "0.8rem",
  fontWeight: "400",
}));

export const StyledCardContent = styled(CardContent)(() => ({
  padding: "10px 15px",
  backgroundColor: "#7f7a8e",
  color: "white",
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

export const StyledImg = styled("img")(() => ({
  height: "2rem",
  width: "2rem",
}));

export const StyledTypography = styled(Typography)(() => ({
  fontWeight: "500",
  fontSize: "1rem",
  marginLeft: "10px",
}));
