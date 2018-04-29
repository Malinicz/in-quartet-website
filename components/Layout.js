import React, { Component } from 'react';
import { oneOf } from 'prop-types';
import styled, { ThemeProvider } from '~/styles';
import Theme from '~/styles/theme';

import { Header, IntroSection } from '~/components';

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
          <main>
            <IntroSection />
            <section>
              <article>
                <header>
                  <h2>O kwartecie</h2>
                  <p>
                    Jesteśmy absolwentkami najlepszych Akademii Muzycznych w
                    kraju, kształconymi u wybitnych profesorów.{' '}
                  </p>
                </header>
                <p>
                  Każda może się poszczycić nagrodami w konkursach solowych i
                  kameralnych oraz kursami mistrzowskimi u najlepszych pedagogów
                  z Polski i świata. Co równie ważne, od lat wykonujemy swój
                  zawód w praktyce, współpracując z czołowymi orkiestrami i
                  wykonawcami przy projektach koncertowych i nagraniach, a
                  niejednokrotnie grając na scenie z gwiazdami polskiej muzyki
                  rozrywkowej, Edytą Górniak, Sebastianem Karpielem-Bułecką,
                  Kubą Badachem, Justyną Steczkowską, Kayah i innymi.
                </p>
              </article>
              <section>
                <article>
                  <header>
                    <h3>Justyna</h3>
                    <p>altówka</p>
                  </header>
                  <p>
                    Ciągle w ruchu i nieraz cieżko za nią nadążyć. Współpracuje
                    z wieloma krakowskimi orkiestrami, jest też stażystką
                    drugiej edycji Akademii Baltic Neopolis Orchestra. Lubi
                    stawiać sobie wyzwania. Dyplomowana altowiolistka, a wkrótce
                    także skrzypaczka.
                  </p>
                </article>
                <article>
                  <header>
                    <h3>Dominika</h3>
                    <p>wiolonczela</p>
                  </header>
                  <p>
                    Nasza wiolonczelistka. Perfekcjonistka w każdym calu, zawsze
                    daje impuls do działania i jest solidną bazą zespołu. Jej
                    pasją jest muzyka kameralna, na której polu zdobywa liczne
                    laury. W wolnym czasie uwielbia chodzić po górach. Od
                    niedawna krakowianka.
                  </p>
                </article>
                <article>
                  <header>
                    <h3>Ania</h3>
                    <p>skrzypce</p>
                  </header>
                  <p>
                    Gdyby nie skrzypce zostałaby prawdopodobnie sportsmenką. Na
                    nasze szczęście wybrała muzykę, choć sport kocha do dziś.
                    Skrzypaczka w Orkiestrze Akademii Beethovenowskiej,
                    nauczyciel gry na skrzypcach, również metodą Suzuki.
                  </p>
                </article>
                <article>
                  <header>
                    <h3>Ola</h3>
                    <p>skrzypce</p>
                  </header>
                  <p>
                    Całe życie gra pierwsze skrzypce. Związana na stałe z
                    Orkiestrą Akademii Beethovenowskiej, z pasją kształci też
                    pokolenia młodych skrzypków. W wolnych chwilach z
                    przyjemnością oddaje się dobrej lekturze oraz filmowi.
                  </p>
                </article>
              </section>
            </section>
            <section>
              <article>
                <header>
                  <h2>Oferta</h2>
                  <p>Eventy, śluby, bankiety...</p>
                </header>
                <p>
                  Oprawa muzyczna ślubu, przyjęcia, bankietu czy spotkania
                  firmowego to tylko część okoliczności, które możemy uświetnić
                  swoimi umiejętnościami. Niezależnie od wydarzenia
                  gwarantujemy, że każde wykonanie będzie niepowtarzalne i na
                  długo pozostanie w pamięci i sercach.
                </p>
                <p>
                  Klasycznie, czy rozrywkowo? Muzyka filmowa… a może jazzowe
                  standardy? Decyzja należy do Państwa. Ze względu na duże
                  doświadczenie z chęcią doradzimy w kwestiach repertuarowych w
                  zależności od okazji. Jeśli jednak mają Państwo konkretne
                  pomysły czy marzenia związane z oprawą muzyczną swojej
                  uroczystości lub wydarzenia - jesteśmy otwarte na propozycje.
                  Po inspiracje zapraszamy do zakładki Multimedia.
                </p>
              </article>
            </section>
            <section>
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
            </section>
            <section>
              <h2>Multimedia</h2>
              <section>
                <div>audio player goes here</div>
              </section>
              <section>gallery goes here</section>
            </section>
            <section>
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
            </section>
          </main>
          <footer>
            <div>
              <div>in quartet logo</div>
              <nav>
                <ul>
                  <li>menu item 1</li>
                  <li>menu item 2</li>
                  <li>menu item 3</li>
                </ul>
              </nav>
            </div>
            <div>
              <div>social icons</div>
              <div>malinowski logo</div>
            </div>
          </footer>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

Layout.propTypes = {
  language: oneOf(SUPPORTED_LANGUAGES),
};
