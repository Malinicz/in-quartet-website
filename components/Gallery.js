import React, { Component } from 'react';
import styled from '~/styles';

const GalleryHolder = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 50px;
  outline: 2px solid red;
`;

const Row = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  outline: 1px solid red;
`;

const Wrapper = styled.div`
  position: relative;
  width: 120%;
  outline: 3px solid grey;
  transform: ${props =>
    props.isTranslated ? 'translate3d(0, 0, 0)' : 'translate3d(-16.67%, 0, 0)'};
  transition: 0.3s transform ease;
`;

const GenericItem = styled.div`
  position: relative;
  width: 20%;
  transition: 0.3s ease all;
  outline: 1px solid green;

  &::before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`;

const PhotoBox = styled(GenericItem)`
  background-color: gray;
  background-size: cover;
  width: ${props => (props.isActive ? '40%' : '20%')};
`;

const PhotoBoxSibling = styled(GenericItem)`
  width: ${props => (props.isActive ? '0%' : '20%')};
`;

const DescriptionBox = styled(GenericItem)`
  width: ${props => (props.isActive ? '60%' : '20%')};
  outline: 5px solid yellow;
  &::before {
    padding-top: 0%;
  }
`;

const DescriptionBoxSibling = styled(GenericItem)`
  width: ${props => (props.isActive ? '0%' : '20%')};
`;

export class Gallery extends Component {
  state = { isTranslated: false, activeRow: 0 };

  toggleEvenRowClick = e => {
    const id = e.target.id;
    this.setState(prevState => {
      const activeRow = parseInt(id) === prevState.activeRow ? 0 : parseInt(id);
      return { isTranslated: true, activeRow };
    });
  };

  toggleOddRowClick = e => {
    const id = e.target.id;
    this.setState(prevState => {
      const activeRow = parseInt(id) === prevState.activeRow ? 0 : parseInt(id);

      return { isTranslated: false, activeRow };
    });
  };

  render() {
    const { isTranslated, activeRow } = this.state;

    return (
      <GalleryHolder>
        <Wrapper isTranslated={isTranslated}>
          <Row>
            <GenericItem />
            <PhotoBoxSibling isActive={activeRow === 1} />
            <PhotoBox
              id={1}
              imageUrl="/static/images/photo1.jpg"
              onClick={this.toggleOddRowClick}
              isActive={activeRow === 1}
            />
            <DescriptionBox isActive={activeRow === 1} />
            <DescriptionBoxSibling isActive={activeRow === 1} />
            <DescriptionBoxSibling isActive={activeRow === 1} />
          </Row>
          <Row>
            <DescriptionBoxSibling isActive={activeRow === 2} />
            <DescriptionBoxSibling isActive={activeRow === 2} />
            <DescriptionBox isActive={activeRow === 2} />
            <PhotoBox
              id={2}
              imageUrl="/static/images/photo2.jpg"
              onClick={this.toggleEvenRowClick}
              isActive={activeRow === 2}
            />
            <PhotoBoxSibling isActive={activeRow === 2} />
            <GenericItem />
          </Row>
          <Row>
            <GenericItem />
            <PhotoBoxSibling isActive={activeRow === 3} />
            <PhotoBox
              id={3}
              imageUrl="/static/images/photo3.jpg"
              onClick={this.toggleOddRowClick}
              isActive={activeRow === 3}
            />
            <DescriptionBox isActive={activeRow === 3} />
            <DescriptionBoxSibling isActive={activeRow === 3} />
            <DescriptionBoxSibling isActive={activeRow === 3} />
          </Row>
          <Row>
            <DescriptionBoxSibling isActive={activeRow === 4} />
            <DescriptionBoxSibling isActive={activeRow === 4} />
            <DescriptionBox isActive={activeRow === 4} />
            <PhotoBox
              id={4}
              imageUrl="/static/images/photo4.jpg"
              onClick={this.toggleEvenRowClick}
              isActive={activeRow === 4}
            />
            <PhotoBoxSibling isActive={activeRow === 4} />
            <GenericItem />
          </Row>
        </Wrapper>
      </GalleryHolder>
    );
  }
}
