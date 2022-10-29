import Ether from "@components/atoms/Ether";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 80px 16px 80px 0px;
`;

const SectionWrapper = styled.div`
  margin-left: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SectionTitle = styled.span`
  font-size: 18px;
  font-family: Pretendard;
  font-weight: 700;
  color: #ffffff;
`;

const ShowAllText = styled.span`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.64);
  margin-right: 4px;
  font-family: Pretendard;
  font-weight: 400;
`;

const ScrollCardsWrapper = styled.div`
  margin-top: 24px;
  overflow-y: scroll;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const CardWrapper = styled.div`
  overflow: hidden;
  border-radius: 16px;
  display: inline-block;
  margin-left: 16px;
`;

const CardImage = styled.img`
  object-fit: contain;
  width: 150px;
  height: 150px;
  vertical-align: middle;
`;

const InfoBox = styled.div`
  padding: 16px;
  background-color: pink;
  width: 150px;
  height: 73px;
  background-color: #27272a;
`;

const PriceBox = styled.div`
  padding: 8px 16px 16px 16px;
  background-color: blue;
  width: 150px;
  background-color: #27272a;
`;

const CollectionTitle = styled.div`
  font-size: 12px;
  font-family: Pretendard;
  color: rgba(255, 255, 255, 0.64);
`;

const Title = styled.div`
  font-family: MarkPro-Heavy;
  font-weight: 800px;
  font-size: 14px;
  color: #ffffff;
  margin-top: 4px;
`;



const PriceTitle = styled.div`
  font-size: 10px;
  font-family: Pretendard;
  color: rgba(255, 255, 255, 0.64);
  font-weight: 700;
`;

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const PriceText = styled.div`
  font-family: MarkPro-Heavy;
  font-weight: 800px;
  font-size: 14px;
  color: #ffffff;
  margin-top: 4px;
  margin-left: 4px;
`;

function ItemsOnSale() {
  return (
    <Container>
      <SectionWrapper>
        <SectionTitle>지금 판매중인 아이템</SectionTitle>
        <ShowAllText>아이템 전체보기</ShowAllText>
      </SectionWrapper>
      <ScrollCardsWrapper>
        {[1, 2, 3, 4, 5, 6].map((_) => (
          <CardWrapper>
            <CardImage src="https://konkrit-prod-itemmedia-t837t51tz51i.s3.ap-northeast-2.amazonaws.com/0x1fec856e25f757fed06eb90548b0224e91095738/0x1fec856e25f757fed06eb90548b0224e91095738-6741.png" />
            <InfoBox>
              <CollectionTitle>FrankenPunks</CollectionTitle>
              <Title>#6741</Title>
            </InfoBox>
            <PriceBox>
              <PriceTitle>판매가</PriceTitle>
              <PriceWrapper>
                <Ether />
                <PriceText>0.1234</PriceText>
              </PriceWrapper>
            </PriceBox>
          </CardWrapper>
        ))}
      </ScrollCardsWrapper>
    </Container>
  );
}

export default ItemsOnSale;
