import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {
     font-family: 'MitrRegular';
     src: url('./static/fonts/Mitr-Regular.ttf');
  }

    @font-face {
     font-family: 'MuliRegular';
     src: url('./static/fonts/Muli-Regular.ttf');
  }

  body {
      position: relative;
      margin: 0;
      padding: 0;
      font-family: 'MuliRegular';
      font-size: 16px;
      color: #000000;
  }

  * {
    border: 0px solid black;
  }

`;
