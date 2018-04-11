import React, { Component } from 'react';
import styled, { ThemeProvider } from '~/styles';
import Theme from '~/styles/theme';

import { Header, Footer } from '~/components';

const Layout = styled.div``;

class MainPage extends Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <Layout>
          <Header />This is In Quartet website main content<Footer />
        </Layout>
      </ThemeProvider>
    );
  }
}

export default MainPage;
