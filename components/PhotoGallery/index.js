import React, { Component } from 'react';
import { arrayOf, shape, string, bool } from 'prop-types';
import styled from '~/styles';

import AnimatedBox from './AnimatedBox';

const baseUrl = '/static/images/multimedia';

const PhotoGalleryHolder = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 50px;
  overflow: hidden;
`;

const Row = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

const Wrapper = styled.div`
  position: relative;
  width: 120%;
  transform: ${props =>
    props.isTranslated ? 'translate3d(0, 0, 0)' : 'translate3d(-16.67%, 0, 0)'};
  transition: 0.3s transform ease;
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
`;

const ReactiveBox = styled(GenericItem)`
  position: relative;
  width: ${props => (props.isActive ? '0%' : '20%')};
  height: ${props => (props.isActive ? '0%' : '100%')};
`;

export class PhotoGallery extends Component {
  state = { isTranslated: false, activeRow: -1 };

  togglePhotoClick = (id, isPhotoHorizontal) => {
    this.setState(prevState => {
      const activeRow = id === prevState.activeRow ? -1 : id;
      const isAnyExpanded = activeRow !== -1;
      const isRowOdd = id % 2 === 0;
      return {
        isTranslated: isRowOdd && isPhotoHorizontal && isAnyExpanded,
        activeRow,
      };
    });
  };

  render() {
    const { isTranslated, activeRow } = this.state;
    // const { data } = this.props;

    const data = [
      { imageUrl: `${baseUrl}/photo1.jpg`, isHorizontal: false },
      { imageUrl: `${baseUrl}/photo2.jpg`, isHorizontal: false },
      { imageUrl: `${baseUrl}/photo3.jpg`, isHorizontal: true },
      { imageUrl: `${baseUrl}/photo4.jpg`, isHorizontal: true },
    ];

    return (
      <PhotoGalleryHolder>
        <Wrapper isTranslated={isTranslated}>
          <Row>
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
              <AnimatedBox isVisible={false} />
            </ReactiveBox>
            <ReactiveBox isActive={activeRow === 0 && !data[0].isHorizontal} />
          </Row>

          <Row>
            <ReactiveBox isActive={activeRow === 1} />
            <ReactiveBox isActive={activeRow === 1 && !data[1].isHorizontal}>
              <AnimatedBox isVisible={false} />
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
              <AnimatedBox delay={20} isVisible={false} />
            </ReactiveBox>
          </Row>

          <Row>
            <ReactiveBox isActive={activeRow === 2 && data[2].isHorizontal}>
              <AnimatedBox isVisible={false} />
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
              <AnimatedBox isVisible={false} />
            </ReactiveBox>
            <ReactiveBox isActive={activeRow === 2 && !data[2].isHorizontal} />
          </Row>

          <Row>
            <ReactiveBox isActive={activeRow === 3} />
            <ReactiveBox isActive={activeRow === 3 && !data[3].isHorizontal}>
              <AnimatedBox isVisible={false} />
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
      </PhotoGalleryHolder>
    );
  }
}

PhotoGallery.propTypes = {
  data: arrayOf(
    shape({
      imageUrl: string,
      isHorizontal: bool
    }),
  ),
};