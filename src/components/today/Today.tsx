import { Card, List } from "@mui/material";
import {
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

const Today = () => {
  return (
    <TodayContainer>
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
          <BodyWrapper>
            <CurrentCondition>
              <ConditionImg
                src="//cdn.weatherapi.com/weather/64x64/day/113.png"
                alt="Sunny"
                title="Sunny"
              />
              <ConditionText>Sunny</ConditionText>
            </CurrentCondition>
            <CurrentTemp>
              <Temp>34.9°</Temp>
            </CurrentTemp>
            <AstroWrapper>
              <AstroIconWrapper>
                <AstroIcon src={Sunrise} alt="Sunrise" title="Sunrise" />
                <IconText>05:50 AM</IconText>
              </AstroIconWrapper>
              <AstroIconWrapper mt="5px">
                <AstroIcon src={Sunset} alt="Sunset" title="Sunset" />
                <IconText>05:44 PM</IconText>
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
                Weather today in Bareilly, Uttar Pradesh, India
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
                  <IconText>36.1° / 15.9°</IconText>
                </ListIconItem>
                <ListIconItem>
                  <IconWrapper>
                    <Opacity />
                    <IconText>Humidity</IconText>
                  </IconWrapper>
                  <IconText>14%</IconText>
                </ListIconItem>
                <ListIconItem>
                  <IconWrapper>
                    <Compress />
                    <IconText>Pressure</IconText>
                  </IconWrapper>
                  <IconText>1011 mb</IconText>
                </ListIconItem>
                <ListIconItem>
                  <IconWrapper>
                    <Visibility />
                    <IconText>Visibility</IconText>
                  </IconWrapper>
                  <IconText>10 km</IconText>
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
                  <IconText>11.2 kph</IconText>
                </ListIconItem>
                <ListIconItem>
                  <IconWrapper>
                    <Cloud />
                    <IconText>Cloud Cover</IconText>
                  </IconWrapper>
                  <IconText>0%</IconText>
                </ListIconItem>
                <ListIconItem>
                  <IconWrapper>
                    <Brightness5 />
                    <IconText>UV Index</IconText>
                  </IconWrapper>
                  <IconText>8 of 10</IconText>
                </ListIconItem>
                <ListIconItem>
                  <IconWrapper>
                    <Brightness2 />
                    <IconText>Phase</IconText>
                  </IconWrapper>
                  <IconText>Waning Gibbous</IconText>
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
