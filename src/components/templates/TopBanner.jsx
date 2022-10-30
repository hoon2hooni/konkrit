import styled from "styled-components";
import TopBannerImage from "@assets/image/tb_image_two.png";
import EachBanner from "@components/organisms/EachBanner";
const Container = styled.div`
  margin-top: 64px;
  width: 100%;
  height: 400px;
  padding: 20px;
`;

function TopBanner() {
  return (
    <Container>
      <EachBanner
        imgUrl={TopBannerImage}
        title={"메디소사이어티 NFT"}
        firstLine={"메디컬 커뮤니티를 지향하는 메디소사이어티와"}
        secondLine={"KONKRIT이 선물하는 NFT 멤버십 프로젝트"}
      />
    </Container>
  );
}

export default TopBanner;
