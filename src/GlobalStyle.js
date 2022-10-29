import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import PretendardMedium from "@assets/fonts/Pretendard-Medium.woff";
const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background-color: rgb(24, 24, 27);
  }

  @font-face {
    font-family: 'Pretendard-Medium';
    src: url(${PretendardMedium}) format('woff');
    font-weight: 500;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
  }
  
`;

export default GlobalStyle;
