import React, { Component } from 'react';
import { number, bool } from 'prop-types';
import styled, { keyframes } from '~/styles';

import { IMAGES_URL } from '~/constants/paths';

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

const ViolinShape = styled.img`
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
  height: 30%;
`;

const ViolinShapeFlipped = styled(ViolinShape)`
  left: 60%;
`;

class AnimatedBox extends Component {
  render() {
    const { delay, isVisible } = this.props;

    return (
      <AnimatedBoxHolder delay={delay} isVisible={isVisible}>
        <ViolinShape src={`${IMAGES_URL}/about-us/violin-shape.png`} />
        <ViolinShapeFlipped
          src={`${IMAGES_URL}/about-us/violin-shape-flipped.png`}
        />
      </AnimatedBoxHolder>
    );
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
