import EventCard from "@components/organisms/EventCard";
import styled, { keyframes } from "styled-components";
import EventImageOneUrl from "@assets/image/event_one.png";
import EventImageTwoUrl from "@assets/image/event_two.png";
import EventImageThreeUrl from "@assets/image/event_three.png";
import HideScrollX from "@components/atoms/HideScrollX";
import SectionLayout from "../molecules/SectionLayout";
import * as colors from "@styles/colors";
const shine = keyframes`
  from {
    background-position: 0%;
  }

  to {
    background-position: 200%;
  }
`;

const EventsTopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const GradientAnimationSectionTitle = styled.span`
  -webkit-text-fill-color: transparent;
  font-size: 18px;
  font-weight: 700;
  background: ${colors.textGradient};

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

  color: ${colors.textSecondary};
`;

function Events() {
  return (
    <SectionLayout>
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
    </SectionLayout>
  );
}

export default Events;
