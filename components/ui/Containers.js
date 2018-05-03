import styled from '~/styles';

export const Main = styled.main`
  margin-top: -65px;
`;

export const ContainerWithPaddingHolder = styled.div`
  padding: ${props => props.theme.spacing}px;
`;

export const Section = styled.section`
  padding: ${props => props.theme.spacing}px;
`;
