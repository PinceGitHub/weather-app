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
  StyledListItem,
} from "./Today.style";
import { Card, Stack, Typography, Box, List } from "@mui/material";
import Sunrise from "./icons/sunrise.svg";
import Sunset from "./icons/sunset.svg";
import {
  Air,
  Brightness2,
  Brightness5,
  Cloud,
  Compress,
  Opacity,
  Thermostat,
  Visibility,
} from "@mui/icons-material";

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
      <Card sx={{ mt: 2 }}>
        <StyledCardHeader
          title={
            <Stack
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              flexWrap="wrap"
            >
              <HeaderText>
                Weather today in Bareilly, Uttar Pradesh, India
              </HeaderText>
            </Stack>
          }
        />
        <StyledCardContent>
          <Stack flexDirection={{ md: "row", sm: "column", xs: "column" }}>
            <Box flex="1" sx={{ mr: { md: 2 } }}>
              <List>
                <StyledListItem>
                  <Stack
                    flexDirection="row"
                    alignItems="end"
                    justifyContent="space-between"
                  >
                    <Thermostat />
                    <StyledTypography>High / Low</StyledTypography>
                  </Stack>
                  <StyledTypography>36.1° / 15.9°</StyledTypography>
                </StyledListItem>
                <StyledListItem>
                  <Stack
                    flexDirection="row"
                    alignItems="end"
                    justifyContent="space-between"
                  >
                    <Opacity />
                    <StyledTypography>Humidity</StyledTypography>
                  </Stack>
                  <StyledTypography>14%</StyledTypography>
                </StyledListItem>
                <StyledListItem>
                  <Stack
                    flexDirection="row"
                    alignItems="end"
                    justifyContent="space-between"
                  >
                    <Compress />
                    <StyledTypography>Pressure</StyledTypography>
                  </Stack>
                  <StyledTypography>1011 mb</StyledTypography>
                </StyledListItem>
                <StyledListItem>
                  <Stack
                    flexDirection="row"
                    alignItems="end"
                    justifyContent="space-between"
                  >
                    <Visibility />
                    <StyledTypography>Visibility</StyledTypography>
                  </Stack>
                  <StyledTypography>10 km</StyledTypography>
                </StyledListItem>
              </List>
            </Box>
            <Box flex="1">
              <List>
                <StyledListItem>
                  <Stack
                    flexDirection="row"
                    alignItems="end"
                    justifyContent="space-between"
                  >
                    <Air />
                    <StyledTypography>Wind</StyledTypography>
                  </Stack>
                  <StyledTypography>11.2 kph</StyledTypography>
                </StyledListItem>
                <StyledListItem>
                  <Stack
                    flexDirection="row"
                    alignItems="end"
                    justifyContent="space-between"
                  >
                    <Cloud />
                    <StyledTypography>Cloud Cover</StyledTypography>
                  </Stack>
                  <StyledTypography>0%</StyledTypography>
                </StyledListItem>
                <StyledListItem>
                  <Stack
                    flexDirection="row"
                    alignItems="end"
                    justifyContent="space-between"
                  >
                    <Brightness5 />
                    <StyledTypography>UV Index</StyledTypography>
                  </Stack>
                  <StyledTypography>8 of 10</StyledTypography>
                </StyledListItem>
                <StyledListItem>
                  <Stack
                    flexDirection="row"
                    alignItems="end"
                    justifyContent="space-between"
                  >
                    <Brightness2 />
                    <StyledTypography>Phase</StyledTypography>
                  </Stack>
                  <StyledTypography>Waning Gibbous</StyledTypography>
                </StyledListItem>
              </List>
            </Box>
          </Stack>
        </StyledCardContent>
      </Card>
    </TodayContainer>
  );
};

export default Today;
