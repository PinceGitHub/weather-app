import {
  Card,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import {
  HourlyContainer,
  HeaderContainer,
  HeaderWrapper,
  HeaderText,
  SubHeadertext,
  BodyContainer,
  SummaryWrapper,
  SummaryTemp,
  SummaryIconWrapper,
  SummaryImg,
  DetailWrapper,
  DetailTop,
  DetailBottom,
  DetailItem,
  DetailIconWrapper,
  IconText,
} from "./Hourly.style";
import {
  Air,
  ExpandMore,
  Umbrella,
  Brightness5,
  Cloud,
  Compress,
  Opacity,
  Thermostat,
  Thunderstorm,
} from "@mui/icons-material";

const Hourly = () => {
  return (
    <HourlyContainer>
      <Card>
        <HeaderContainer
          title={
            <HeaderWrapper>
              <HeaderText>Bareilly, Uttar Pradesh, India</HeaderText>
              <SubHeadertext>As of 2023-03-11 11:13</SubHeadertext>
            </HeaderWrapper>
          }
        />
        <BodyContainer>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <SummaryWrapper>
                <Typography>10:00 AM</Typography>
                <SummaryTemp>32.5°</SummaryTemp>
                <SummaryIconWrapper>
                  <SummaryImg
                    src="//cdn.weatherapi.com/weather/64x64/day/113.png"
                    alt="Sunny"
                    title="Sunny"
                  />
                  <Typography>Sunny</Typography>
                </SummaryIconWrapper>
                <SummaryIconWrapper>
                  <Umbrella />
                  <Typography>0%</Typography>
                </SummaryIconWrapper>
                <SummaryIconWrapper>
                  <Air />
                  <Typography>N 5 kph</Typography>
                </SummaryIconWrapper>
              </SummaryWrapper>
            </AccordionSummary>
            <AccordionDetails>
              <DetailWrapper>
                <DetailTop>
                  <DetailItem>
                    <Thermostat sx={{ mr: 1 }} />
                    <DetailIconWrapper>
                      <Typography>Feels Like</Typography>
                      <IconText>32.5°</IconText>
                    </DetailIconWrapper>
                  </DetailItem>
                  <DetailItem>
                    <Opacity sx={{ mr: 1 }} />
                    <DetailIconWrapper>
                      <Typography>Humidity</Typography>
                      <IconText>10%</IconText>
                    </DetailIconWrapper>
                  </DetailItem>
                  <DetailItem>
                    <Compress sx={{ mr: 1 }} />
                    <DetailIconWrapper>
                      <Typography>Pressure</Typography>
                      <IconText>1011 mb</IconText>
                    </DetailIconWrapper>
                  </DetailItem>
                </DetailTop>

                <DetailBottom>
                  <DetailItem>
                    <Thunderstorm sx={{ mr: 1 }} />
                    <DetailIconWrapper>
                      <Typography>Precipitation</Typography>
                      <IconText>0 mm</IconText>
                    </DetailIconWrapper>
                  </DetailItem>
                  <DetailItem>
                    <Cloud sx={{ mr: 1 }} />
                    <DetailIconWrapper>
                      <Typography>Cloud Cover</Typography>
                      <IconText>2</IconText>
                    </DetailIconWrapper>
                  </DetailItem>
                  <DetailItem>
                    <Brightness5 sx={{ mr: 1 }} />
                    <DetailIconWrapper>
                      <Typography>UV Index</Typography>
                      <IconText>9 of 10</IconText>
                    </DetailIconWrapper>
                  </DetailItem>
                </DetailBottom>
              </DetailWrapper>
            </AccordionDetails>
          </Accordion>
        </BodyContainer>
      </Card>
    </HourlyContainer>
  );
};

export default Hourly;
