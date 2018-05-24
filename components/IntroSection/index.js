import React, { Component } from 'react';
import { object } from 'prop-types';
import styled from '~/styles';

import { Section, H1, SocialIcons } from '~/components/ui';

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

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    color: ${props => props.theme.colors.darkDark};
  }
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

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    background-size: contain;
    background-repeat: no-repeat;
    background-position-y: 65px;
  }
`;

const NormalBackground = styled(BackgroundHolder)`
  background-image: ${`url(${IMAGES_URL}/intro.jpg)`};
  opacity: ${props => (props.isCrazy ? 0 : 1)};

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    background-image: ${`url(${IMAGES_URL}/intro-mobile.jpg)`};
  }
`;

const CrazyBackground = styled(BackgroundHolder)`
  background-image: ${`url(${IMAGES_URL}/intro-crazy.jpg)`};
  opacity: ${props => (props.isCrazy ? 1 : 0)};

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    background-image: ${`url(${IMAGES_URL}/intro-crazy-mobile.jpg)`};
  }
`;

const Logo = styled.div`
  position: relative;
  width: 400px;
  height: 80px;
  margin: 0;
  padding: 0;
  background-image: url('${IMAGES_URL}/logo-white.svg');
  background-size: cover;
  transition: transform 0.5s ease;
  transform: ${props => (props.isCrazy ? 'rotate(5deg)' : 'rotate(0deg)')};
  cursor: pointer;

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    width: 250px;
    height: 50px;

      background-image: url('${IMAGES_URL}/logo-black.svg');
  }
`;

const Title = styled(H1)`
  position: relative;
  margin: 0.5em 0 1em 0;
  font-size: 1.2em;
  transition: transform 0.5s ease;
  transform: ${props => (props.isCrazy ? 'rotate(-3deg)' : 'rotate(0deg)')};

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    margin-top: 0.2em;
  }
`;

const SocialIconsHolder = styled.div`
  display: none;
  margin-bottom: 20px;
  z-index: 1;

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    display: block;
  }
`;

export class IntroSection extends Component {
  constructor(props) {
    super(props);
    this.state = { isCrazy: false };
  }

  toggleCraziness = () => {
    this.setState(prevState => ({ isCrazy: !prevState.isCrazy }));
  };

  render() {
    const { isCrazy } = this.state;
    const { data } = this.props;

    return (
      <IntroSectionHolder>
        <NormalBackground isCrazy={isCrazy} />
        <CrazyBackground isCrazy={isCrazy} />
        <Logo onClick={this.toggleCraziness} isCrazy={isCrazy} />
        <Title isCrazy={isCrazy}>{data.subtitle}</Title>
        <SocialIconsHolder>
          <SocialIcons />
        </SocialIconsHolder>
      </IntroSectionHolder>
    );
  }
}

IntroSection.propTypes = {
  data: object.isRequired,
};
