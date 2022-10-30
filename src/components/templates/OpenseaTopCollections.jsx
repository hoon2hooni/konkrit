import styled from "styled-components";
import CollectionList from "@components/organisms/CollectionList";

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

  font-weight: 700;
`;

const ShowAllText = styled.span`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.64);
  margin-right: 4px;
`;

function OpenseaTopCollctions() {
  return (
    <Container>
      <SectionWrapper>
        <SectionTitle>많이 거래된 컬렉션</SectionTitle>
        <ShowAllText>오픈씨 데이터 기준</ShowAllText>
      </SectionWrapper>
      <CollectionList />
    </Container>
  );
}

export default OpenseaTopCollctions;
