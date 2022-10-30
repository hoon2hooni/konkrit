import styled from "styled-components";
import Ether from "@components/atoms/Ether";
import useData from "@hooks/useData";
import HideScrollX from "@components/atoms/HideScrollX";
import * as colors from "@styles/colors";

const CardWrapper = styled.div`
  overflow: hidden;
  border-radius: 16px;
  flex-shrink: 0;
`;

const CardImage = styled.img`
  object-fit: contain;
  width: 150px;
  height: 150px;
  vertical-align: middle;
`;

const InfoBox = styled.div`
  padding: 16px;
  width: 150px;
  height: 73px;
  background-color: ${colors.bgSecondary};
`;

const PriceBox = styled.div`
  padding: 8px 16px 16px 16px;
  width: 150px;
  background-color: ${colors.bgSecondary};
`;

const CollectionTitle = styled.div`
  font-size: 12px;

  color: ${colors.textSecondary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Title = styled.div`
  font-family: MarkPro-Heavy;
  font-size: 14px;

  margin-top: 4px;
  text-overflow: ellipsis;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const PriceTitle = styled.div`
  font-size: 10px;

  color: ${colors.textSecondary};
  font-weight: 700;
`;

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const PriceText = styled.div`
  font-family: MarkPro-Heavy;
  font-size: 14px;

  margin-top: 4px;
  margin-left: 4px;
`;

function Items() {
  const { data, isLoading, isError } = useData(
    "http://localhost:3000/api/items"
  );

  if (isLoading || !data) {
    return <div>로딩중</div>;
  }

  if (isError) {
    return <div>에러</div>;
  }

  return (
    <HideScrollX>
      {data.items.map((item) => (
        <CardWrapper key={item.id}>
          <CardImage src={item.mediaUrl} alt={item.title} />
          <InfoBox>
            <CollectionTitle>{item.collectionTitle}</CollectionTitle>
            <Title>{item.title}</Title>
          </InfoBox>
          <PriceBox>
            <PriceTitle>판매가</PriceTitle>
            <PriceWrapper>
              <Ether />
              <PriceText>{item.price}</PriceText>
            </PriceWrapper>
          </PriceBox>
        </CardWrapper>
      ))}
    </HideScrollX>
  );
}
export default Items;
