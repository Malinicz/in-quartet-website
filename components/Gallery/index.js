import React, { Component } from 'react';
import { object } from 'prop-types';
import styled from '~/styles';

import Description from './Description';
import AnimatedBox from './AnimatedBox';

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
  position: relative;
  width: ${props => (props.isActive ? '0%' : '20%')};
  height: ${props => (props.isActive ? '0%' : '100%')};
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
            <DescriptionBoxSibling>
              <AnimatedBox isVisible={activeRow === 4} />
            </DescriptionBoxSibling>
            <DescriptionBoxSibling isActive={activeRow === 1} />
            <PhotoBox
              id={1}
              imageUrl={data[1].imageUrl}
              onClick={this.toggleOddRowClick}
              isActive={activeRow === 1}
            />
            <DescriptionBox isActive={activeRow === 1}>
              <Description
                isActive={activeRow === 1}
                title={data[1].title}
                subtitle={data[1].subtitle}
                body={data[1].body}
              />
            </DescriptionBox>
            <DescriptionBoxSibling isActive={activeRow === 1}>
              <AnimatedBox isVisible={activeRow === 3} />
            </DescriptionBoxSibling>
            <DescriptionBoxSibling isActive={activeRow === 1} />
          </Row>

          <Row>
            <DescriptionBoxSibling isActive={activeRow === 2} />
            <DescriptionBoxSibling isActive={activeRow === 2}>
              <AnimatedBox isVisible={activeRow !== 1 && activeRow !== 3} />
            </DescriptionBoxSibling>
            <DescriptionBox isActive={activeRow === 2}>
              <Description
                isActive={activeRow === 2}
                isEven={true}
                title={data[2].title}
                subtitle={data[2].subtitle}
                body={data[2].body}
              />
            </DescriptionBox>
            <PhotoBox
              id={2}
              imageUrl={data[2].imageUrl}
              onClick={this.toggleEvenRowClick}
              isActive={activeRow === 2}
            />
            <PhotoBoxSibling isActive={activeRow === 2} />
            <DescriptionBoxSibling>
              <AnimatedBox delay={20} isVisible={activeRow !== 2} />
            </DescriptionBoxSibling>
          </Row>

          <Row>
            <DescriptionBoxSibling>
              <AnimatedBox isVisible={activeRow === 2} />
            </DescriptionBoxSibling>
            <DescriptionBoxSibling isActive={activeRow === 3} />
            <PhotoBox
              id={3}
              imageUrl={data[3].imageUrl}
              onClick={this.toggleOddRowClick}
              isActive={activeRow === 3}
            />
            <DescriptionBox isActive={activeRow === 3}>
              <Description
                isActive={activeRow === 3}
                title={data[3].title}
                subtitle={data[3].subtitle}
                body={data[3].body}
              />
            </DescriptionBox>
            <DescriptionBoxSibling isActive={activeRow === 3}>
              <AnimatedBox
                delay={10}
                isVisible={activeRow !== 2 && activeRow !== 4}
              />
            </DescriptionBoxSibling>
            <DescriptionBoxSibling isActive={activeRow === 3} />
          </Row>

          <Row>
            <DescriptionBoxSibling isActive={activeRow === 4} />
            <DescriptionBoxSibling isActive={activeRow === 4}>
              <AnimatedBox isVisible={activeRow === 2} />
            </DescriptionBoxSibling>
            <DescriptionBox isActive={activeRow === 4}>
              <Description
                isActive={activeRow === 4}
                isEven={true}
                title={data[4].title}
                subtitle={data[4].subtitle}
                body={data[4].body}
              />
            </DescriptionBox>
            <PhotoBox
              id={4}
              imageUrl={data[4].imageUrl}
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

Gallery.propTypes = {
  data: object,
};
