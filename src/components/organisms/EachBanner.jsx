import styled from "styled-components";
import TopBannerImage from "@assets/image/tb_image_one.png";
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
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  background-position: 50% 50%;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 40px 20px;
  overflow: hidden;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
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

const BannerTextsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const BoldTextTitle = styled.div`
  font-weight: 700;
  font-size: 24px;
  font-family: Pretendard;
  color: #ffffff;
`;

const TextWrapper = styled.div`
  margin-top: 12px;
  font-size: 14px;
  font-family: Pretendard;
  color: #ffffff;
  text-align: center;
  line-height: 130%;
`;

function EachBanner({ imgUrl, title, firstLine, secondLine }) {
  return (
    <BannerWrapper imgUrl={imgUrl}>
      <TopLeftBox />
      <BottomRightBox />
      <BannerTextsWrapper>
        <BoldTextTitle>{title}</BoldTextTitle>
        <TextWrapper>
          {firstLine}
          <br />
          {secondLine}
        </TextWrapper>
      </BannerTextsWrapper>
      <BannerOrderBox>1 / 2</BannerOrderBox>
    </BannerWrapper>
  );
}

export default EachBanner;