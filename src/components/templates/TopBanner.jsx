import styled, { keyframes } from "styled-components";
import TopBannerImageOne from "@assets/image/tb_image_one.png";
import TopBannerImageTwo from "@assets/image/tb_image_two.png";
import EachBanner from "@components/organisms/EachBanner";

import { useState, useEffect } from "react";

const Container = styled.div`
  margin-top: 64px;
  width: 100%;
  height: 400px;
  padding: 20px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

function TopBanner() {
  const [currentNumber, setCurrentNumber] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentNumber((n) => n + 1);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const bannerList = [
    { id: 1, imgUrl: TopBannerImageOne },
    {
      id: 2,
      imgUrl: TopBannerImageTwo,
      title: "메디소사이어티 NFT",
      firstLine: "메디컬 커뮤니티를 지향하는 메디소사이어티와",
      secondLine: "KONKRIT이 선물하는 NFT 멤버십 프로젝트",
    },
  ];
  const maxNum = bannerList.length;
  const bannerContents = bannerList.map((bannerItem, index) => (
    <EachBanner {...bannerItem} order={index + 1} maxNum={maxNum} />
  ));

  const currentBanner = bannerContents[currentNumber % 2];

  return (
    <Container>
      <Wrapper key={currentNumber}>{currentBanner}</Wrapper>
    </Container>
  );
}

export default TopBanner;
