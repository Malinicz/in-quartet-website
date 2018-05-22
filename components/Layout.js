import React, { Component } from 'react';
import { object } from 'prop-types';
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

const Wrapper = styled.div``;

export class Layout extends Component {
  state = { isMenuActive: false };

  onToggleMenu = () => {
    this.setState(prevState => ({ isMenuActive: !prevState.isMenuActive }));
  };

  render() {
    const { isMenuActive } = this.state;
    const { data } = this.props;

    return (
      <ThemeProvider theme={Theme}>
        <Wrapper>
          <Header
            navigationConfig={data.navigation}
            isMenuActive={isMenuActive}
            handleToggleMenu={this.onToggleMenu}
          />
          <Main>
            <IntroSection data={data.intro} />
            <AboutUsSection
              data={data.aboutUs}
              sectionId={data.navigation.aboutUs.value}
            />
            <OurOfferSection
              data={data.ourOffer}
              sectionId={data.navigation.ourOffer.value}
            />
            <CooperationSection
              data={data.cooperation}
              sectionId={data.navigation.cooperation.value}
            />
            <MultimediaSection
              data={data.multimedia}
              sectionId={data.navigation.multimedia.value}
            />
            <ContactSection
              data={data.contact}
              language={data.language}
              sectionId={data.navigation.contact.value}
            />
          </Main>
          <Footer navigationConfig={data.navigation} />
        </Wrapper>
      </ThemeProvider>
    );
  }
}

Layout.propTypes = {
  data: object.isRequired,
};
