import React, { Component } from 'react';
import { arrayOf, shape, string, bool, func, number } from 'prop-types';
import styled from '~/styles';

import AnimatedBox from './AnimatedBox';

const GalleryChunkHolder = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Row = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  transition: margin 0.3s ease;

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    margin: ${props => (props.isActive ? '30px 0px' : '0px')};
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 120%;
  transform: ${props =>
    props.isTranslated ? 'translate3d(0, 0, 0)' : 'translate3d(-16.67%, 0, 0)'};
  transition: 0.3s transform ease;

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    transform: none;
    width: 100%;
  }
`;

const GenericItem = styled.div`
  position: relative;
  width: 20%;
  transition: 0.3s ease all;

  &::before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`;

const PhotoBoxSibling = styled(GenericItem)`
  background-image: ${props => `url("${props.imageUrl}")`};
  background-size: cover;
  width: ${props =>
    props.isActive ? (props.isHorizontal ? '40%' : '60%') : '20%'};
  cursor: pointer;

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    width: ${props => (props.isActive ? '0%' : '50%')};
    padding-top: ${props => (props.isActive ? '75%' : '0%')};
  }
`;

const PhotoBox = styled(GenericItem)`
  position: relative;
  z-index: 2;
  width: ${props =>
    props.isActive ? (props.isHorizontal ? '60%' : '40%') : '20%'};
  background-image: ${props => `url(${props.imageUrl})`};
  background-size: cover;
  cursor: pointer;

  &::before {
    padding-top: 0%;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    width: ${props => (props.isActive ? '100%' : '50%')};
  }
`;

const ReactiveBox = styled(GenericItem)`
  position: relative;
  width: ${props => (props.isActive ? '0%' : '20%')};
  height: ${props => (props.isActive ? '0%' : '100%')};

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    display: none;
  }
`;

class GalleryChunk extends Component {
  state = { isTranslated: false, activeRow: -1 };

  togglePhotoClick = (photoId, isPhotoHorizontal) => {
    const { chunkId, handlePhotoClick } = this.props;
    handlePhotoClick(chunkId, photoId, isPhotoHorizontal);
  };

  render() {
    const { isTranslated, data, activeRow } = this.props;

    return (
      <GalleryChunkHolder>
        <Wrapper isTranslated={isTranslated}>
          <Row isActive={activeRow === 0}>
            <ReactiveBox isActive={activeRow === 0 && data[0].isHorizontal}>
              <AnimatedBox isVisible={false} />
            </ReactiveBox>
            <ReactiveBox isActive={activeRow === 0} />
            <PhotoBox
              id={0}
              isActive={activeRow === 0}
              onClick={() => this.togglePhotoClick(0, data[0].isHorizontal)}
              imageUrl={data[0].imageUrl}
              isHorizontal={data[0].isHorizontal}
            />
            <PhotoBoxSibling
              isActive={activeRow === 0}
              isHorizontal={data[0].isHorizontal}
            />
            <ReactiveBox isActive={activeRow === 0}>
              <AnimatedBox isVisible={activeRow === 2 || activeRow === 3} />
            </ReactiveBox>
            <ReactiveBox isActive={activeRow === 0 && !data[0].isHorizontal}>
              <AnimatedBox
                isVisible={!data[1].isHorizontal && activeRow === 1}
              />
            </ReactiveBox>
          </Row>

          <Row isActive={activeRow === 1}>
            <ReactiveBox isActive={activeRow === 1} />
            <ReactiveBox isActive={activeRow === 1 && !data[1].isHorizontal}>
              <AnimatedBox isVisible={activeRow === -1 || activeRow === 3} />
            </ReactiveBox>
            <PhotoBoxSibling
              id={1}
              isActive={activeRow === 1}
              isHorizontal={data[1].isHorizontal}
            />
            <PhotoBox
              id={1}
              isActive={activeRow === 1}
              onClick={() => this.togglePhotoClick(1, data[1].isHorizontal)}
              imageUrl={data[1].imageUrl}
              isHorizontal={data[1].isHorizontal}
            />
            <ReactiveBox isActive={activeRow === 1} />
            <ReactiveBox isActive={activeRow === 1 && data[1].isHorizontal}>
              <AnimatedBox
                delay={20}
                isVisible={
                  activeRow === -1 ||
                  (!isTranslated && (activeRow === 0 || activeRow === 2)) ||
                  activeRow === 3
                }
              />
            </ReactiveBox>
          </Row>

          <Row isActive={activeRow === 2}>
            <ReactiveBox isActive={activeRow === 2 && data[2].isHorizontal}>
              <AnimatedBox isVisible={activeRow === 0} delay={15} />
            </ReactiveBox>
            <ReactiveBox isActive={activeRow === 2} />
            <PhotoBox
              id={2}
              isActive={activeRow === 2}
              onClick={() => this.togglePhotoClick(2, data[2].isHorizontal)}
              imageUrl={data[2].imageUrl}
              isHorizontal={data[2].isHorizontal}
            />
            <PhotoBoxSibling
              isActive={activeRow === 2}
              isHorizontal={data[2].isHorizontal}
            />
            <ReactiveBox isActive={activeRow === 2}>
              <AnimatedBox
                isVisible={activeRow === -1 || activeRow === 0}
                delay={10}
              />
            </ReactiveBox>
            <ReactiveBox isActive={activeRow === 2 && !data[2].isHorizontal}>
              <AnimatedBox
                isVisible={!data[1].isHorizontal && activeRow === 1}
                delay={7}
              />
            </ReactiveBox>
          </Row>

          <Row isActive={activeRow === 3}>
            <ReactiveBox isActive={activeRow === 3} />
            <ReactiveBox isActive={activeRow === 3 && !data[3].isHorizontal}>
              <AnimatedBox
                isVisible={activeRow === 0 || activeRow === 1}
                delay={3}
              />
            </ReactiveBox>
            <PhotoBoxSibling
              id={3}
              isActive={activeRow === 3}
              isHorizontal={data[3].isHorizontal}
            />
            <PhotoBox
              id={3}
              isActive={activeRow === 3}
              onClick={() => this.togglePhotoClick(3, data[3].isHorizontal)}
              imageUrl={data[3].imageUrl}
              isHorizontal={data[3].isHorizontal}
            />
            <ReactiveBox isActive={activeRow === 3} />
            <ReactiveBox isActive={activeRow === 3 && data[3].isHorizontal}>
              <AnimatedBox delay={20} isVisible={false} />
            </ReactiveBox>
          </Row>
        </Wrapper>
      </GalleryChunkHolder>
    );
  }
}

GalleryChunk.propTypes = {
  chunkId: number,
  activeRow: number,
  isTranslated: bool,
  handleTranslate: func.isRequired,
  handlePhotoClick: func.isRequired,
  data: arrayOf(
    shape({
      imageUrl: string,
      isHorizontal: bool,
    }),
  ),
};

export default GalleryChunk;
