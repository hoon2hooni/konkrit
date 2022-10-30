import GlobalStyle from "./GlobalStyle";
import Header from "@components/templates/Header";
import TopBanner from "@components/templates/TopBanner";
import Events from "@components/templates/Events";
import ItemsOnSale from "@components/templates/ItemsOnSale";
import OpenseaTopCollections from "@components/templates/OpenseaTopCollections";
import Onboarding from "@components/templates/Onboarding";
import Footer from "@components/templates/Footer";


function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <TopBanner></TopBanner>
      <Events></Events>
      <ItemsOnSale />
      <OpenseaTopCollections />
      <Onboarding></Onboarding>
      <Footer></Footer>
    </>
  );
}

export default App;
