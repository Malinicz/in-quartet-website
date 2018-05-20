import React, { PureComponent } from 'react';
import { number, func } from 'prop-types';
import styled from '~/styles';

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
  transition: 0.7s width ease;
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
  formatSongLength = timeInSeconds => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds - minutes * 60;
    const formattedMinutes = minutes >= 10 ? minutes : `0${minutes}`;
    const formattedSeconds = seconds >= 10 ? seconds : `0${seconds}`;
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  //TODO refactor this
  onProgressClick = e => {
    const { currentSongLength } = this.props;
    const leftWidth = (window.innerWidth - e.target.offsetWidth) / 2;
    const width = e.target.offsetWidth;
    const xPosition = e.pageX;
    const currentTime = Math.floor(
      (xPosition - leftWidth) / width * currentSongLength,
    );
    this.props.handleSetCurrentTime(currentTime);
  };

  render() {
    const { currentSongLength, currentTime } = this.props;
    const progressBarWidth = currentTime / currentSongLength * 100;

    return (
      <React.Fragment>
        <CurrentTime>
          {this.formatSongLength(Math.ceil(currentTime))}
        </CurrentTime>
        <Progress>
          <HiddenProgress onClick={this.onProgressClick} />
          <PlayedProgress style={{ width: `${progressBarWidth}%` }}>
            <Circle />
          </PlayedProgress>
        </Progress>
      </React.Fragment>
    );
  }
}

ProgressBar.propTypes = {
  currentTime: number.isRequired,
  currentSongLength: number.isRequired,
  handleSetCurrentTime: func.isRequired,
};

export default ProgressBar;
