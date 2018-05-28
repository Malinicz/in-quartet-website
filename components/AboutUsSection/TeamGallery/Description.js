import React from 'react';
import { bool, string } from 'prop-types';
import styled, { keyframes } from '~/styles';

import { H3 } from '~/components/ui';

const headerMoveIn = keyframes`
  0% { opacity: 0; }
  1% { top: 0; left: 0; transform: translate(0,-100px) }
  100% { top: 0; left: 0; transform: translate(0,0)}
`;

const headerMoveOut = keyframes`
  0% { opacity: 0}
  1% {text-align: center }
  20% { opacity: 0}
  100% { opacity: 1; text-align: center;}
`;

const bodyMoveIn = keyframes`
  0% { opacity: 0}
  1% { top: 200px}
  20% {opacity: 0 }
  100% { opacity: 1; top: 80px}
`;

const bodyMoveOut = keyframes`
  0% { opacity: 0}
  100% { opacity: 0}
`;

const DescriptionHolder = styled.article`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const DescriptionHeader = styled.header`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: ${props => props.theme.spacing}px;
  width: 100%;
  animation: ${props =>
    props.isActive ? `${headerMoveIn} 0.65s ease` : `${headerMoveOut} 1s ease`};
  animation-fill-mode: forwards;
  text-align: ${props => (props.isEven ? 'right' : 'left')};

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    position: static;
    top: unset;
    left: unset;
    transform: none;
    animation: none;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    text-align: left;
    background-color: ${props => props.theme.colors.light};
    padding-top: 0;
    padding-bottom: 1.5em;
  }
`;

const Title = styled(H3)`
  padding-bottom: 0;
  margin: 0;
`;

const Subtitle = styled.p`
  margin-top: -0.5em;
  margin-bottom: 0;
`;

const DescriptionBody = styled.p`
  position: absolute;
  padding: ${props => props.theme.spacing}px;
  text-align: ${props => (props.isEven ? 'right' : 'left')};
  animation: ${props =>
    props.isActive ? `${bodyMoveIn} 0.7s ease` : `${bodyMoveOut} 2s ease`};
  animation-fill-mode: forwards;

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    position: static;
    animation: none;
    transform: none;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    text-align: left;
    padding-top: 0;
  }
`;

const Description = ({ isActive, isEven, title, subtitle, body }) => {
  return (
    <DescriptionHolder>
      <DescriptionHeader isActive={isActive} isEven={isEven}>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </DescriptionHeader>
      <DescriptionBody isActive={isActive} isEven={isEven}>
        {body}
      </DescriptionBody>
    </DescriptionHolder>
  );
};

Description.defaultProps = {
  isActive: false,
  isEven: false,
};

Description.propTypes = {
  isActive: bool.isRequired,
  isEven: bool,
  title: string,
  subtitle: string,
  body: string,
};

export default Description;
