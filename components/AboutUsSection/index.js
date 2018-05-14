import React, { Component } from 'react';
import { object, string } from 'prop-types';
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

const SectionPeople = styled.section`
  grid-area: content;
`;

export class AboutUsSection extends Component {
  render() {
    const { sectionId, data } = this.props;

    return (
      <SectionHolder name={sectionId}>
        <SectionDescription>
          <DescriptionHeader>
            <SectionTitle>{data.description.title}</SectionTitle>
            <SectionSubtitle>{data.description.subtitle}</SectionSubtitle>
          </DescriptionHeader>
          <DescriptionContent>{data.description.body}</DescriptionContent>
          <Background />
        </SectionDescription>
        <SectionPeople>
          <TeamGallery data={data.people} />
        </SectionPeople>
      </SectionHolder>
    );
  }
}

AboutUsSection.propTypes = {
  data: object.isRequired,
  sectionId: string.isRequired,
};
