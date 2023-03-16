import React, { Suspense, useState } from "react";
import {
  TabbarContainer,
  StyledTabs,
  StyledTab,
  HourlySkeletonContainer,
  HourlySkeleton,
} from "./Tabbar.style";
import Today from "../today/Today";
const Hourly = React.lazy(() => import("../hourly/Hourly"));

const Tabbar = () => {
  const [value, setValue] = useState(0);

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <TabbarContainer>
        <StyledTabs value={value} onChange={(e, v) => handleChange(v)} centered>
          <StyledTab label="Today" />
          <StyledTab label="Hourly" />
        </StyledTabs>
      </TabbarContainer>
      {value === 0 ? (
        <Today />
      ) : (
        <Suspense
          fallback={
            <HourlySkeletonContainer>
              <HourlySkeleton />
            </HourlySkeletonContainer>
          }
        >
          <Hourly />
        </Suspense>
      )}
    </>
  );
};

export default Tabbar;
