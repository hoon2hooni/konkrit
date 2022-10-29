import styled from "styled-components";
import Ether from "@components/atoms/Ether";
const Container = styled.div`
  width: 100%;

  padding: 40px 16px;
`;

const SectionWrapper = styled.div`
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

const CollectionsList = styled.ul`
  margin-top: 16px;
`;

const CollectionsItemWrapper = styled.li`
  padding: 12px 16px;
  border-bottom: 1px solid rgb(39 39 42);
`;

const Collection = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const CollectionInfo = styled.div`
  height: 60px;

  padding: 0px 28px;
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
`;

const RankText = styled.span`
  font-family: MarkPro-Heavy;
  font-weight: 800;
  size: 14px;
  color: #ffd121;
`;

const Thumbnail = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 24px;
`;

const CollectionName = styled.span`
  font-family: Pretendard;
  font-weight: 500;
  color: #ffffff;
  margin-left: 12px;
`;

const PriceWrapper = styled.div`
  display: flex;
`;

const PriceText = styled.div`
  font-family: MarkPro-Heavy;
  font-weight: 800px;
  font-size: 14px;
  color: #ffffff;
  margin-left: 4px;
`;

const NormalText = styled.span`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.64);
`;

const SecondChild = styled.div`
  grid-column: span 2;
`;

const NumberText = styled(NormalText)`
  color: #22c55e;
`;

function OpenseaTopCollctions() {
  return (
    <Container>
      <SectionWrapper>
        <SectionTitle>많이 거래된 컬렉션</SectionTitle>
        <ShowAllText>오픈씨 데이터 기준</ShowAllText>
      </SectionWrapper>
      <CollectionsList>
        {[1, 2, 3, 4, 5].map((rank) => (
          <CollectionsItemWrapper>
            <Collection>
              <RankText>{rank}</RankText>
              <Thumbnail src="https://konkrit-prod-collectionmedia-156cyqu7bx316.s3.ap-northeast-2.amazonaws.com/main/0x209e639a0ec166ac7a1a4ba41968fa967db30221.png" />
              <CollectionName>Genuine Undead</CollectionName>
            </Collection>
            <CollectionInfo>
              <NormalText>최저가</NormalText>
              <SecondChild>
                <PriceWrapper>
                  <Ether />
                  <PriceText>0.1234</PriceText>
                </PriceWrapper>
              </SecondChild>
              <NormalText>24h 거래량</NormalText>
              <PriceWrapper>
                <Ether />
                <PriceText>0.1234</PriceText>
              </PriceWrapper>
              <NumberText>+5.7%</NumberText>
            </CollectionInfo>
          </CollectionsItemWrapper>
        ))}
      </CollectionsList>
    </Container>
  );
}

export default OpenseaTopCollctions;
