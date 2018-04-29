import React from 'react';
import { oneOf, bool, func } from 'prop-types';
import styled from '~/styles';

import { LanguageSwitch, MenuButton } from '~/components/ui';
import { Navigation } from '~/components';

import { SUPPORTED_LANGUAGES } from '~/constants/supportedLanguages';

const HeaderHolder = styled.header`
  display: flex;
  justify-content: space-between;
  padding: ${props => props.theme.spacing}px;
  background-color: ${props => props.theme.colors.dark};
`;

export const Header = ({ language, isMenuActive, handleToggleMenu }) => {
  return (
    <HeaderHolder>
      <LanguageSwitch activeLanguage={language} />
      <MenuButton handleToggleMenu={handleToggleMenu} />
      <Navigation isVisible={isMenuActive} />
    </HeaderHolder>
  );
};

Header.propTypes = {
  language: oneOf(SUPPORTED_LANGUAGES),
  isMenuActive: bool.isRequired,
  handleToggleMenu: func.isRequired,
};
