import React from 'react';
import { object, bool, func } from 'prop-types';
import styled from '~/styles';

import { LanguageSwitch, MenuButton } from '~/components/ui';
import { Navigation } from '~/components';

const HeaderHolder = styled.header`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  padding: ${props => props.theme.spacing * 2}px;
  height: 65px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    background-color: black;
    height: 65px;
    padding: ${props => props.theme.spacing}px;
  }
`;

export const Header = ({
  navigationConfig,
  isMenuActive,
  handleToggleMenu,
}) => {
  return (
    <HeaderHolder>
      <LanguageSwitch />
      <MenuButton
        handleToggleMenu={handleToggleMenu}
        isMenuActive={isMenuActive}
      />
      <Navigation
        navigationConfig={navigationConfig}
        isVisible={isMenuActive}
        handleToggleMenu={handleToggleMenu}
      />
    </HeaderHolder>
  );
};

Header.propTypes = {
  navigationConfig: object.isRequired,
  isMenuActive: bool.isRequired,
  handleToggleMenu: func.isRequired,
};
