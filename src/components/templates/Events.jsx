import EventCard from "@components/organisms/EventCard";
import styled, { keyframes } from "styled-components";
import EventImageOneUrl from "@assets/image/event_one.png";
import EventImageTwoUrl from "@assets/image/event_two.png";
import EventImageThreeUrl from "@assets/image/event_three.png";
import HideScrollX from "@components/atoms/HideScrollX";
const shine = keyframes`
  from {
    background-position: 0%;
  }

  to {
    background-position: 200%;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 398px;
  padding: 40px 16px;
`;

const EventsTopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const GradientAnimationSectionTitle = styled.span`
  -webkit-text-fill-color: transparent;
  font-size: 18px;
  font-family: Pretendard-Bold;
  background: linear-gradient(
    90deg,
    #ffff32,
    #ffd121 25.52%,
    #00e6a0 50%,
    #50d7ff 76.04%,
    #ffff32
  );

  background-clip: text;
  animation: ${shine} 4s linear infinite;
  -webkit-background-clip: text;
  background-size: 200% auto;
  width: auto;
`;

const EventLink = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  margin-right: 8px;
  font-family: Pretendard-Normal;
  color: rgba(255, 255, 255, 0.64);
`;

function Events() {
  return (
    <Container>
      <EventsTopWrapper>
        <GradientAnimationSectionTitle>
          KONKRIT Originals
        </GradientAnimationSectionTitle>
        <EventLink>이벤트 전체보기</EventLink>
      </EventsTopWrapper>
      <HideScrollX>
        <EventCard
          imgUrl={EventImageOneUrl}
          eventSubTitle={"Medistock"}
          targetDate={new Date(2022, 12, 31)}
          title={"메디소사이어티 NFT 프로젝트"}
        />
        <EventCard
          imgUrl={EventImageTwoUrl}
          eventSubTitle={"YG K+"}
          title={"아티스트 Ohnim 프로젝트"}
        />
        <EventCard
          imgUrl={EventImageThreeUrl}
          eventSubTitle={"Habitus"}
          title={"아비투스 프리미엄 골프 멤버십 NFT"}
        />
      </HideScrollX>
      "
    </Container>
  );
}

export default Events;
