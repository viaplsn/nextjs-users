import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fff;
    --black: #000;
    --gray: #929292;
    --carbongray: #5a5a5a;
    --lightgray: #d9d9d9;
    --gainsboro: #ddd;
    --ashgray: #bababa;
    --seashell: #eee;
    --brightgray: #ebebeb;
    --graycloud: #b4b4b4;
    --kellygreen: #20bf12;
  }
  
  *, *::before, *::after {
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
  }
  
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  
  body {
    line-height: 1;
    min-height: 100vh;
  }
  
  ol, ul {
    list-style: none;
  }
  
  blockquote, q {
    quotes: none;
  }
  
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
  }
  
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  button {
    padding: 0;
    background: transparent;
    border: none;
    outline: none;
  }
`;

export default GlobalStyle;
