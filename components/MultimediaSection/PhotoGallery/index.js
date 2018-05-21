import React, { Component } from 'react';

import GalleryChunk from './GalleryChunk';

import { IMAGES_URL } from '~/constants/paths';

const baseUrl = `${IMAGES_URL}/multimedia`;

//TODO refactor this component

const dataSet1 = [
  { imageUrl: `${baseUrl}/photo1.jpg`, isHorizontal: true },
  { imageUrl: `${baseUrl}/photo2.jpg`, isHorizontal: true },
  { imageUrl: `${baseUrl}/photo3.jpg`, isHorizontal: true },
  { imageUrl: `${baseUrl}/photo4.jpg`, isHorizontal: true },
];

const dataSet2 = [
  { imageUrl: `${baseUrl}/photo5.jpg`, isHorizontal: true },
  { imageUrl: `${baseUrl}/photo6.jpg`, isHorizontal: true },
  { imageUrl: `${baseUrl}/photo7.jpg`, isHorizontal: true },
  { imageUrl: `${baseUrl}/photo8.jpg`, isHorizontal: true },
];

class PhotoGallery extends Component {
  constructor(props) {
    super(props);
    this.photoGalleryInterval = null;
    this.photoGalleryDelay = null;
    this.state = { isTranslated: true, activeRow: { 0: 0, 1: -1 } };
  }

  componentDidMount() {
    this.setPhotoGalleryInterval();
  }

  componentWillUnmount() {
    clearInterval(this.photoGalleryInterval);
    clearTimeout(this.photoGalleryDelay);
  }

  setPhotoGalleryInterval = () => {
    this.photoGalleryInterval = setInterval(() => {
      clearTimeout(this.photoGalleryDelay);
      const nextInFirstRow = Math.floor(Math.random() * 4) - 1;
      const nextInSecondRow =
        nextInFirstRow === -1 ? Math.floor(Math.random() * 3) : -1;

      const isTranslated =
        this.isRowEven(nextInFirstRow) || this.isRowEven(nextInSecondRow);

      this.setState({
        activeRow: { 0: nextInFirstRow, 1: nextInSecondRow },
        isTranslated,
      });
    }, 3000);
  };

  isRowEven = number => {
    if (number === -1) return false;
    return number % 2 !== 1;
  };

  onTranslate = isTranslated => {
    this.setState({ isTranslated });
  };

  togglePhotoClick = (chunkId, photoId, isPhotoHorizontal) => {
    clearInterval(this.photoGalleryInterval);
    clearTimeout(this.photoGalleryDelay);
    this.photoGalleryDelay = setTimeout(() => {
      this.setPhotoGalleryInterval();
    }, 5000);

    this.setState(prevState => {
      const chunkActiveRow =
        photoId === prevState.activeRow[chunkId] ? -1 : photoId;

      const isAnyExpanded = chunkActiveRow !== -1;
      const isRowOdd = photoId % 2 === 0;

      const activeRow = Object.keys(prevState.activeRow).reduce(
        (result, next) => {
          const chunkValue = parseInt(next) === chunkId ? chunkActiveRow : -1;
          return { ...result, [next]: chunkValue };
        },
        {},
      );

      return {
        activeRow,
        isTranslated: isRowOdd && isPhotoHorizontal && isAnyExpanded,
      };
    });
  };

  render() {
    const { isTranslated, activeRow } = this.state;

    return (
      <React.Fragment>
        <GalleryChunk
          chunkId={0}
          data={dataSet1}
          handleTranslate={this.onTranslate}
          handlePhotoClick={this.togglePhotoClick}
          activeRow={activeRow[0]}
          isTranslated={isTranslated}
        />
        <GalleryChunk
          chunkId={1}
          data={dataSet2}
          activeRow={activeRow[1]}
          handleTranslate={this.onTranslate}
          handlePhotoClick={this.togglePhotoClick}
          isTranslated={isTranslated}
        />
      </React.Fragment>
    );
  }
}

export default PhotoGallery;
