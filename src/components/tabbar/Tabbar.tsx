import { useState } from "react";
import { TabbarContainer, StyledTabs, StyledTab } from "./Tabbar.style";
import Today from "../today/Today";
import Hourly from "../hourly/Hourly";

const Tabbar = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <TabbarContainer>
        <StyledTabs value={value} onChange={handleChange} centered>
          <StyledTab label="Today" />
          <StyledTab label="Hourly" />
        </StyledTabs>
      </TabbarContainer>
      {value === 0 ? <Today /> : <Hourly />}
    </>
  );
};

export default Tabbar;
