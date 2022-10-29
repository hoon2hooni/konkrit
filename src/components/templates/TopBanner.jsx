import styled from "styled-components";

const Container = styled.div`
  margin-top: 64px;
  width: 100%;
  height: 400px;
  padding: 20px;
`;

const TopLeftBox = styled.div`
  width: 0px;
  height: 0px;
  border-right: 60px solid transparent;
  border-top: 60px solid rgb(24, 24, 27);
  position: absolute;
  left: 0%;
  top: 0%;
`;

const BottomRightBox = styled.div`
  width: 0px;
  height: 0px;
  border-top: 60px solid transparent;
  border-right: 60px solid rgb(24, 24, 27);
  position: absolute;
  right: 0%;
  bottom: 0%;
`;

const BannerWrapper = styled.div`
  background-color: yellow;
  position: relative;
  width: 100%;
  height: 100%;
`;

const BannerOrderBox = styled.div`
  position: absolute;
  display: flex;
  width: 51px;
  height: 29px;
  left: 16px;
  bottom: 16px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  z-index: 10;
  justify-content: center;
  align-items: center;
  font-family: Pretendard-Medium;
  color: rgba(255, 255, 255, 0.64);
  font-size: 14px;
`;

function TopBanner() {
  return (
    <Container>
      <BannerWrapper>
        <TopLeftBox />
        <BottomRightBox />
        <BannerOrderBox>1 / 2</BannerOrderBox>
      </BannerWrapper>
    </Container>
  );
}

export default TopBanner;
