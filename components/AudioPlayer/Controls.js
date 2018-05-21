import React from 'react';
import { bool, func } from 'prop-types';
import styled from '~/styles';

import { IMAGES_URL } from '~/constants/paths';

const ControlsHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 3;
  margin-bottom: 30px;
`;

const ControlButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin: 5px;
  background-color: ${props => props.theme.colors.primary};
  transition: 0.3s ease all;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const PlayPause = styled(ControlButton)`
  width: 70px;
  height: 70px;
`;

const ControlIcon = styled.img`
  width: 50%;
`;

const PreviousTrack = styled(ControlButton)``;

const NextTrack = styled(ControlButton)``;

const Controls = ({
  isLoading,
  isPlaying,
  handlePlayPauseClick,
  handlePrevTrackClick,
  handleNextTrackClick,
}) => {
  return (
    <ControlsHolder>
      <PreviousTrack onClick={handlePrevTrackClick}>
        <ControlIcon src={`${IMAGES_URL}/previous-icon.svg`} />
      </PreviousTrack>
      <PlayPause onClick={handlePlayPauseClick}>
        <ControlIcon
          src={`${IMAGES_URL}/${
            isLoading
              ? 'loader.svg'
              : isPlaying
                ? 'pause-icon.svg'
                : 'play-icon.svg'
          }`}
        />
      </PlayPause>
      <NextTrack onClick={handleNextTrackClick}>
        <ControlIcon src={`${IMAGES_URL}/next-icon.svg`} />
      </NextTrack>
    </ControlsHolder>
  );
};

Controls.propTypes = {
  isLoading: bool.isRequired,
  isPlaying: bool.isRequired,
  handlePlayPauseClick: func.isRequired,
  handlePrevTrackClick: func.isRequired,
  handleNextTrackClick: func.isRequired,
};

export default Controls;
