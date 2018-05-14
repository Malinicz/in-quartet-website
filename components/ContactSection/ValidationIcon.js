import React from 'react';
import styled, { keyframes } from '~/styles';
import { oneOf, bool } from 'prop-types';

import { IMAGES_URL } from '~/constants/paths';

const faceAnimation = keyframes`
0% { opacity: 0};
100% {opacity: 1}
`;

const ValidationIconHolder = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
`;

const Face = styled.div`
  width: 25px;
  height: 20px;
  background-image: ${props =>
    props.isHappy
      ? `url(${IMAGES_URL}/face-happy.svg)`
      : `url(${IMAGES_URL}/face-sad.svg)`};
  background-size: cover;
  animation: ${faceAnimation} 0.5s ease;
  transition: 0.3s background-image all;
`;

const ValidationIcon = ({ isValid }) => {
  return (
    <ValidationIconHolder isVisible={isValid !== null}>
      {isValid ? <Face isHappy={true} /> : <Face isHappy={false} />}
    </ValidationIconHolder>
  );
};

ValidationIcon.propTypes = {
  isValid: oneOf([null, bool]),
};

export default ValidationIcon;
