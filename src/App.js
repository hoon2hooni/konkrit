import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
const Header = styled.header`
  width: 100%;
  height: 64px;
  background-color: red;
`;

const TopBanner = styled.div`
  width: 100%;
  height: 400px;
  background-color: green;
`;

const Events = styled.div`
  width: 100%;
  height: 398px;
  background-color: pink;
`;

const ItemsOnSale = styled.div`
  width: 100%;
  height: 394px;
  background-color: blue;
`;

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
      <Header>헤더</Header>
      <TopBanner>캐러셀 </TopBanner>
      <Events>카운트다운</Events>
      <ItemsOnSale>판매중인 아이템</ItemsOnSale>
      <OpenseaTopCollections>오픈시 탑 컬랙션</OpenseaTopCollections>
      <Onboarding>온보딩</Onboarding>
      <Footer>푸터</Footer>
    </>
  );
}

export default App;
