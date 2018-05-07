import React, { Component } from 'react';
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
  margin-top: 150px;
`;

const StyledBackground = styled(Background)`
  top: -50px;
  right: -50px;
  left: auto;
  width: 310px;
  height: 130px;
`;

const StyledSectionDescription = styled(SectionDescription)`
  padding-left: 0;
  padding-top: 50px;
`;

const StyledSectionTitle = styled(SectionTitle)`
  right: 0;
  left: auto;
`;

const PhotoGallerySection = styled.section`
  width: 100%;
  grid-area: content;
`;

export class MultimediaSection extends Component {
  render() {
    return (
      <StyledSectionHolder>
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

export default MultimediaSection;
