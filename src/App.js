import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import Header from "@components/templates/Header";
import TopBanner from "@components/templates/TopBanner";
import Events from "@components/templates/Events";
import ItemsOnSale from "@components/templates/ItemsOnSale";

const OpenseaTopCollections = styled.div`
  width: 100%;
  height: 648px;
  background-color: dodgerblue;
`;

const Onboarding = styled.div`
  height: 415px;
  background-color: teal;
  margin-bottom: 100px;
`;

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
      <OpenseaTopCollections>오픈시 탑 컬랙션</OpenseaTopCollections>
      <Onboarding>온보딩</Onboarding>
      <Footer>푸터</Footer>
    </>
  );
}

export default App;
