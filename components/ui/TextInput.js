import styled from '~/styles';

export const TextInput = styled.input`
  height: ${props => props.theme.inputHeight}px;
  border-radius: 6px;
  background-blend-mode: overlay, normal;
  box-shadow: 0 2px 10px 0 rgba(251, 127, 76, 0.2);
  padding: 0 ${props => props.theme.spacing}px;
  margin-top: ${props => props.theme.spacing}px;
  margin-right: ${props => props.theme.spacing}px;
  width: 100%;
  font-size: 16px;
`;
