import styled from "styled-components";
import useData from "@hooks/useData";
import Ether from "@components/atoms/Ether";

const Container = styled.ul`
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
  background-color: rgb(63 63 70);
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
  color: ${({ isPositive }) => (isPositive ? "#22c55e" : "#ef4444")};
`;

function CollectionList() {
  const { data, isLoading, isError } = useData(
    "http://localhost:3000/api/opensea-top-collections"
  );

  if (isLoading || !data) {
    return <div>로딩중</div>;
  }

  if (isError) {
    return <div>에러</div>;
  }
  const openseaCollections = data?.openseaCollections.slice(0, 5);

  return (
    <Container>
      {openseaCollections.map((collection, idx) => {
        const isPositiveVolumeChange = collection.oneDayVolumeChange > 0;
        return (
          <CollectionsItemWrapper key={collection.id}>
            <Collection>
              <RankText>{idx + 1}</RankText>
              <Thumbnail src={collection.imgUrl} />
              <CollectionName>{collection.name}</CollectionName>
            </Collection>
            <CollectionInfo>
              <NormalText>최저가</NormalText>
              <SecondChild>
                <PriceWrapper>
                  <Ether />
                  <PriceText>{collection.floorPrice}</PriceText>
                </PriceWrapper>
              </SecondChild>
              <NormalText>24h 거래량</NormalText>
              <PriceWrapper>
                <Ether />
                <PriceText>{collection.oneDayVolume}</PriceText>
              </PriceWrapper>
              <NumberText isPositive={isPositiveVolumeChange}>
                {isPositiveVolumeChange ? "+" : ""}
                {collection.oneDayVolumeChange}%
              </NumberText>
            </CollectionInfo>
          </CollectionsItemWrapper>
        );
      })}
    </Container>
  );
}

export default CollectionList;
