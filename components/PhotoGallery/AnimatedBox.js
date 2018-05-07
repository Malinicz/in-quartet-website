import React, { Component } from 'react';
import { number, bool } from 'prop-types';
import styled, { keyframes } from '~/styles';

const colorAnimation = props => keyframes`
    0% {background-color: ${props.theme.colors.lightDark}}
    50% { background-color: ${props.theme.colors.primary}}
    100% { background-color: ${props.theme.colors.lightDark}}
`;

const AnimatedBoxHolder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${props => (props.isVisible ? '100%' : '0%')};
  height: ${props => (props.isVisible ? '100%' : '0%')};
  background-color: ${props => props.theme.colors.lightDark};
  animation: ${colorAnimation} 30s ease infinite;
  animation-delay: ${props => props.delay}s;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transition: 0.3s width ease, 0.3s height ease, 0s opacity ease;
`;

class AnimatedBox extends Component {
  render() {
    const { delay, isVisible } = this.props;

    return <AnimatedBoxHolder delay={delay} isVisible={isVisible} />;
  }
}

AnimatedBox.defaultProps = {
  isVisible: true,
  delay: 0,
};

AnimatedBox.propTypes = {
  delay: number,
  isVisible: bool,
};

export default AnimatedBox;
