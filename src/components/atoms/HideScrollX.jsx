import styled from "styled-components";

const HideScrollWrapper = styled.div`
  margin-top: 24px;
  overflow-x: scroll;
  display: flex;
  gap: 16px;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;
function HideScrollX({ children }) {
  return <HideScrollWrapper>{children}</HideScrollWrapper>;
}

export default HideScrollX;
