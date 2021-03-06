import React from 'react';
import { bool, func, object } from 'prop-types';
import styled, { keyframes } from '~/styles';
import { Link } from 'react-scroll';

import { IMAGES_URL } from '~/constants/paths';

const violinFlash = keyframes`
  0% { opacity: 0; }
  100% { opacity: 0.07; }
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
  transition: visibility 0.7s ease;
`;

const Block = styled.div`
  position: absolute;
  top: ${props => props.top};
  right: 0;
  left: 0;
  height: ${props => (props.isVisible ? props.height : '0%')};
  background-color: ${props => props.theme.colors.lightDark};
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transition: 0.5s ease height, 0.6s ease opacity;
  transition-delay: ${props => props.delay}s;
`;

const ViolinImage = styled.img`
  position: relative;
  z-index: 11;
  height: 100%;
  animation: ${props => (props.isVisible ? `${violinFlash} 3s ease` : 'none')};
  animation-fill-mode: forwards;
  visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
`;

const MenuItemsHolder = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 12;
  top: 50%;
  left: 50%;
  padding: 0;
  transform: translate(-50%, -50%);
  list-style-type: none;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transition: 0.3s ease opacity;

  @media (max-width: ${props => props.theme.breakpoints.navigation}px) {
    flex-direction: column;
  }
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  white-space: nowrap;

  &:first-child {
    &::before {
      content: '■';
      font-size: 1.5em;
      margin-right: 12px;
    }
  }

  &::after {
    content: '■';
    font-size: 1.5em;
    margin: 0 12px;
  }

  @media (max-width: ${props => props.theme.breakpoints.navigation}px) {
    padding: 10px 0;

    &:first-child {
      &::before {
        content: '';
        margin: 0;
      }
    }
    &::after {
      content: '';
      margin: 0;
    }
  }
`;

const LinkElement = styled(Link)`
  position: relative;
  color: ${props => props.theme.colors.darkDark};
  font-family: ${props => props.theme.fontSecondary};
  font-size: 2em;
  text-transform: uppercase;
  text-decoration: none !important;
  transition: 0.3s color ease;
  line-height: 1.2em;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 95%;
    right: 51%;
    bottom: -6%;
    left: 51%;
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

export const Navigation = ({
  navigationConfig,
  isVisible,
  handleToggleMenu,
}) => {
  return (
    <NavigationHolder isVisible={isVisible}>
      <ViolinImage
        src={`${IMAGES_URL}/violin-black.svg`}
        isVisible={isVisible}
      />
      <Block top={0} height="40%" isVisible={isVisible} />
      <Block top="40%" height="30%" isVisible={isVisible} />
      <Block top="70%" height="20%" isVisible={isVisible} />
      <Block top="90%" height="10%" isVisible={isVisible} />
      <MenuItemsHolder isVisible={isVisible}>
        {Object.keys(navigationConfig).map(navItem => (
          <MenuItem
            key={navigationConfig[navItem].value}
            title={navigationConfig[navItem].label}
          >
            <LinkElement
              to={navigationConfig[navItem].value}
              smooth="true"
              onClick={handleToggleMenu}
            >
              {navigationConfig[navItem].label}
            </LinkElement>
          </MenuItem>
        ))}
      </MenuItemsHolder>
    </NavigationHolder>
  );
};

Navigation.propTypes = {
  navigationConfig: object.isRequired,
  isVisible: bool.isRequired,
  handleToggleMenu: func.isRequired,
};
