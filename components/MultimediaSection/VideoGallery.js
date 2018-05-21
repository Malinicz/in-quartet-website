import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import styled from '~/styles';

import { H3 } from '~/components/ui';

import { IMAGES_URL } from '~/constants/paths';

const VideoGalleryHolder = styled.div`
  display: flex;
  flex-direction: column;
`;

const VideoHolder = styled.div`
  position: relative;
  margin-bottom: 130px;
  width: 620px;
  height: 349px;
  align-self: ${props => (props.isEven ? 'flex-end' : 'flex-start')};

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    width: 100%;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    width: 100%;
  }
`;

const IFrame = styled.iframe`
  display: block;
  width: 100%;
  height: 100%;
  padding: 0;
  margin-bottom: 0.6em;
`;

const Background = styled.div`
  position: absolute;
  z-index: -1;
  top: ${props => props.theme.spacing * 2}px;
  left: ${props =>
    props.isEven
      ? `-${props.theme.spacing * 2}px`
      : `${props.theme.spacing * 2}px`};
  width: 100%;
  height: 115%;
  background-image: ${props =>
    props.isEven
      ? `url('${IMAGES_URL}/gradient-gray.png')`
      : `url('${IMAGES_URL}/gradient-pink.png')`};

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    left: 0;
  }
`;

const TitleHolder = styled.div`
  margin-left: ${props => props.theme.spacing * 3}px;
  margin-right: ${props => (props.isEven ? `${props.theme.spacing * 3}px` : 0)};
  text-align: ${props => (props.isEven ? 'right' : 'left')};

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    text-align: left;
    margin-left: ${props => props.theme.spacing}px;
  }
`;

const Artist = styled(H3)`
  padding: 0;
  margin: 0;
  font-size: 1.3em;
`;

const Title = styled.h4`
  margin: 0;
`;

const VideoGallery = ({ videos }) => {
  return (
    <VideoGalleryHolder>
      {videos.map((video, index) => {
        const isEven = index % 2 === 1;

        return (
          <VideoHolder key={video.title} isEven={isEven}>
            <IFrame
              src={video.videoUrl}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <Background isEven={isEven} />
            <TitleHolder isEven={isEven}>
              <Artist>{video.title}</Artist>
              <Title>{video.subtitle}</Title>
            </TitleHolder>
          </VideoHolder>
        );
      })}
    </VideoGalleryHolder>
  );
};

VideoGallery.propTypes = {
  videos: arrayOf(
    shape({
      title: string,
      subtitle: string,
      videoUrl: string,
    }),
  ),
};

export default VideoGallery;
