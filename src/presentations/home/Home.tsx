import HomeContainerPadding from "@presentations/home/views/HomeContainerPadding";
import HomeContainer from "@presentations/home/views/HomeContainer";
import Navigation from "@presentations/home/views/Navigation";
import FirstBlock from "@presentations/home/views/FirstBlock";
import SecondBlock from "@presentations/home/views/SecondBlock";
import ThirdBlock from "./views/ThirdBlock";

function Home() {
  return (
    <>
      <HomeContainerPadding>
        <HomeContainer>
          <Navigation />
          <FirstBlock />
          <SecondBlock />
          <ThirdBlock />
        </HomeContainer>
      </HomeContainerPadding>
    </>
  );
}

export default Home;
