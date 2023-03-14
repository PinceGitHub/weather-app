import {
  SkeletonContainer,
  TodaySkeleton,
  TodayContainer,
  HeaderContainer,
  HeaderWrapper,
  HeaderText,
  SubHeadertext,
  BodyContainer,
  BodyWrapper,
  CurrentCondition,
  ConditionImg,
  ConditionText,
  CurrentTemp,
  Temp,
  AstroWrapper,
  AstroIconWrapper,
  AstroIcon,
  IconText,
  ListContainer,
  ListIconItem,
  IconWrapper,
} from "./Today.style";
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
import Sunrise from "./icons/sunrise.svg";
import Sunset from "./icons/sunset.svg";
import useGlobal from "../../hooks/useGlobal";
import useSnackbar from "../../hooks/useSnackbar";
import { useState } from "react";
import { useQuery } from "react-query";
import { Card, List } from "@mui/material";
import { fetchWeatherData } from "../../services/weather";

//types****************************************************
type TodayType = {
  name: string;
  region: string;
  country: string;
  latitude: number;
  longitude: number;
  localTime: string;
  conditionText: string;
  conditionIcon: string;
  sunrise: string;
  sunset: string;
  moonPhase: string;
  humidity: number;
  cloud: number;
  uv: number;
  temp: number;
  pressure: number;
  pressureUOM: string;
  visibility: number;
  visibilityUOM: string;
  wind: number;
  windUOM: string;
  maxTemp: number;
  minTemp: number;
};

const Today = () => {
  //custom hooks***********************************************************
  const global = useGlobal().globalState;
  const snackbar = useSnackbar();

  //states*****************************************************************
  const [weatherData, setWeatherData] = useState<TodayType | null>(null);

  //success callback*******************************************************
  const handleOnSuccess = (data: any) => {
    try {
      const location = data.location;
      const current = data.current;
      const day = data.forecast.forecastday[0].day;
      const astro = data.forecast.forecastday[0].astro;

      setWeatherData({
        name: location.name,
        region: location.region,
        country: location.country,
        latitude: location.lat,
        longitude: location.lon,
        localTime: location.localtime,
        conditionText: current.condition.text,
        conditionIcon: current.condition.icon,
        sunrise: astro.sunrise,
        sunset: astro.sunset,
        moonPhase: astro.moon_phase,
        humidity: current.humidity,
        cloud: current.cloud,
        uv: current.uv,
        temp: global.uom === "C" ? current.temp_c : current.temp_f,
        pressure:
          global.uom === "C" ? current.pressure_mb : current.pressure_in,
        pressureUOM: global.uom === "C" ? "mb" : "in",
        visibility: global.uom === "C" ? current.vis_km : current.vis_miles,
        visibilityUOM: global.uom === "C" ? "km" : "miles",
        wind: global.uom === "C" ? current.wind_kph : current.wind_mph,
        windUOM: global.uom === "C" ? "kph" : "mph",
        maxTemp: global.uom === "C" ? day.maxtemp_c : day.maxtemp_f,
        minTemp: global.uom === "C" ? day.mintemp_c : day.mintemp_f,
      });
    } catch (error: any) {
      snackbar({
        show: true,
        messageType: "error",
        message: error.message,
      });
    }
  };

  //fetch data*************************************************************
  useQuery(
    ["today-weather", global],
    () => {
      return fetchWeatherData(global.location);
    },
    {
      onSuccess: (resp) => {
        if (resp.success) {
          handleOnSuccess(resp.data);
        } else {
          snackbar({
            show: true,
            messageType: "error",
            message: resp.data.message,
          });
        }
      },
      onError: (error: any) => {
        snackbar({
          show: true,
          messageType: "error",
          message: error.message,
        });
      },
    }
  );

  return !weatherData ? (
    <SkeletonContainer>
      <TodaySkeleton />
    </SkeletonContainer>
  ) : (
    <TodayContainer>
      <Card>
        <HeaderContainer
          title={
            <HeaderWrapper>
              <HeaderText>{`${weatherData.name}, ${weatherData.region}, ${weatherData.country}`}</HeaderText>
              <SubHeadertext>{`As of ${weatherData.localTime} (localtime)`}</SubHeadertext>
            </HeaderWrapper>
          }
        />
        <BodyContainer>
          <BodyWrapper>
            <CurrentCondition>
              <ConditionImg
                src={weatherData.conditionIcon}
                alt={weatherData.conditionText}
                title={weatherData.conditionText}
              />
              <ConditionText>{weatherData.conditionText}</ConditionText>
            </CurrentCondition>
            <CurrentTemp>
              <Temp>{`${weatherData.temp}°`}</Temp>
            </CurrentTemp>
            <AstroWrapper>
              <AstroIconWrapper>
                <AstroIcon src={Sunrise} alt="Sunrise" title="Sunrise" />
                <IconText>{weatherData.sunrise}</IconText>
              </AstroIconWrapper>
              <AstroIconWrapper mt="5px">
                <AstroIcon src={Sunset} alt="Sunset" title="Sunset" />
                <IconText>{weatherData.sunset}</IconText>
              </AstroIconWrapper>
            </AstroWrapper>
          </BodyWrapper>
        </BodyContainer>
      </Card>
      <Card sx={{ mt: 2 }}>
        <HeaderContainer
          title={
            <HeaderWrapper>
              <HeaderText>
                {`Weather today in ${weatherData.name}, ${weatherData.region}, ${weatherData.country}`}
              </HeaderText>
            </HeaderWrapper>
          }
        />
        <BodyContainer>
          <BodyWrapper>
            <ListContainer sx={{ mr: { md: 2 } }}>
              <List>
                <ListIconItem>
                  <IconWrapper>
                    <Thermostat />
                    <IconText>High / Low</IconText>
                  </IconWrapper>
                  <IconText>
                    {`${weatherData.maxTemp}° / ${weatherData.minTemp}°`}
                  </IconText>
                </ListIconItem>
                <ListIconItem>
                  <IconWrapper>
                    <Opacity />
                    <IconText>Humidity</IconText>
                  </IconWrapper>
                  <IconText>{`${weatherData.humidity}%`}</IconText>
                </ListIconItem>
                <ListIconItem>
                  <IconWrapper>
                    <Compress />
                    <IconText>Pressure</IconText>
                  </IconWrapper>
                  <IconText>
                    {`${weatherData.pressure} ${weatherData.pressureUOM}`}
                  </IconText>
                </ListIconItem>
                <ListIconItem>
                  <IconWrapper>
                    <Visibility />
                    <IconText>Visibility</IconText>
                  </IconWrapper>
                  <IconText>
                    {`${weatherData.visibility} ${weatherData.visibilityUOM}`}
                  </IconText>
                </ListIconItem>
              </List>
            </ListContainer>
            <ListContainer>
              <List>
                <ListIconItem>
                  <IconWrapper>
                    <Air />
                    <IconText>Wind</IconText>
                  </IconWrapper>
                  <IconText>{`${weatherData.wind} ${weatherData.windUOM}`}</IconText>
                </ListIconItem>
                <ListIconItem>
                  <IconWrapper>
                    <Cloud />
                    <IconText>Cloud Cover</IconText>
                  </IconWrapper>
                  <IconText>{`${weatherData.cloud}%`}</IconText>
                </ListIconItem>
                <ListIconItem>
                  <IconWrapper>
                    <Brightness5 />
                    <IconText>UV Index</IconText>
                  </IconWrapper>
                  <IconText>{`${weatherData.uv} of 10`}</IconText>
                </ListIconItem>
                <ListIconItem>
                  <IconWrapper>
                    <Brightness2 />
                    <IconText>Phase</IconText>
                  </IconWrapper>
                  <IconText>{weatherData.moonPhase}</IconText>
                </ListIconItem>
              </List>
            </ListContainer>
          </BodyWrapper>
        </BodyContainer>
      </Card>
    </TodayContainer>
  );
};

export default Today;
