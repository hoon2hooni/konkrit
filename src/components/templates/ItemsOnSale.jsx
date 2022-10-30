import styled from "styled-components";
import Items from "@components/organisms/Items";
import SectionLayout from "../molecules/SectionLayout";

const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SectionTitle = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

const ShowAllText = styled.span`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.64);
  margin-right: 4px;
`;

function ItemsOnSale() {
  return (
    <SectionLayout>
      <SectionWrapper>
        <SectionTitle>지금 판매중인 아이템</SectionTitle>
        <ShowAllText>아이템 전체보기</ShowAllText>
      </SectionWrapper>
      <Items />
    </SectionLayout>
  );
}

export default ItemsOnSale;
