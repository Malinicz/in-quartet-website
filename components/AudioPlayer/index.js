/* eslint-disable quotes */

import React, { Component } from 'react';
import { arrayOf, object } from 'prop-types';
import styled from '~/styles';

import ProgressBar from './ProgressBar';
import SongList from './SongList';
import Controls from './Controls';
import VolumeControl from './VolumeControl';

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
      currentSongLength: props.songList[0].duration,
    };
  }

  componentDidMount() {
    if (this.audio) {
      this.audio.src = this.props.songList[0].url;
    }
  }

  componentWillUnmount() {
    clearInterval(this.progressBarInterval);
  }

  onPlayPauseClick = () => {
    this.state.isPlaying ? this.pauseAudio() : this.playAudio();
  };

  onNextTrackClick = () => {
    const tracksLength = this.props.songList.length;
    const { currentTrack } = this.state;
    const nextTrack = currentTrack === tracksLength - 1 ? 0 : currentTrack + 1;
    this.playAudioFromStart(nextTrack);
  };

  onPrevTrackClick = () => {
    const tracksLength = this.props.songList.length;
    const { currentTrack } = this.state;
    const prevTrack = currentTrack === 0 ? tracksLength - 1 : currentTrack - 1;
    this.playAudioFromStart(prevTrack);
  };

  playAudioFromStart = trackNumber => {
    if (this.audio) {
      this.audio.pause();
      this.audio.src = this.props.songList[trackNumber].url;
      this.audio.load();
      this.audio.play();
      this.setState({ isPlaying: true, currentTrack: trackNumber });
      this.setProgressBarInterval();
    }
  };

  setProgressBarInterval = () => {
    this.clearProgressBarInterval();
    this.progressBarInterval = setInterval(() => {
      if (this.audio.readyState !== 4) {
        return this.setState({ isLoading: true });
      }
      if (this.audio.ended) {
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

  playAudio = () => {
    if (this.audio) {
      this.audio.play();
      this.setState({ isPlaying: true });
      this.setProgressBarInterval();
    }
  };

  pauseAudio = () => {
    if (this.audio) {
      this.audio.pause();
      this.setState({ isPlaying: false });
      this.clearProgressBarInterval();
    }
  };

  onSongClick = trackNumber => {
    this.playAudioFromStart(trackNumber);
    this.setState({ isPlaying: true, currentTrack: trackNumber });
  };

  setVolume = e => {
    if (this.audio) {
      this.audio.volume = e.target.id;
      this.setState({ currentVolume: parseFloat(e.target.id) });
    }
  };

  setCurrentTime = currentTime => {
    if (
      this.audio &&
      currentTime >= 0 &&
      currentTime <= this.state.currentSongLength
    ) {
      this.audio.currentTime = currentTime;
      this.setState({ currentTime });
    }
  };

  toggleVolumeMute = () => {
    if (this.audio) {
      this.setState(prevState => {
        const currentVolume = prevState.currentVolume === 0 ? 1 : 0;
        this.audio.volume = currentVolume;
        return { currentVolume };
      });
    }
  };

  render() {
    const {
      isPlaying,
      isLoading,
      currentTrack,
      currentSongLength,
      currentTime,
      currentVolume,
    } = this.state;

    const { songList } = this.props;

    return (
      <AudioPlayerHolder>
        <MainPlayerHolder>
          <SongList
            currentTrack={currentTrack}
            songList={songList}
            handleSongClick={this.onSongClick}
          />
          <Controls
            isLoading={isLoading}
            isPlaying={isPlaying}
            handlePlayPauseClick={this.onPlayPauseClick}
            handleNextTrackClick={this.onNextTrackClick}
            handlePrevTrackClick={this.onPrevTrackClick}
          />
          <VolumeControl
            currentVolume={currentVolume}
            toggleVolumeMute={this.toggleVolumeMute}
            handleSetVolume={this.setVolume}
          />
        </MainPlayerHolder>
        <ProgressBar
          currentTime={currentTime}
          currentSongLength={currentSongLength}
          handleSetCurrentTime={this.setCurrentTime}
        />
        <audio ref={audio => (this.audio = audio)}>
          <source />
        </audio>
      </AudioPlayerHolder>
    );
  }
}

AudioPlayer.propTypes = {
  songList: arrayOf(object).isRequired,
};
