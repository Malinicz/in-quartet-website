import React from 'react';
import { number, func } from 'prop-types';
import styled from '~/styles';

import { IMAGES_URL } from '~/constants/paths';

const VolumeControlHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 3;
  margin-bottom: 30px;

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    flex-direction: row;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

const VolumeSquaresHolder = styled.div`
  display: flex;
`;

const VolumeSquare = styled.div`
  margin: 5px;
  width: 15px;
  height: 15px;
  background-color: ${props =>
    props.isSelected
      ? props.theme.colors.primaryDark
      : props.theme.colors.lightDark};

  transition: 0.3s ease all;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const VolumeIcon = styled.img`
  margin-top: 10px;
  margin-left: 10px;
  width: 30px;
  cursor: pointer;
`;

const VolumeControl = ({
  currentVolume,
  toggleVolumeMute,
  handleSetVolume,
}) => {
  const getVolumeSquares = () => {
    let result = [];
    for (let i = 0; i < 10; i++) {
      const isSelected = i / 10 <= currentVolume;
      result.push(
        <VolumeSquare
          id={i / 10}
          key={i}
          onClick={handleSetVolume}
          isSelected={isSelected}
        />,
      );
    }
    return result;
  };

  return (
    <VolumeControlHolder>
      <VolumeSquaresHolder>{getVolumeSquares()}</VolumeSquaresHolder>
      <VolumeIcon
        src={`${IMAGES_URL}/${
          currentVolume === 0 ? 'volume-muted-icon.svg' : 'volume-icon.svg'
        }`}
        onClick={toggleVolumeMute}
      />
    </VolumeControlHolder>
  );
};

VolumeControl.propTypes = {
  currentVolume: number.isRequired,
  toggleVolumeMute: func.isRequired,
  handleSetVolume: func.isRequired,
};

export default VolumeControl;
