import React, { Component } from 'react';
import styled from '~/styles';

import GalleryChunk from './GalleryChunk';

const baseUrl = '/static/images/multimedia';

const data = [
  { imageUrl: `${baseUrl}/photo1.jpg`, isHorizontal: true },
  { imageUrl: `${baseUrl}/photo2.jpg`, isHorizontal: true },
  { imageUrl: `${baseUrl}/photo3.jpg`, isHorizontal: true },
  { imageUrl: `${baseUrl}/photo4.jpg`, isHorizontal: false },
];

export class PhotoGallery extends Component {
  constructor(props) {
    super(props);
    this.state = { isTranslated: false, activeRow: { 0: -1, 1: -1 } };
  }

  onTranslate = isTranslated => {
    this.setState({ isTranslated });
  };

  togglePhotoClick = (chunkId, photoId, isPhotoHorizontal) => {
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
          data={data}
          handleTranslate={this.onTranslate}
          handlePhotoClick={this.togglePhotoClick}
          activeRow={activeRow[0]}
          isTranslated={isTranslated}
        />
        <GalleryChunk
          chunkId={1}
          data={data}
          activeRow={activeRow[1]}
          handleTranslate={this.onTranslate}
          handlePhotoClick={this.togglePhotoClick}
          isTranslated={isTranslated}
        />
      </React.Fragment>
    );
  }
}
