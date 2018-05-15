import React, { Component } from 'react';
import { object, string } from 'prop-types';
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

const PinkGradient = styled(Background)`
  background-image: url('${IMAGES_URL}/gradient-pink.png');
`;

const StyledSectionDescription = styled(SectionDescription)`
  padding-bottom: 150px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    padding-bottom: 50px;
  }
`;

//TODO use theme.spacing
const PhotoHolder = styled.article`
  grid-area: content;

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    margin: ${props =>
      `0 -${props.theme.spacing}px -50px -${props.theme.spacing}px`};
  }
`;

const Photo = styled.img`
  width: 100%;
  max-width: 800px;
  transform: translate(-50px, -100px);

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    width: 100%;
    transform: none;
  }
`;

export class OurOfferSection extends Component {
  render() {
    const { sectionId, data } = this.props;
    const { title, subtitle, body } = data.description;

    return (
      <SectionHolder name={sectionId}>
        <StyledSectionDescription>
          <DescriptionHeader>
            <SectionTitle>{title}</SectionTitle>
            <SectionSubtitle>{subtitle}</SectionSubtitle>
          </DescriptionHeader>
          <DescriptionContent>
            {body.paragraph1}
            <br />
            <br />
            {body.paragraph2}
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

OurOfferSection.propTypes = {
  data: object.isRequired,
  sectionId: string.isRequired,
};

export default OurOfferSection;
