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
  SkeletonContainer,
  HourlySkeleton,
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
import useGlobal from "../../hooks/useGlobal";
import useSnackbar from "../../hooks/useSnackbar";
import { useState, useEffect } from "react";
import dateTimeUtils from "../../utils/date-time-utils";

//types****************************************************
type HourlyHeaderType = {
  name: string;
  region: string;
  country: string;
  localTime: string;
};

type HourlyItemType = {
  epoch: number;
  time: string;
  temp: number;
  conditionText: string;
  conditionIcon: string;
  chanceOfRain: number;
  windDir: string;
  wind: number;
  windUOM: string;
  feelsLike: number;
  humidity: number;
  pressure: number;
  pressureUOM: string;
  precipitation: number;
  precipitationUOM: string;
  cloud: number;
  uv: number;
};

type HourlyType = {
  header: HourlyHeaderType;
  items: Array<HourlyItemType>;
};

const Hourly = () => {
  //custom hooks***********************************************************
  const global = useGlobal().globalState;
  const snackbar = useSnackbar();

  //states*****************************************************************
  const [weatherData, setWeatherData] = useState<HourlyType | null>(null);

  //effect*****************************************************************
  useEffect(() => {
    if (global.weatherData) {
      try {
        const location = global.weatherData.location;
        const hour = global.weatherData.forecast.forecastday[0].hour;
        const hourlyItems: Array<HourlyItemType> = [];

        hour.forEach((value: any) => {
          if (
            new Date(value.time).getHours() >=
            new Date(location.localtime).getHours()
          ) {
            hourlyItems.push({
              epoch: value.time_epoch,
              time: dateTimeUtils(value.time).current_time,
              temp: global.uom === "C" ? value.temp_c : value.temp_f,
              conditionText: value.condition.text,
              conditionIcon: value.condition.icon,
              chanceOfRain: value.will_it_rain,
              windDir: value.wind_dir,
              wind: global.uom === "C" ? value.wind_kph : value.wind_mph,
              windUOM: global.uom === "C" ? "kph" : "mph",
              feelsLike:
                global.uom === "C" ? value.feelslike_c : value.feelslike_f,
              humidity: value.humidity,
              pressure:
                global.uom === "C" ? value.pressure_mb : value.pressure_in,
              pressureUOM: global.uom === "C" ? "mb" : "in",
              precipitation:
                global.uom === "C" ? value.precip_mm : value.precip_in,
              precipitationUOM: global.uom === "C" ? "mm" : "in",
              cloud: value.cloud,
              uv: value.uv,
            });
          }
        });

        setWeatherData({
          header: {
            name: location.name,
            region: location.region,
            country: location.country,
            localTime: location.localtime,
          },
          items: hourlyItems,
        });
      } catch (error: any) {
        snackbar({
          show: true,
          messageType: "error",
          message: error.message,
        });
      }
    }
    // eslint-disable-next-line
  }, [
    global.uom,
    global.location.city,
    global.location.latitude,
    global.location.longitude,
    global.weatherData,
  ]);

  return !weatherData ? (
    <SkeletonContainer>
      <HourlySkeleton />
    </SkeletonContainer>
  ) : (
    <HourlyContainer>
      <Card>
        <HeaderContainer
          title={
            <HeaderWrapper>
              <HeaderText>{`${weatherData.header.name}, ${weatherData.header.region}, ${weatherData.header.country}`}</HeaderText>
              <SubHeadertext>{`As of ${weatherData.header.localTime} (localtime)`}</SubHeadertext>
            </HeaderWrapper>
          }
        />
        <BodyContainer>
          {weatherData.items.map((value, index) => {
            return (
              <Accordion key={value.epoch}>
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls={`panel${index}a-content`}
                  id={`panel${index}a-header`}
                >
                  <SummaryWrapper>
                    <Typography flex="1">{value.time}</Typography>
                    <SummaryTemp flex="1">{`${value.temp}°`}</SummaryTemp>
                    <SummaryIconWrapper flex="1">
                      <SummaryImg
                        src={value.conditionIcon}
                        alt={value.conditionText}
                        title={value.conditionText}
                      />
                      <Typography
                        display={{ xs: "none", sm: "none", md: "inline-block" }}
                      >
                        {value.conditionText}
                      </Typography>
                    </SummaryIconWrapper>
                    <SummaryIconWrapper flex="1">
                      <Umbrella />
                      <Typography>{`${value.chanceOfRain}%`}</Typography>
                    </SummaryIconWrapper>
                    <SummaryIconWrapper flex="1">
                      <Air />
                      <Typography>{`${value.windDir} ${value.wind} ${value.windUOM}`}</Typography>
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
                          <IconText>{`${value.feelsLike}°`}</IconText>
                        </DetailIconWrapper>
                      </DetailItem>
                      <DetailItem>
                        <Opacity sx={{ mr: 1 }} />
                        <DetailIconWrapper>
                          <Typography>Humidity</Typography>
                          <IconText>{`${value.humidity}%`}</IconText>
                        </DetailIconWrapper>
                      </DetailItem>
                      <DetailItem>
                        <Compress sx={{ mr: 1 }} />
                        <DetailIconWrapper>
                          <Typography>Pressure</Typography>
                          <IconText>{`${value.pressure} ${value.pressureUOM}`}</IconText>
                        </DetailIconWrapper>
                      </DetailItem>
                    </DetailTop>

                    <DetailBottom>
                      <DetailItem>
                        <Thunderstorm sx={{ mr: 1 }} />
                        <DetailIconWrapper>
                          <Typography>Precipitation</Typography>
                          <IconText>{`${value.precipitation} ${value.precipitationUOM}`}</IconText>
                        </DetailIconWrapper>
                      </DetailItem>
                      <DetailItem>
                        <Cloud sx={{ mr: 1 }} />
                        <DetailIconWrapper>
                          <Typography>Cloud Cover</Typography>
                          <IconText>{`${value.cloud}%`}</IconText>
                        </DetailIconWrapper>
                      </DetailItem>
                      <DetailItem>
                        <Brightness5 sx={{ mr: 1 }} />
                        <DetailIconWrapper>
                          <Typography>UV Index</Typography>
                          <IconText>{`${value.uv} of 10`}</IconText>
                        </DetailIconWrapper>
                      </DetailItem>
                    </DetailBottom>
                  </DetailWrapper>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </BodyContainer>
      </Card>
    </HourlyContainer>
  );
};

export default Hourly;
