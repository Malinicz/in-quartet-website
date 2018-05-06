import React, { Component } from 'react';
import { oneOf } from 'prop-types';
import styled, { ThemeProvider } from '~/styles';
import Theme from '~/styles/theme';

import { Main, Section } from '~/components/ui';
import {
  Header,
  Footer,
  IntroSection,
  AboutUsSection,
  OurOfferSection,
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
            <Section>
              <article>
                <header>
                  <h2>Współpraca</h2>
                </header>
                <p>
                  Jako zespół jesteśmy ukierunkowane na szerokie działanie,
                  również w ramach projektów autorskich, wydarzeń koncertowych i
                  kulturalnych współtworzonych z instytucjami i artystami.
                </p>
                <p>Zapraszamy do kontaktu!</p>
              </article>
            </Section>
            <Section>
              <h2>Multimedia</h2>
              <section>
                <div>audio player goes here</div>
              </section>
              <section>gallery goes here</section>
            </Section>
            <Section>
              <h2>kontakt</h2>
              <div>
                <p>Dominika Szczypka</p>
                <a href="tel:+48603540013">603 540 013</a>
              </div>
              <div>
                <p>Justyna Poprawska</p>
                <a href="tel:+48501303089">501 303 089</a>
              </div>
              <form>
                <label>Email *</label>
                <input type="text" />
                <label>Imię</label>
                <input type="text" />
                <label>Treść wiadomości *</label>
                <textarea />
                <button>Wyślij</button>
              </form>
            </Section>
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
