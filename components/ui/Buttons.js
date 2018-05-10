import styled from '~/styles';

export const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.inputRadius}px;
  transition: 0.3s background-color ease;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.primaryDark};
  }
`;
