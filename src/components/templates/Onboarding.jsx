import styled from "styled-components";
import OnBoardNft from "@assets/image/onboard_nft.png";
import OnBoardKonkrit from "@assets/image/onboard_konkrit.png";
import OnBoardWallet from "@assets/image/onboard_wallet.png";
import OnBoardFaq from "@assets/image/onboard_faq.png";
import SectionLayout from "../molecules/SectionLayout";
import SectionTop from "../molecules/SectionTop";

const OnBoardList = styled.ul`
  display: grid;
  margin-top: 24px;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`;

const OnBoardItemWrapper = styled.li``;

const OnBoardImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  margin-bottom: 8px;
`;

const OnBoardText = styled.div`
  font-size: 14px;

  font-weight: 500;
`;

function Onboarding() {
  return (
    <SectionLayout>
      <SectionTop
        title={"KONKRIT, 이렇게 사용하세요!"}
        showAll={"가이드 전체보기"}
      />
      <OnBoardList>
        <OnBoardItemWrapper>
          <OnBoardImage src={OnBoardNft} alt="nft" />
          <OnBoardText>NFT란?</OnBoardText>
        </OnBoardItemWrapper>
        <OnBoardItemWrapper>
          <OnBoardImage src={OnBoardKonkrit} alt="nft" />
          <OnBoardText>지갑 생성 및 연결하기</OnBoardText>
        </OnBoardItemWrapper>
        <OnBoardItemWrapper>
          <OnBoardImage src={OnBoardWallet} alt="nft" />
          <OnBoardText>KONKRIT 이용방법</OnBoardText>
        </OnBoardItemWrapper>
        <OnBoardItemWrapper>
          <OnBoardImage src={OnBoardFaq} alt="nft" />
          <OnBoardText>자주 묻는 질문</OnBoardText>
        </OnBoardItemWrapper>
      </OnBoardList>
    </SectionLayout>
  );
}

export default Onboarding;
