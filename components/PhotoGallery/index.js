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
  state = { isTranslated: false };

  onTranslate = isTranslated => {
    this.setState({ isTranslated });
  };

  render() {
    const { isTranslated } = this.state;
    return (
      <React.Fragment>
        <GalleryChunk
          data={data}
          handleTranslate={this.onTranslate}
          isTranslated={isTranslated}
        />
        <GalleryChunk
          data={data}
          handleTranslate={this.onTranslate}
          isTranslated={isTranslated}
        />
      </React.Fragment>
    );
  }
}
