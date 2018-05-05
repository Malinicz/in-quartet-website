import styled from '~/styles';

export const H1 = styled.h1`
  font-family: ${props => props.theme.fontSecondary};
  padding-bottom: 1em;
  font-size: 3em;
  text-transform: uppercase;
`;

export const H2 = styled.h2`
  font-family: ${props => props.theme.fontSecondary};
  padding-bottom: 1em;
  font-size: 2em;
  text-transform: uppercase;
`;

export const H3 = styled.h3`
  font-family: ${props => props.theme.fontSecondary};
  padding-bottom: 1em;
  font-size: 1.6em;
  text-transform: uppercase;
`;
