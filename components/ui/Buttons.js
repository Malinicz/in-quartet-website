import styled from '~/styles';

const MAX_WIDTH = 350;

export const Button = styled.button`
  position: relative;
  background-color: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.inputRadius}px;
  transition: 0.3s background-color ease;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.primaryDark};
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 0;
    transform: translate(-50%, -50%);
    width: ${MAX_WIDTH}px;
    height: ${MAX_WIDTH}px;
    border-radius: ${MAX_WIDTH}px;
    background: ${props => props.theme.colors.lightLight};
    transition: all 0.7s;
    opacity: 0;
  }

  &:active:before {
    width: 0;
    height: 0;
    opacity: 0.4;
    transition: 0s;
  }
`;
