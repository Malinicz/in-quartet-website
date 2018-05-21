import React, { Component } from 'react';
import { object, string } from 'prop-types';
import styled from '~/styles';

import { IMAGES_URL } from '~/constants/paths';

import {
  SectionHolder,
  SectionDescription,
  DescriptionHeader,
  SectionTitle,
  Background,
} from '~/components/ui';

const StyledBackground = styled(Background)`
  top: -50px;
  left: -50px;
  width: 370px;
  height: 160px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    top: 80px;
    width: 300px;
  }
`;

const StyledSectionDescription = styled(SectionDescription)`
  padding-left: 0;
  padding-top: 50px;
`;

const ViolinImage = styled.img`
  position: absolute;
  top: -420px;
  right: -140px;
  height: 700px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    top: -180px;
    right: -100px;
    height: 500px;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    display: none;
  }
`;

const Paragraph = styled.p`
  max-width: 500px;
`;

export class CooperationSection extends Component {
  render() {
    const { sectionId, data } = this.props;
    const { title, body } = data.description;

    return (
      <SectionHolder name={sectionId}>
        <StyledSectionDescription>
          <DescriptionHeader>
            <SectionTitle>{title}</SectionTitle>
          </DescriptionHeader>
          <Paragraph>{body.paragraph1}</Paragraph>
          <Paragraph>{body.paragraph2}</Paragraph>
          <StyledBackground />
          <ViolinImage src={`${IMAGES_URL}/violin-pink.png`} />
        </StyledSectionDescription>
      </SectionHolder>
    );
  }
}

CooperationSection.propTypes = {
  data: object.isRequired,
  sectionId: string.isRequired,
};

export default CooperationSection;
