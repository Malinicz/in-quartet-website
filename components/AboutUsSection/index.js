import React, { Component } from 'react';
import styled from '~/styles';

import { Section, H2 } from '~/components/ui';
import { TeamGallery } from '~/components';

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
          <TeamGallery data={aboutUsData} />
        </SectionPeople>
      </AboutUsSectionHolder>
    );
  }
}
