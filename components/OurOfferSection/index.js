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

const PinkGradient = styled(Background)`
  background-image: url('/static/images/gradient-pink.png');
`;

const StyledSectionDescription = styled(SectionDescription)`
  padding-bottom: 150px;
`;

const PhotoHolder = styled.article`
  grid-area: content;
  margin-bottom: -100px;
`;

const Photo = styled.img`
  width: 800px;
  transform: translate(-50px, -100px);
`;

export class OurOfferSection extends Component {
  render() {
    return (
      <SectionHolder>
        <StyledSectionDescription>
          <DescriptionHeader>
            <SectionTitle>Oferta</SectionTitle>
            <SectionSubtitle>Eventy, śluby, bankiety...</SectionSubtitle>
          </DescriptionHeader>
          <DescriptionContent>
            Oprawa muzyczna ślubu, przyjęcia, bankietu czy spotkania firmowego
            to tylko część okoliczności, które możemy uświetnić swoimi
            umiejętnościami. Niezależnie od wydarzenia gwarantujemy, że każde
            wykonanie będzie niepowtarzalne i na długo pozostanie w pamięci i
            sercach. <br />
            <br /> Klasycznie, czy rozrywkowo? Muzyka filmowa… a może jazzowe
            standardy? Decyzja należy do Państwa. Ze względu na duże
            doświadczenie z chęcią doradzimy w kwestiach repertuarowych w
            zależności od okazji. Jeśli jednak mają Państwo konkretne pomysły
            czy marzenia związane z oprawą muzyczną swojej uroczystości lub
            wydarzenia - jesteśmy otwarte na propozycje. Po inspiracje
            zapraszamy do zakładki Multimedia.
          </DescriptionContent>
          <PinkGradient />
        </StyledSectionDescription>
        <PhotoHolder>
          <Photo src="/static/images/our-offer/team-in-pink.jpg" />
        </PhotoHolder>
      </SectionHolder>
    );
  }
}

export default OurOfferSection;
