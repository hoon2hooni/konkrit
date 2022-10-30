import styled from "styled-components";
import CollectionList from "@components/organisms/CollectionList";
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

function OpenseaTopCollctions() {
  return (
    <SectionLayout>
      <SectionWrapper>
        <SectionTitle>많이 거래된 컬렉션</SectionTitle>
        <ShowAllText>오픈씨 데이터 기준</ShowAllText>
      </SectionWrapper>
      <CollectionList />
    </SectionLayout>
  );
}

export default OpenseaTopCollctions;
