import HomeContainerPadding from "@presentations/home/views/HomeContainerPadding";
import HomeContainer from "@presentations/home/views/HomeContainer";
import Navigation from "@presentations/home/views/Navigation";
import FirstBlock from "@presentations/home/views/FirstBlock";
import SecondBlock from "@presentations/home/views/SecondBlock";

function Home() {
  return (
    <>
      <HomeContainerPadding>
        <HomeContainer>
          <Navigation />
          <FirstBlock />
          <SecondBlock />
        </HomeContainer>
      </HomeContainerPadding>
    </>
  );
}

export default Home;
