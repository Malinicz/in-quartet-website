import styled from '~/styles';

import { H2 } from '~/components/ui';

import { IMAGES_URL } from '~/constants/paths';

export const Section = styled.section`
  padding: ${props => props.theme.spacing}px;
`;

export const SectionHolder = styled(Section)`
  display: grid;
  grid-template-columns: ${props =>
    `auto minmax(auto, ${props.theme.maxWidth}px) auto`};
  grid-template-rows: auto;
  grid-template-areas:
    '. description .'
    '. content .';
  margin-top: 100px;
`;

export const SectionDescription = styled.article`
  position: relative;
  grid-area: description;
  padding: 70px 100px 50px 180px;
`;

export const SectionTitle = styled(H2)`
  position: absolute;
  top: -1.6em;
  left: 0;
  font-size: 3.5em;
`;

export const SectionSubtitle = styled.p`
  font-family: ${props => props.theme.fontPrimaryBold};
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  right: -${props => props.theme.spacing}px;
  bottom: 0;
  left: 50px;
  z-index: -1;
  background-image: url('${IMAGES_URL}/gradient-gray.png');
  background-size: cover;
`;

export const DescriptionHeader = styled.header`
  padding-bottom: 10px;
`;

export const DescriptionContent = styled.p`
  column-count: 2;
  column-gap: 50px;
`;
