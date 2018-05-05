import React from 'react';
import { bool, string } from 'prop-types';
import styled, { keyframes } from '~/styles';

import { H3 } from '~/components/ui';

const headerMoveIn = keyframes`
  0% { opacity: 0; }
  1% { top: 15px; left: 15px; transform: translate(0,-100px) }
  100% { top: 15px; left: 15px; transform: translate(0,0)}
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
  100% { opacity: 1; top: 100px}
`;

const bodyMoveOut = keyframes`
  0% { opacity: 0}
  100% { opacity: 0}
`;

const DescriptionHolder = styled.article`
  padding: ${props => props.theme.spacing}px;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const DescriptionHeader = styled.header`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${props =>
    props.isActive ? `${headerMoveIn} 0.7s ease` : `${headerMoveOut} 1s ease`};
  animation-fill-mode: forwards;
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
  animation: ${props =>
    props.isActive ? `${bodyMoveIn} 0.7s ease` : `${bodyMoveOut} 2s ease`};
  animation-fill-mode: forwards;
`;

const Description = ({ isActive, title, subtitle, body }) => {
  return (
    <DescriptionHolder>
      <DescriptionHeader isActive={isActive}>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </DescriptionHeader>
      <DescriptionBody isActive={isActive}>{body}</DescriptionBody>
    </DescriptionHolder>
  );
};

Description.propTypes = {
  isActive: bool.isRequired,
  title: string,
  subtitle: string,
  body: string,
};

export default Description;
