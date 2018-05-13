import React, { Component } from 'react';
import styled from '~/styles';

import {
  SectionHolder,
  SectionDescription,
  DescriptionHeader,
  SectionTitle,
  SectionSubtitle,
  DescriptionContent,
  Background,
} from '~/components/ui';
import { TeamGallery } from '~/components';

import aboutUsData from './content';

import navigationConfig from '~/constants/navigationConfig';

const SectionPeople = styled.section`
  grid-area: content;
`;

export class AboutUsSection extends Component {
  render() {
    return (
      <SectionHolder name={navigationConfig.aboutUs.value}>
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
      </SectionHolder>
    );
  }
}
