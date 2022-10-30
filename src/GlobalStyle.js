import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import MarkProHeavy from "@assets/fonts/MarkPro-Heavy.woff2";

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'MarkPro-Heavy';
    src: url(${MarkProHeavy}) format('woff2');
    font-weight: 800;
    font-style: normal;
  }
  
  * {
    box-sizing: border-box;
  }

  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, menu, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video{
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    color: #ffffff;
    font-weight: 400;
  }

  body {
    background-color: rgb(24, 24, 27);
  }

  
`;

export default GlobalStyle;
