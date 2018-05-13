import React, { Component } from 'react';
import styled from '~/styles';

import { IMAGES_URL } from '~/constants/paths';

import {
  SectionHolder,
  SectionDescription,
  DescriptionHeader,
  SectionTitle,
  SectionSubtitle,
  DescriptionContent,
  Background,
} from '~/components/ui';

import navigationConfig from '~/constants/navigationConfig';

const PinkGradient = styled(Background)`
  background-image: url('${IMAGES_URL}/gradient-pink.png');
`;

const StyledSectionDescription = styled(SectionDescription)`
  padding-bottom: 150px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    padding-bottom: 50px;
  }
`;

const PhotoHolder = styled.article`
  grid-area: content;
  margin-bottom: -100px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    margin-bottom: -50px;
  }
`;

//TODO use theme.spacing for calculations
const Photo = styled.img`
  width: 100%;
  max-width: 800px;
  transform: translate(-50px, -100px);

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    width: calc(100% + 30px);
    transform: translate(-15px, 0);
  }
`;

export class OurOfferSection extends Component {
  render() {
    return (
      <SectionHolder name={navigationConfig.offer.value}>
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
          <Photo src={`${IMAGES_URL}/our-offer/team-in-pink.jpg`} />
        </PhotoHolder>
      </SectionHolder>
    );
  }
}

export default OurOfferSection;
