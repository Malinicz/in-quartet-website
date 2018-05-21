import React, { Component } from 'react';
import { number, bool, arrayOf } from 'prop-types';
import styled, { keyframes } from '~/styles';

import { IMAGES_URL } from '~/constants/paths';

const colorAnimation = props => keyframes`
    0% {background-color: ${props.theme.colors.lightDark}}
    50% { background-color: ${props.theme.colors.primary}}
    100% { background-color: ${props.theme.colors.lightDark}}
`;

const violinShapeAnimation = props => keyframes`
  0% {top: 10%; left: 70%; transform: rotate(0deg)}
  20% {top: ${props.random * 80}%; left: ${props.random *
  50}%; transform: ${`rotate(${props.random * 270}deg)`}}
    40% {top: ${props.random * 120}%; left: ${props.random *
  150}%; transform: ${`rotate(${props.random * 540}deg)`}}
    60% {top: ${props.random * 30}%; left: ${props.random *
  15}%; transform: ${`rotate(-${props.random * 100}deg)`}}
    80% {top: ${props.random * 67}%; left: ${props.random *
  56}%; transform: ${`rotate(${props.random * 200}deg)`}}
  100% {top: 10%; left: 70%; transform: rotate(0deg);}
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
  overflow: hidden;
`;

const ViolinShape = styled.img`
  position: absolute;
  height: 30%;
  animation: 20s ${violinShapeAnimation} ease infinite;
`;

const ViolinShapeFlipped = styled.img`
  position: absolute;
  height: 30%;
  animation: 30s ${violinShapeAnimation} ease infinite;
`;

class AnimatedBox extends Component {
  render() {
    const { delay, isVisible } = this.props;

    return (
      <AnimatedBoxHolder delay={delay} isVisible={isVisible}>
        <ViolinShape
          src={`${IMAGES_URL}/about-us/violin-shape.png`}
          random={this.props.animationFactors[0]}
        />
        <ViolinShapeFlipped
          src={`${IMAGES_URL}/about-us/violin-shape-flipped.png`}
          random={this.props.animationFactors[1]}
        />
      </AnimatedBoxHolder>
    );
  }
}

AnimatedBox.defaultProps = {
  isVisible: true,
  delay: 0,
  animationFactors: [0.3, 0.7],
};

AnimatedBox.propTypes = {
  animationFactors: arrayOf(number),
  delay: number,
  isVisible: bool,
};

export default AnimatedBox;
