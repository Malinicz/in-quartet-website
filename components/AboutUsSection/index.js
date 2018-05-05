import React, { Component } from 'react';
import styled from '~/styles';

import { Section, H2 } from '~/components/ui';
import { Gallery } from '~/components';

import aboutUsData from './content';

const AboutUsSectionHolder = styled(Section)`
  display: grid;
  grid-template-columns: ${props => `auto ${props.theme.maxWidth}px auto`};
  grid-template-rows: auto;
  grid-template-areas:
    '. description .'
    '. people .';
  margin-top: 100px;
`;

const SectionDescription = styled.article`
  position: relative;
  grid-area: description;
  padding: 70px 0 50px 200px;
`;

const SectionPeople = styled.section`
  grid-area: people;
`;

const SectionTitle = styled(H2)`
  position: absolute;
  top: -1.6em;
  left: 0;
  font-size: 3.5em;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  right: -1000px;
  bottom: 0;
  left: 50px;
  z-index: -1;
  background-image: url('/static/images/gradient-gray.png');
  background-size: cover;
`;

const DescriptionHeader = styled.header`
  padding-bottom: 10px;
`;

const DescriptionContent = styled.p`
  column-count: 2;
  column-gap: 70px;
`;

const SectionSubtitle = styled.p`
  font-family: ${props => props.theme.fontPrimaryBold};
`;

export class AboutUsSection extends Component {
  state = {};

  render() {
    return (
      <AboutUsSectionHolder>
        <SectionDescription>
          <DescriptionHeader>
            <SectionTitle>O kwartecie</SectionTitle>
            <SectionSubtitle>
              Jesteśmy absolwentkami najlepszych Akademii Muzycznych w kraju,
              kształconymi u wybitnych profesorów.{' '}
            </SectionSubtitle>
          </DescriptionHeader>
          <DescriptionContent>
            Każda może się poszczycić nagrodami w konkursach solowych i
            kameralnych oraz kursami mistrzowskimi u najlepszych pedagogów z
            Polski i świata. Co równie ważne, od lat wykonujemy swój zawód w
            praktyce, współpracując z czołowymi orkiestrami i wykonawcami przy
            projektach koncertowych i nagraniach, a niejednokrotnie grając na
            scenie z gwiazdami polskiej muzyki rozrywkowej, Edytą Górniak,
            Sebastianem Karpielem-Bułecką, Kubą Badachem, Justyną Steczkowską,
            Kayah i innymi.
          </DescriptionContent>
          <Background />
        </SectionDescription>
        <SectionPeople>
          <Gallery data={aboutUsData} />
          <article>
            <header>
              <h3>Justyna</h3>
              <p>altówka</p>
            </header>
            <p>
              Ciągle w ruchu i nieraz cieżko za nią nadążyć. Współpracuje z
              wieloma krakowskimi orkiestrami, jest też stażystką drugiej edycji
              Akademii Baltic Neopolis Orchestra. Lubi stawiać sobie wyzwania.
              Dyplomowana altowiolistka, a wkrótce także skrzypaczka.
            </p>
          </article>
          <article>
            <header>
              <h3>Dominika</h3>
              <p>wiolonczela</p>
            </header>
            <p>
              Nasza wiolonczelistka. Perfekcjonistka w każdym calu, zawsze daje
              impuls do działania i jest solidną bazą zespołu. Jej pasją jest
              muzyka kameralna, na której polu zdobywa liczne laury. W wolnym
              czasie uwielbia chodzić po górach. Od niedawna krakowianka.
            </p>
          </article>
          <article>
            <header>
              <h3>Ania</h3>
              <p>skrzypce</p>
            </header>
            <p>
              Gdyby nie skrzypce zostałaby prawdopodobnie sportsmenką. Na nasze
              szczęście wybrała muzykę, choć sport kocha do dziś. Skrzypaczka w
              Orkiestrze Akademii Beethovenowskiej, nauczyciel gry na
              skrzypcach, również metodą Suzuki.
            </p>
          </article>
          <article>
            <header>
              <h3>Ola</h3>
              <p>skrzypce</p>
            </header>
            <p>
              Całe życie gra pierwsze skrzypce. Związana na stałe z Orkiestrą
              Akademii Beethovenowskiej, z pasją kształci też pokolenia młodych
              skrzypków. W wolnych chwilach z przyjemnością oddaje się dobrej
              lekturze oraz filmowi.
            </p>
          </article>
        </SectionPeople>
      </AboutUsSectionHolder>
    );
  }
}
