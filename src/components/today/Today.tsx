import {
  TodayContainer,
  StyledCardHeader,
  HeaderText,
  SubHeadertext,
  StyledCardContent,
  ConditionImg,
  ConditionText,
  StyledImg,
  StyledTypography,
} from "./Today.style";
import { Card, Stack, Typography } from "@mui/material";
import Sunrise from "./icons/sunrise.svg";
import Sunset from "./icons/sunset.svg";

const Today = () => {
  return (
    <TodayContainer>
      <Card>
        <StyledCardHeader
          title={
            <Stack
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              flexWrap="wrap"
            >
              <HeaderText>Bareilly, Uttar Pradesh, India</HeaderText>
              <SubHeadertext>2023-03-11 11:13</SubHeadertext>
            </Stack>
          }
        />
        <StyledCardContent>
          <Stack flexDirection={{ md: "row", sm: "column", xs: "column" }}>
            <Stack
              flex="1"
              flexDirection="row"
              alignItems="center"
              justifyContent={{ md: "flex-start", sm: "center", xs: "center" }}
            >
              <ConditionImg
                src="//cdn.weatherapi.com/weather/64x64/day/113.png"
                alt="Sunny"
                title="Sunny"
              />
              <ConditionText>Sunny</ConditionText>
            </Stack>
            <Stack
              flex="1"
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
            >
              <Typography sx={{ fontWeight: "500", fontSize: "5rem" }}>
                34.9°
              </Typography>
            </Stack>
            <Stack
              flex="1"
              flexDirection={{ md: "column", sm: "row", xs: "column" }}
              alignItems={{ md: "flex-end", sm: "center", xs: "center" }}
              justifyContent={{
                md: "center",
                sm: "space-evenly",
                xs: "center",
              }}
            >
              <Stack
                flexDirection="row"
                alignItems="end"
                justifyContent="space-between"
              >
                <StyledImg src={Sunrise} alt="Sunrise" title="Sunrise" />
                <StyledTypography>05:50 AM</StyledTypography>
              </Stack>
              <Stack
                flexDirection="row"
                alignItems="end"
                justifyContent="space-between"
                mt="5px"
              >
                <StyledImg src={Sunset} alt="Sunset" title="Sunset" />
                <StyledTypography>05:44 PM</StyledTypography>
              </Stack>
            </Stack>
          </Stack>
        </StyledCardContent>
      </Card>
    </TodayContainer>
  );
};

export default Today;
