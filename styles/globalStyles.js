import { injectGlobal } from 'styled-components';
import theme from '~/styles/theme';

injectGlobal`
  @font-face {
     font-family: 'MitrRegular';
     src: url('static/fonts/Mitr-Regular.ttf');
  }

  @font-face {
     font-family: 'MuliRegular';
     src: url('static/fonts/Muli-Regular.ttf');
  }

  @font-face {
     font-family: 'MuliBold';
     src: url('static/fonts/Muli-Bold.ttf');
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
