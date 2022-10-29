import styled from "styled-components";
import Ether from "@components/atoms/Ether";
import { useState, useEffect } from "react";
import axios from "axios";
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
  text-overflow: ellipsis;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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

function Items() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchItems() {
      setIsLoading(true);
      setIsError(false);
      try {
        const items = await axios("http://localhost:3000/api/items");

        setItems(items.data.items);
        setIsLoading(false);
      } catch {
        setIsError(true);
        setIsLoading(false);
      }
    }
    fetchItems();
  }, []);
  
  if (isLoading) {
    return <div>로딩중</div>;
  }

  if (isError) {
    return <div>에러</div>;
  }

  return (
    <ScrollCardsWrapper>
      {items.map((item) => (
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
    </ScrollCardsWrapper>
  );
}
export default Items;
