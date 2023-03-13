import { HomeContainer } from "./Home.style";
import Appbar from "../components/appbar/Appbar";
import Tabbar from "../components/tabbar/Tabbar";
import Disclaimer from "../components/disclaimer/Disclaimer";

const Home = () => {
  return (
    <HomeContainer>
      <Disclaimer />
      <Appbar />
      <Tabbar />
    </HomeContainer>
  );
};

export default Home;
