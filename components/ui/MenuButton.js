import React, { Component } from 'react';
import { bool, func } from 'prop-types';
import styled from '~/styles';

const MenuButtonHolder = styled.div`
  position: fixed;
  right: ${props => props.theme.spacing * 2}px;
  top: ${props => props.theme.spacing * 2}px;
  z-index: 9;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40px;
  height: 35px;
  transition: 0.3s ease height;
  cursor: pointer;

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    right: ${props => props.theme.spacing}px;
    top: 18px;
  }
`;

const String = styled.div`
  width: 35px;
  height: ${props => props.height}px;
  background-color: ${props =>
    props.isMenuActive || props.isMenuDark
      ? props.theme.colors.darkDark
      : props.theme.colors.lightLight};
  margin-bottom: 6px;
  transition: 0.4s background-color ease;
  transition-delay: ${props => props.delay}s;
`;

export class MenuButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuDark: false,
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    if (window.scrollY >= window.innerHeight - 30) {
      if (!this.state.isMenuDark) {
        this.setState({ isMenuDark: true });
      }
    } else {
      if (this.state.isMenuDark) {
        this.setState({ isMenuDark: false });
      }
    }
  };

  render() {
    const { isMenuDark } = this.state;
    const { isMenuActive, handleToggleMenu } = this.props;

    return (
      <MenuButtonHolder onClick={handleToggleMenu}>
        <String
          height={4}
          isMenuActive={isMenuActive}
          delay={0}
          isMenuDark={isMenuDark}
        />
        <String
          height={3}
          isMenuActive={isMenuActive}
          delay={0.05}
          isMenuDark={isMenuDark}
        />
        <String
          height={2}
          isMenuActive={isMenuActive}
          delay={0.1}
          isMenuDark={isMenuDark}
        />
        <String
          height={1}
          isMenuActive={isMenuActive}
          delay={0.15}
          isMenuDark={isMenuDark}
        />
      </MenuButtonHolder>
    );
  }
}

MenuButton.propTypes = {
  isMenuActive: bool.isRequired,
  handleToggleMenu: func.isRequired,
};
