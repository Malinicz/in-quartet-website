import React, { Component } from 'react';
import styled from '~/styles';

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
`;

const StyledSectionDescription = styled(SectionDescription)`
  padding-left: 0;
  padding-top: 50px;
  max-width: 600px;
`;

const ViolinImage = styled.img`
  position: absolute;
  top: -420px;
  right: -450px;
  height: 700px;
`;

export class CooperationSection extends Component {
  render() {
    return (
      <SectionHolder>
        <StyledSectionDescription>
          <DescriptionHeader>
            <SectionTitle>Współpraca</SectionTitle>
          </DescriptionHeader>
          <p>
            Jako zespół jesteśmy ukierunkowane na szerokie działanie, również w
            ramach projektów autorskich, wydarzeń koncertowych i kulturalnych
            współtworzonych z instytucjami i artystami.
          </p>
          <p>Zapraszamy do kontaktu!</p>
          <StyledBackground />
          <ViolinImage src="/static/images/violin-pink.svg" />
        </StyledSectionDescription>
      </SectionHolder>
    );
  }
}

export default CooperationSection;
