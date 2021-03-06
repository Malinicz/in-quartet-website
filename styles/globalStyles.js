import { injectGlobal } from 'styled-components';
import theme from '~/styles/theme';

import { FONTS_URL } from '~/constants/paths';

injectGlobal`
  @font-face {
     font-family: 'MitrRegular';
     src: url('${FONTS_URL}/Mitr-Regular.ttf');
  }

  @font-face {
     font-family: 'MuliRegular';
     src: url('${FONTS_URL}/Muli-Regular.ttf');
  }

  @font-face {
     font-family: 'MuliBold';
     src: url('${FONTS_URL}/Muli-Bold.ttf');
  }

  body {
    position: relative;
    margin: 0;
    padding: 0;
    font-family: 'MuliRegular';
    font-size: 16px;
    color: #000000;
    overflow-x: hidden;
  }

  a {
    color: ${theme.colors.primaryDark};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  * {
    border: 0px solid black;
    box-sizing: border-box;
  }

`;
