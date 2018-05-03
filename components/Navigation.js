import React from 'react';
import { bool } from 'prop-types';
import styled, { keyframes } from '~/styles';

import navigationConfig from '~/constants/navigationConfig';

const violinFlash = keyframes`
  0% { opacity: 0.02;}
  50% {opacity: 0.06;}
  100% {opacity: 0.02;}
`;

const NavigationHolder = styled.nav`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
  transition: visibility 0.5s ease;
`;

const Block = styled.div`
  position: absolute;
  top: ${props => props.top};
  right: 0;
  left: 0;
  height: ${props => (props.isVisible ? props.height : '0%')};
  background-color: ${props => props.theme.colors.lightDark};
  opacity: ${props => (props.isVisible ? 0.98 : 0)};
  transition: 0.5s ease height, 0.4s ease opacity;
  transition-delay: ${props => props.delay}s;
`;

const ViolinImage = styled.img`
  position: relative;
  z-index: 11;
  height: 100%;
  animation: ${props =>
    props.isVisible ? `${violinFlash} 10s ease infinite` : 'none'};
  visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
`;

const MenuItemsHolder = styled.ul`
  display: flex;
  position: absolute;
  z-index: 12;
  top: 45%;
  list-style-type: none;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transition: 0.3s ease opacity;
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;

  &:first-child {
    &::before {
      content: '■';
      font-size: 1.5em;
      margin: 0 12px;
    }
  }

  &::after {
    content: '■';
    font-size: 1.5em;
    margin: 0 12px;
  }
`;

const LinkElement = styled.a`
  position: relative;
  font-family: 'MitrRegular';
  font-size: 2em;
  text-transform: uppercase;
  transition: 0.3s color ease;
  line-height: 1.2em;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 95%;
    right: 50%;
    bottom: -6%;
    left: 50%;
    background-color: ${props => props.theme.colors.darkDark};
    transition: 0.3s right ease, 0.3s left ease;
  }

  &:hover {
    &::before {
      right: 0;
      left: 0;
    }
  }
`;

export const Navigation = ({ isVisible }) => {
  return (
    <NavigationHolder isVisible={isVisible}>
      <ViolinImage
        src="/static/images/violin-black.svg"
        isVisible={isVisible}
      />
      <Block top={0} height="40%" isVisible={isVisible} />
      <Block top="40%" height="30%" isVisible={isVisible} />
      <Block top="70%" height="20%" isVisible={isVisible} />
      <Block top="90%" height="10%" isVisible={isVisible} />
      <MenuItemsHolder isVisible={isVisible}>
        {navigationConfig.map(navItem => (
          <MenuItem key={navItem.value}>
            <LinkElement to={navItem.value}>{navItem.label}</LinkElement>
          </MenuItem>
        ))}
      </MenuItemsHolder>
    </NavigationHolder>
  );
};

Navigation.propTypes = {
  isVisible: bool.isRequired,
};
