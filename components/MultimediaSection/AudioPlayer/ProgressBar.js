import React, { PureComponent } from 'react';
import { number, func } from 'prop-types';
import styled from '~/styles';

import { formatSongLength } from './helpers';

const ProgressBarHolder = styled.div`
  display: flex;
  flex-direction: column;
`;

const CurrentTime = styled.div`
  align-self: flex-end;
  margin-bottom: 10px;
  color: ${props => props.theme.colors.primaryDark};
`;

const Progress = styled.div`
  position: relative;
  width: 100%;
  height: 5px;
  background-color: ${props => props.theme.colors.lightDark};
  cursor: pointer;
`;

const HiddenProgress = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const PlayedProgress = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: ${props => props.theme.colors.primaryDark};
  transition: 0.3s width linear;
`;

const Circle = styled.div`
  position: absolute;
  right: -7px;
  top: -4px;
  width: 13px;
  height: 13px;
  background-color: ${props => props.theme.colors.primaryDark};
  border-radius: 100%;
`;

class ProgressBar extends PureComponent {
  onProgressClick = e => {
    const { currentSongLength } = this.props;
    const progressBarWidth = e.target.offsetWidth;
    const leftSpaceWidth = (window.innerWidth - progressBarWidth) / 2;
    const xMousePosition = e.pageX;
    const currentTime = Math.floor(
      (xMousePosition - leftSpaceWidth) / progressBarWidth * currentSongLength,
    );
    this.props.handleSetCurrentTime(currentTime);
  };

  render() {
    const { currentSongLength, currentTime } = this.props;
    const progressBarWidth = currentTime / currentSongLength * 100;

    return (
      <ProgressBarHolder>
        <CurrentTime>{formatSongLength(Math.ceil(currentTime))}</CurrentTime>
        <Progress>
          <HiddenProgress onClick={this.onProgressClick} />
          <PlayedProgress style={{ width: `${progressBarWidth}%` }}>
            <Circle />
          </PlayedProgress>
        </Progress>
      </ProgressBarHolder>
    );
  }
}

ProgressBar.propTypes = {
  currentTime: number.isRequired,
  currentSongLength: number.isRequired,
  handleSetCurrentTime: func.isRequired,
};

export default ProgressBar;
