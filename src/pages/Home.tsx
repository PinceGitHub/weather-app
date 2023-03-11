import { HomeContainer } from "./Home.style";
import Appbar from "../components/appbar/Appbar";
import Tabbar from "../components/tabbar/Tabbar";

const Home = () => {
  return (
    <HomeContainer>
      <Appbar />
      <Tabbar />
    </HomeContainer>
  );
};

export default Home;
