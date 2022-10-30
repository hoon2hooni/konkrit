import styled from "styled-components";
import useCountdown from "@hooks/useCountDown";

const EventTitles = styled.div`
  margin-top: 16px;
`;

const EventSubTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.64);
`;

const EventTitle = styled.div`
  font-size: 16px;
  font-weight: 700;

  margin-top: 4px;
`;

const EventCardWrapper = styled.div`
  height: 200px;
  width: 320px;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  background-image: ${(props) => `linear-gradient(
      rgba(0, 0, 0, 0) 48.96%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)),
    url(${props.imgUrl})`};
  background-size: cover;
  background-position: 50% 50%;
`;

const CountDownWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
const BoldText = styled.div`
  font-size: 36px;
  line-height: 45.63px;
  align-self: flex-start;
  font-family: MarkPro-Heavy;
`;
const CountUnit = styled.div`
  font-size: 18px;
  line-height: 27px;
  align-self: flex-end;

  font-weight: 500;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function formatCount(count) {
  if (count < 10) {
    return `0${count}`;
  } else {
    return `${count}`;
  }
}

function EventCard({ targetDate, imgUrl, eventSubTitle, title }) {
  const { days, hours, minutes, seconds, isDone } = useCountdown(targetDate);
  let textContent;
  if (!targetDate) {
    textContent = (
      <TextWrapper>
        <BoldText>Coming soon</BoldText>
      </TextWrapper>
    );
  } else if (isDone) {
    textContent = (
      <TextWrapper>
        <BoldText>End!</BoldText>
      </TextWrapper>
    );
  } else {
    textContent = (
      <>
        <TextWrapper>
          <BoldText>{formatCount(days)}</BoldText>
          <CountUnit>일</CountUnit>
        </TextWrapper>
        <TextWrapper>
          <BoldText>{formatCount(hours)}</BoldText>
          <CountUnit>시</CountUnit>
        </TextWrapper>
        <TextWrapper>
          <BoldText>{formatCount(minutes)}</BoldText>
          <CountUnit>분</CountUnit>
        </TextWrapper>
        <TextWrapper>
          <BoldText>{formatCount(seconds)}</BoldText>
          <CountUnit>초</CountUnit>
        </TextWrapper>
      </>
    );
  }

  return (
    <div>
      <EventCardWrapper imgUrl={imgUrl}>
        <CountDownWrapper>{textContent}</CountDownWrapper>
      </EventCardWrapper>
      <EventTitles>
        <EventSubTitle>{eventSubTitle}</EventSubTitle>
        <EventTitle>{title}</EventTitle>
      </EventTitles>
    </div>
  );
}

export default EventCard;
