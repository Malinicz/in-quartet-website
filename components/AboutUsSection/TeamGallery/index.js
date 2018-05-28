import React, { Component } from 'react';
import { objectOf, shape, string } from 'prop-types';
import styled from '~/styles';

import Description from './Description';
import AnimatedBox from './AnimatedBox';

const TeamGalleryHolder = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 50px;
  overflow: hidden;

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    margin-bottom: 50px;
  }
`;

const Row = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: auto;

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    padding-bottom: 50px;

    &:last-child {
      padding-bottom: 0;
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    flex-direction: ${props => (props.isEven ? 'column-reverse' : 'column')};
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 120%;
  transform: ${props =>
    props.isTranslated ? 'translate3d(0, 0, 0)' : 'translate3d(-16.67%, 0, 0)'};
  transition: 0.3s transform ease;

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    transform: none;
    width: 100%;
  }
`;

const GenericItem = styled.div`
  position: relative;
  width: 20%;
  transition: 0.3s ease all;
  transform: translate3d(0, 0, 0);

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
  cursor: pointer;

  &:hover {
    opacity: ${props => (props.isActive ? 1 : 0.85)};
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    width: 40%;
    min-width: 250px;
    pointer-events: none;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    width: 100%;
    border: ${props =>
      `${props.theme.spacing}px solid ${props.theme.colors.light}`};
  }
`;

const DescriptionBox = styled(GenericItem)`
  position: relative;
  display: flex;
  z-index: 2;
  width: ${props => (props.isActive ? '60%' : '20%')};
  cursor: pointer;

  &::before {
    padding-top: 0%;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    width: 60%;
    z-index: 1;
    pointer-events: none;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    width: 100%;
  }
`;

const ReactiveBox = styled(GenericItem)`
  position: relative;
  width: ${props => (props.isActive ? '0%' : '20%')};
  height: ${props => (props.isActive ? '0%' : '100%')};

  @media (max-width: ${props => props.theme.breakpoints.tablet}px) {
    display: none;
  }
`;

class TeamGallery extends Component {
  state = { isTranslated: false, activeRow: 0 };

  toggleEvenRowClick = id => {
    this.setState(prevState => {
      const activeRow = parseInt(id) === prevState.activeRow ? 0 : parseInt(id);
      return { isTranslated: activeRow === 0 ? false : true, activeRow };
    });
  };

  toggleOddRowClick = id => {
    this.setState(prevState => {
      const activeRow = id === prevState.activeRow ? 0 : id;

      return { isTranslated: false, activeRow };
    });
  };

  render() {
    const { isTranslated, activeRow } = this.state;
    const { data } = this.props;

    return (
      <TeamGalleryHolder>
        <Wrapper isTranslated={isTranslated}>
          <Row>
            <ReactiveBox>
              <AnimatedBox
                isVisible={activeRow === 4}
                animationFactors={[Math.random(), Math.random()]}
              />
            </ReactiveBox>
            <ReactiveBox isActive={activeRow === 1} />
            <PhotoBox
              imageUrl={data[1].imageUrl}
              onClick={() => this.toggleOddRowClick(1)}
              isActive={activeRow === 1}
            />
            <DescriptionBox
              id={1}
              isActive={activeRow === 1}
              onClick={() => this.toggleOddRowClick(1)}
            >
              <Description
                isActive={activeRow === 1}
                title={data[1].title}
                subtitle={data[1].subtitle}
                body={data[1].body}
              />
            </DescriptionBox>
            <ReactiveBox isActive={activeRow === 1}>
              <AnimatedBox
                isVisible={activeRow === 3}
                animationFactors={[Math.random(), Math.random()]}
              />
            </ReactiveBox>
            <ReactiveBox isActive={activeRow === 1} />
          </Row>

          <Row isEven={true}>
            <ReactiveBox isActive={activeRow === 2} />
            <ReactiveBox isActive={activeRow === 2}>
              <AnimatedBox
                isVisible={activeRow === 0 || activeRow === 4}
                animationFactors={[Math.random(), Math.random()]}
              />
            </ReactiveBox>
            <DescriptionBox
              id={2}
              isActive={activeRow === 2}
              onClick={() => this.toggleEvenRowClick(2)}
            >
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
              onClick={() => this.toggleEvenRowClick(2)}
              isActive={activeRow === 2}
            />
            <ReactiveBox isActive={activeRow === 2} />
            <ReactiveBox>
              <AnimatedBox
                delay={20}
                isVisible={
                  activeRow === 1 || activeRow === 3 || activeRow === 0
                }
                animationFactors={[Math.random(), Math.random()]}
              />
            </ReactiveBox>
          </Row>

          <Row>
            <ReactiveBox>
              <AnimatedBox
                isVisible={activeRow === 2}
                animationFactors={[Math.random(), Math.random()]}
              />
            </ReactiveBox>
            <ReactiveBox isActive={activeRow === 3} />
            <PhotoBox
              id={3}
              imageUrl={data[3].imageUrl}
              onClick={() => this.toggleOddRowClick(3)}
              isActive={activeRow === 3}
            />
            <DescriptionBox
              id={3}
              isActive={activeRow === 3}
              onClick={() => this.toggleOddRowClick(3)}
            >
              <Description
                isActive={activeRow === 3}
                title={data[3].title}
                subtitle={data[3].subtitle}
                body={data[3].body}
              />
            </DescriptionBox>
            <ReactiveBox isActive={activeRow === 3}>
              <AnimatedBox
                delay={10}
                isVisible={activeRow === 0 || activeRow === 1}
                animationFactors={[Math.random(), Math.random()]}
              />
            </ReactiveBox>
            <ReactiveBox isActive={activeRow === 3} />
          </Row>

          <Row isEven={true}>
            <ReactiveBox isActive={activeRow === 4} />
            <ReactiveBox isActive={activeRow === 4}>
              <AnimatedBox
                isVisible={activeRow === 2}
                animationFactors={[Math.random(), Math.random()]}
              />
            </ReactiveBox>
            <DescriptionBox
              id={4}
              isActive={activeRow === 4}
              onClick={() => this.toggleEvenRowClick(4)}
            >
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
              onClick={() => this.toggleEvenRowClick(4)}
              isActive={activeRow === 4}
            />
            <ReactiveBox isActive={activeRow === 4} />
            <ReactiveBox />
          </Row>
        </Wrapper>
      </TeamGalleryHolder>
    );
  }
}

TeamGallery.propTypes = {
  data: objectOf(
    shape({
      imageUrl: string,
      title: string,
      subtitle: string,
      body: string,
    }),
  ),
};

export default TeamGallery;
