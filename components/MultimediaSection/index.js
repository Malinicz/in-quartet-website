import React, { Component } from 'react';
import { object, string } from 'prop-types';
import styled from '~/styles';

import {
  SectionHolder,
  SectionDescription,
  DescriptionHeader,
  SectionTitle,
  Background,
} from '~/components/ui';
import { PhotoGallery } from '~/components';

const StyledSectionHolder = styled(SectionHolder)`
  padding-top: 150px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    padding-top: 0;
  }
`;

const StyledBackground = styled(Background)`
  top: -50px;
  right: -50px;
  left: auto;
  width: 310px;
  height: 130px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    top: 30px;
    right: -${props => props.theme.spacing}px;
    width: 270px;
  }
`;

const StyledSectionDescription = styled(SectionDescription)`
  padding-left: 0;
  padding-top: 50px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    padding-top: 0;
  }
`;

const StyledSectionTitle = styled(SectionTitle)`
  right: 0;
  left: auto;

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    text-align: right;
  }
`;

const PhotoGallerySection = styled.section`
  width: 100%;
  grid-area: content;

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    padding-top: 50px;
  }
`;

export class MultimediaSection extends Component {
  render() {
    const { sectionId } = this.props;

    return (
      <StyledSectionHolder name={sectionId}>
        <StyledSectionDescription>
          <DescriptionHeader>
            <StyledSectionTitle>Multimedia</StyledSectionTitle>
          </DescriptionHeader>
          <StyledBackground />
        </StyledSectionDescription>
        <PhotoGallerySection>
          <PhotoGallery />
        </PhotoGallerySection>
      </StyledSectionHolder>
    );
  }
}

MultimediaSection.propTypes = {
  data: object.isRequired,
  sectionId: string.isRequired,
};

export default MultimediaSection;
