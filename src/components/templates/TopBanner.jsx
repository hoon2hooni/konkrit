import styled from "styled-components";
import TopBannerImageOne from "@assets/image/tb_image_one.png";
import TopBannerImageTwo from "@assets/image/tb_image_two.png";
import EachBanner from "@components/organisms/EachBanner";

import Slider from "react-slick";

const Container = styled.div`
  margin-top: 64px;
  width: 100%;
  height: 400px;
  padding: 20px;
`;

const StyledSlider = styled(Slider)`
  height: 360px;
`;

const settings = {
  dots: false,
  infinite: true,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
};

function TopBanner() {
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
    <EachBanner
      key={bannerItem.id}
      {...bannerItem}
      order={index + 1}
      maxNum={maxNum}
    />
  ));

  return (
    <Container>
      <StyledSlider {...settings}>{bannerContents}</StyledSlider>
    </Container>
  );
}

export default TopBanner;
