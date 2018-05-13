import styled from '~/styles';

export const Form = styled.form``;

export const LabelWithInputHolder = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputLabel = styled.label`
  font-family: ${props => props.theme.fontSecondary};
  margin-left: ${props => props.theme.inputSpacing}px;
`;

export const TextInput = styled.input`
  padding: ${props =>
    `${props.theme.inputSpacing}px ${props.theme.inputSpacing * 6}px ${
      props.theme.inputSpacing
    }px ${props.theme.inputSpacing}px`};
  width: 100%;
  height: ${props => props.theme.inputHeight}px;
  border: ${props => `3px solid ${props.theme.colors.primaryDark}`};
  border-radius: ${props => props.theme.inputRadius}px;
  font-size: 1em;
`;

export const TextArea = styled.textarea`
  padding: ${props =>
    `${props.theme.inputSpacing}px ${props.theme.inputSpacing}px`};
  width: 100%;
  border: ${props => `3px solid ${props.theme.colors.primaryDark}`};
  border-radius: ${props => props.theme.inputRadius}px;
  font-size: 1em;
  resize: vertical;
`;
