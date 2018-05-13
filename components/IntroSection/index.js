import React, { Component } from 'react';
import styled from '~/styles';

import { Section, H1 } from '~/components/ui';

import { IMAGES_URL } from '~/constants/paths';

const IntroSectionHolder = styled(Section)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100vh;
  max-width: initial !important;
  color: ${props => props.theme.colors.lightLight};
`;

const BackgroundHolder = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-size: cover;
  background-position: center;
  transition: opacity 0.5s ease;
`;

const NormalBackground = styled(BackgroundHolder)`
  background-image: ${`url(${IMAGES_URL}/intro.jpg)`};
  opacity: ${props => (props.isCrazy ? 0 : 1)};
`;

const CrazyBackground = styled(BackgroundHolder)`
  background-image: ${`url(${IMAGES_URL}/intro-crazy.jpg)`};
  opacity: ${props => (props.isCrazy ? 1 : 0)};
`;

const Logo = styled.img`
  position: relative;
  width: 400px;
  margin: 0;
  padding: 0;
  transition: transform 0.5s ease;
  transform: ${props => (props.isCrazy ? 'rotate(5deg)' : 'rotate(0deg)')};
  cursor: pointer;

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    width: 100%;
    max-width: 350px;
  }
`;

const Title = styled(H1)`
  position: relative;
  margin: 0 0 1em 0;
  font-size: 1.2em;
  transition: transform 0.5s ease;
  transform: ${props => (props.isCrazy ? 'rotate(-3deg)' : 'rotate(0deg)')};
`;

export class IntroSection extends Component {
  state = { isCrazy: false };

  toggleCraziness = () => {
    this.setState(prevState => ({ isCrazy: !prevState.isCrazy }));
  };

  render() {
    const { isCrazy } = this.state;

    return (
      <IntroSectionHolder>
        <NormalBackground isCrazy={isCrazy} />
        <CrazyBackground isCrazy={isCrazy} />
        <Logo
          src={`${IMAGES_URL}/logo-white.svg`}
          onClick={this.toggleCraziness}
          isCrazy={isCrazy}
        />
        <Title isCrazy={isCrazy}>kwartet smyczkowy</Title>
      </IntroSectionHolder>
    );
  }
}
