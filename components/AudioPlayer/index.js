/* eslint-disable quotes */
//TODO refactor - move to separate components

import React, { Component } from 'react';
import styled from '~/styles';

import ProgressBar from './ProgressBar';

import { IMAGES_URL } from '~/constants/paths';

const AudioPlayerHolder = styled.div`
  margin: 30px 0 70px 0;
`;

const MainPlayerHolder = styled.div`
  display: flex;

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SongList = styled.div`
  flex: 3;
`;

const Controls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 3;
  margin-bottom: 30px;
`;

const SongTable = styled.table`
  width: 100%;
  color: ${props => props.theme.colors.darkLight};
  margin-bottom: 30px;
`;

const SongTableRow = styled.tr`
  color: ${props =>
    props.isActive
      ? props.theme.colors.primaryDark
      : props.theme.colors.darkLight};
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const SongTitleCell = styled.td``;

const SongLengthCell = styled.td`
  text-align: right;
  vertical-align: top;
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

const VolumeControl = styled.div`
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

const VolumeSquare = styled(ControlButton)`
  width: 15px;
  height: 15px;
  background-color: ${props =>
    props.isSelected
      ? props.theme.colors.primaryDark
      : props.theme.colors.lightDark};
`;

const VolumeIcon = styled.img`
  margin-top: 10px;
  margin-left: 10px;
  width: 30px;
`;

const ProgressBarHolder = styled.div`
  display: flex;
  flex-direction: column;
`;

const TRACKS = [
  {
    title: 'Kompilacja utworów',
    length: '02:40',
    url: '/static/audio/medley.mp3',
  },
  {
    title: "I don't wanna miss a thing",
    length: '04:02',
    url: '/static/audio/aerosmith.mp3',
  },
];

export class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.audio = null;
    this.progressBarInterval = null;
    this.state = {
      isLoading: false,
      isPlaying: false,
      currentTrack: 0,
      currentVolume: 1,
      currentTime: 0,
      currentSongLength: 160,
    };
  }

  onPlayPauseClick = () => {
    this.setState(prevState => {
      prevState.isPlaying ? this.pauseAudio() : this.playPausedAudio();
      return {
        isPlaying: !prevState.isPlaying,
      };
    });
  };

  onNextTrackClick = () => {
    this.setState(prevState => {
      const tracksLength = TRACKS.length;
      const nextTrack =
        prevState.currentTrack === tracksLength - 1
          ? 0
          : prevState.currentTrack + 1;
      this.playAudio(nextTrack);

      return {
        isPlaying: true,
        currentTrack: nextTrack,
      };
    });
  };

  onPrevTrackClick = () => {
    this.setState(prevState => {
      const tracksLength = TRACKS.length;
      const prevTrack =
        prevState.currentTrack === 0
          ? tracksLength - 1
          : prevState.currentTrack - 1;
      this.playAudio(prevTrack);

      return {
        isPlaying: true,
        currentTrack: prevTrack,
      };
    });
  };

  playAudio = trackNumber => {
    this.audio.pause();
    this.audio.src = TRACKS[trackNumber].url;
    this.audio.load();
    this.audio.play();
    this.setProgressBarInterval();
  };

  setProgressBarInterval = () => {
    this.progressBarInterval = setInterval(() => {
      if (this.audio.readyState !== 4) {
        return this.setState({ isLoading: true });
      }
      if (this.audio.ended) {
        this.clearProgressBarInterval();
        this.onNextTrackClick();
      }
      this.setState({
        currentTime: this.audio.currentTime,
        currentSongLength: this.audio.duration,
        isLoading: false,
      });
    }, 1000);
  };

  clearProgressBarInterval = () => {
    clearInterval(this.progressBarInterval);
  };

  pauseAudio = () => {
    this.audio.pause();
    this.clearProgressBarInterval();
  };

  playPausedAudio = () => {
    this.setProgressBarInterval();
    this.audio.play();
  };

  onSongClick = trackNumber => {
    this.playAudio(trackNumber);
    this.setState({ isPlaying: true, currentTrack: trackNumber });
  };

  getVolumeSquares = () => {
    const volume = this.state.currentVolume;
    let result = [];
    for (let i = 0; i < 10; i++) {
      const isSelected = i / 10 <= volume;
      result.push(
        <VolumeSquare
          id={i / 10}
          key={i}
          onClick={this.setVolume}
          isSelected={isSelected}
        />,
      );
    }
    return result;
  };

  setVolume = e => {
    if (this.audio) {
      this.audio.volume = e.target.id;
      this.setState({ currentVolume: e.target.id });
    }
  };

  setCurrentTime = currentTime => {
    if (currentTime >= 0 && currentTime <= this.state.currentSongLength) {
      this.audio.currentTime = currentTime;
      this.setState({ currentTime });
    }
  };

  render() {
    const {
      isPlaying,
      isLoading,
      currentTrack,
      currentSongLength,
      currentTime,
    } = this.state;

    return (
      <AudioPlayerHolder>
        <MainPlayerHolder>
          <SongList>
            <SongTable>
              <tbody>
                {TRACKS.map((track, index) => {
                  const isActive = index === currentTrack;
                  return (
                    <SongTableRow
                      key={track.title}
                      isActive={isActive}
                      onClick={() => this.onSongClick(index)}
                    >
                      <SongTitleCell>
                        {index + 1}. {track.title}
                      </SongTitleCell>
                      <SongLengthCell>{track.length}</SongLengthCell>
                    </SongTableRow>
                  );
                })}
              </tbody>
            </SongTable>
          </SongList>
          <Controls>
            <PreviousTrack onClick={this.onPrevTrackClick}>
              <ControlIcon src={`${IMAGES_URL}/previous-icon.svg`} />
            </PreviousTrack>
            <PlayPause onClick={this.onPlayPauseClick}>
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
            <NextTrack onClick={this.onNextTrackClick}>
              <ControlIcon src={`${IMAGES_URL}/next-icon.svg`} />
            </NextTrack>
          </Controls>
          <VolumeControl>
            <VolumeSquaresHolder>{this.getVolumeSquares()}</VolumeSquaresHolder>
            <VolumeIcon src={`${IMAGES_URL}/volume-icon.svg`} />
          </VolumeControl>
        </MainPlayerHolder>
        <ProgressBarHolder>
          <ProgressBar
            currentTime={currentTime}
            currentSongLength={currentSongLength}
            handleSetCurrentTime={this.setCurrentTime}
          />
        </ProgressBarHolder>
        <audio ref={audio => (this.audio = audio)}>
          <source src={TRACKS[0].url} />
        </audio>
      </AudioPlayerHolder>
    );
  }
}
