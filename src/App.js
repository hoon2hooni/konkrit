import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import Header from "@components/templates/Header";
import TopBanner from "@components/templates/TopBanner";
import Events from "@components/templates/Events";
import ItemsOnSale from "@components/templates/ItemsOnSale";
import OpenseaTopCollctions from "@components/templates/OpenseaTopCollections";
import Onboarding from "@components/templates/Onboarding";

const Footer = styled.footer`
  height: 240px;
  width: 100%;
  background-color: floralwhite;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <TopBanner></TopBanner>
      <Events></Events>
      <ItemsOnSale />
      <OpenseaTopCollctions />
      <Onboarding>온보딩</Onboarding>
      <Footer>푸터</Footer>
    </>
  );
}

export default App;
