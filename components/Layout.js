import React, { Component } from 'react';
import { oneOf } from 'prop-types';
import styled, { ThemeProvider } from '~/styles';
import Theme from '~/styles/theme';

import { Main } from '~/components/ui';
import {
  Header,
  Footer,
  IntroSection,
  AboutUsSection,
  OurOfferSection,
  CooperationSection,
  MultimediaSection,
  ContactSection,
} from '~/components';

import { SUPPORTED_LANGUAGES } from '~/constants/supportedLanguages';

const Wrapper = styled.div``;

export class Layout extends Component {
  state = { isMenuActive: false };

  onToggleMenu = () => {
    this.setState(prevState => ({ isMenuActive: !prevState.isMenuActive }));
  };

  render() {
    const { isMenuActive } = this.state;
    const { language } = this.props;

    return (
      <ThemeProvider theme={Theme}>
        <Wrapper>
          <Header
            language={language}
            isMenuActive={isMenuActive}
            handleToggleMenu={this.onToggleMenu}
          />
          <Main>
            <IntroSection />
            <AboutUsSection />
            <OurOfferSection />
            <CooperationSection />
            <MultimediaSection />
            <ContactSection />
          </Main>
          <Footer />
        </Wrapper>
      </ThemeProvider>
    );
  }
}

Layout.propTypes = {
  language: oneOf(SUPPORTED_LANGUAGES),
};
