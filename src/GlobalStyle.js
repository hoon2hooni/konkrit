import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import MarkProHeavy from "@assets/fonts/MarkPro-Heavy.woff2";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background-color: rgb(24, 24, 27);
  }

  @font-face {
    font-family: 'MarkPro-Heavy';
    src: url(${MarkProHeavy}) format('woff2');
    font-weight: 500;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
  }
  
`;

export default GlobalStyle;
