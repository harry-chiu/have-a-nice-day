import { createGlobalStyle } from 'styled-components';
import { COLOR } from 'src/constants/index';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    background: ${COLOR.layout.background};
  }
`;

export default GlobalStyle;
