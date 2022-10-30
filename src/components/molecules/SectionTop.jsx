import styled from "styled-components";

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

function SectionTop({ title, showAll }) {
  return (
    <SectionWrapper>
      <SectionTitle>{title}</SectionTitle>
      <ShowAllText>{showAll}</ShowAllText>
    </SectionWrapper>
  );
}

export default SectionTop;
