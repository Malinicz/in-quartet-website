import React, { Component } from 'react';
import styled from '~/styles';

import Description from './Description';

const GalleryHolder = styled.div`
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

const PhotoBox = styled(GenericItem)`
  background-image: ${props => `url("${props.imageUrl}")`};
  background-size: cover;
  width: ${props => (props.isActive ? '40%' : '20%')};
`;

const PhotoBoxSibling = styled(GenericItem)`
  width: ${props => (props.isActive ? '0%' : '20%')};
`;

const DescriptionBox = styled(GenericItem)`
  position: relative;
  width: ${props => (props.isActive ? '60%' : '20%')};

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
      return { isTranslated: activeRow === 0 ? false : true, activeRow };
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
    const { data } = this.props;

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
            <DescriptionBox isActive={activeRow === 1}>
              <Description
                isActive={activeRow === 1}
                title={data.ania.title}
                subtitle={data.ania.subtitle}
                body={data.ania.body}
              />
            </DescriptionBox>
            <DescriptionBoxSibling isActive={activeRow === 1} />
            <DescriptionBoxSibling isActive={activeRow === 1} />
          </Row>
          <Row>
            <DescriptionBoxSibling isActive={activeRow === 2} />
            <DescriptionBoxSibling isActive={activeRow === 2} />
            <DescriptionBox isActive={activeRow === 2}>
              <Description
                isActive={activeRow === 2}
                title={data.dominika.title}
                subtitle={data.dominika.subtitle}
                body={data.dominika.body}
              />
            </DescriptionBox>
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
            <DescriptionBox isActive={activeRow === 3}>
              <Description
                isActive={activeRow === 3}
                title={data.ola.title}
                subtitle={data.ola.subtitle}
                body={data.ola.body}
              />
            </DescriptionBox>
            <DescriptionBoxSibling isActive={activeRow === 3} />
            <DescriptionBoxSibling isActive={activeRow === 3} />
          </Row>
          <Row>
            <DescriptionBoxSibling isActive={activeRow === 4} />
            <DescriptionBoxSibling isActive={activeRow === 4} />
            <DescriptionBox isActive={activeRow === 4}>
              <Description
                isActive={activeRow === 4}
                title={data.justyna.title}
                subtitle={data.justyna.subtitle}
                body={data.justyna.body}
              />
            </DescriptionBox>
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
