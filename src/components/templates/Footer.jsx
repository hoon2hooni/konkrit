import styled from "styled-components";
import ModernLionLogo from "@assets/image/modern_lion_logo.png";
import Divider from "@components/atoms/Divider";

const Container = styled.div`
  padding: 16px;
  background-color: black;
  margin-top: 100px;
`;

const FooterText = styled.span`
  color: rgba(255, 255, 255, 0.64);

  font-size: 14px;
`;
const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
`;

const ModernLionLogoImage = styled.img`
  height: 14px;
  width: auto;
  margin-bottom: 14px;
`;

const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 260px;
  margin-top: 26px;
`;

function Footer() {
  return (
    <Container>
      <ModernLionLogoImage src={ModernLionLogo} alt="멋쟁이사자처럼 로고" />
      <FooterWrapper>
        <FooterText>대표이사</FooterText>
        <FooterText>이두희</FooterText>
      </FooterWrapper>
      <FooterWrapper>
        <FooterText>사업자 등록번호</FooterText>
        <FooterText>393-86-02511</FooterText>
      </FooterWrapper>
      <FooterWrapper>
        <FooterText>주소</FooterText>
        <FooterText>서울 종로구 종로3길 17 디타워 16층</FooterText>
      </FooterWrapper>
      <FooterWrapper>
        <FooterText>이메일</FooterText>
        <FooterText>modernlion@modernlion.io</FooterText>
      </FooterWrapper>
      <FooterWrapper>
        <FooterText>전화번호</FooterText>
        <FooterText>02-6203-3222</FooterText>
      </FooterWrapper>
      <FooterLinks>
        <FooterText>이용약관</FooterText>
        <Divider />
        <FooterText>개인정보처리방침</FooterText>
        <Divider />
        <FooterText>자주묻는질문</FooterText>
      </FooterLinks>
    </Container>
  );
}

export default Footer;
