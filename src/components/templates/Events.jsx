import styled, { keyframes } from "styled-components";

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
  padding: 40px 0px;
`;

const EventsTopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px;
`;

const EventCardsWrapper = styled.div`
  margin-top: 24px;
  height: 265px;
  overflow-y: scroll;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const EventCardWrapper = styled.div`
  height: 200px;
  width: 320px;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0) 48.96%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15));
`;
const CountDownWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  color: #ffffff;
`;
const CountText = styled.div`
  font-size: 36px;
  line-height: 45.63px;
  align-self: flex-start;
  font-family: MarkPro-Heavy;
`;
const CountUnit = styled.div`
  font-size: 18px;
  line-height: 27px;
  align-self: flex-end;
  font-family: Pretendard-Medium;
`;

const EachCountWrapper = styled.div`
  display: flex;
`;

const InLineBlockWrapper = styled.div`
  display: inline-block;
  margin-left: 16px;
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

const EventTitles = styled.div`
  margin-top: 16px;
`;

const EventSubTitle = styled.div`
  font-family: Pretendard-SemiBold;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.64);
`;

const EventTitle = styled.div`
  font-family: Pretendard-Bold;
  font-size: 16px;
  color: #ffffff;
  margin-top: 4px;
`;

function Events() {
  return (
    <Container>
      <EventsTopWrapper>
        <GradientAnimationSectionTitle>KONKRIT Originals</GradientAnimationSectionTitle>
        <EventLink>이벤트 전체보기</EventLink>
      </EventsTopWrapper>
      <EventCardsWrapper>
        <InLineBlockWrapper>
          <EventCardWrapper>
            <CountDownWrapper>
              <EachCountWrapper>
                <CountText>08</CountText>
                <CountUnit>일</CountUnit>
              </EachCountWrapper>
              <EachCountWrapper>
                <CountText>12</CountText>
                <CountUnit>시</CountUnit>
              </EachCountWrapper>
              <EachCountWrapper>
                <CountText>32</CountText>
                <CountUnit>분</CountUnit>
              </EachCountWrapper>
              <EachCountWrapper>
                <CountText>49</CountText>
                <CountUnit>초</CountUnit>
              </EachCountWrapper>
            </CountDownWrapper>
          </EventCardWrapper>
          <EventTitles>
            <EventSubTitle>Medistock</EventSubTitle>
            <EventTitle>메디소사이어티 NFT 프로젝트</EventTitle>
          </EventTitles>
        </InLineBlockWrapper>
        <InLineBlockWrapper>
          <EventCardWrapper>
            <CountDownWrapper>
              <EachCountWrapper>
                <CountText>08</CountText>
                <CountUnit>일</CountUnit>
              </EachCountWrapper>
              <EachCountWrapper>
                <CountText>12</CountText>
                <CountUnit>시</CountUnit>
              </EachCountWrapper>
              <EachCountWrapper>
                <CountText>32</CountText>
                <CountUnit>분</CountUnit>
              </EachCountWrapper>
              <EachCountWrapper>
                <CountText>49</CountText>
                <CountUnit>초</CountUnit>
              </EachCountWrapper>
            </CountDownWrapper>
          </EventCardWrapper>
          <EventTitles>
            <EventSubTitle>Medistock</EventSubTitle>
            <EventTitle>메디소사이어티 NFT 프로젝트</EventTitle>
          </EventTitles>
        </InLineBlockWrapper>
        <InLineBlockWrapper>
          <EventCardWrapper>
            <CountDownWrapper>
              <EachCountWrapper>
                <CountText>08</CountText>
                <CountUnit>일</CountUnit>
              </EachCountWrapper>
              <EachCountWrapper>
                <CountText>12</CountText>
                <CountUnit>시</CountUnit>
              </EachCountWrapper>
              <EachCountWrapper>
                <CountText>32</CountText>
                <CountUnit>분</CountUnit>
              </EachCountWrapper>
              <EachCountWrapper>
                <CountText>49</CountText>
                <CountUnit>초</CountUnit>
              </EachCountWrapper>
            </CountDownWrapper>
          </EventCardWrapper>
          <EventTitles>
            <EventSubTitle>Medistock</EventSubTitle>
            <EventTitle>메디소사이어티 NFT 프로젝트</EventTitle>
          </EventTitles>
        </InLineBlockWrapper>
      </EventCardsWrapper>
    </Container>
  );
}

export default Events;
