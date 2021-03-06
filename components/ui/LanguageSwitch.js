import React from 'react';
import Router, { withRouter } from 'next/router';
import { object } from 'prop-types';
import styled from '~/styles';

import { SUPPORTED_LANGUAGES, PL } from '~/constants/supportedLanguages';

const LanguageSwitchHolder = styled.div`
  display: flex;
  font-family: ${props => props.theme.fontSecondary};
  font-size: 1em;
  text-transform: uppercase;
  color: ${props => props.theme.colors.lightLight};
`;

const LanguageCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 35px;
  border: ${props =>
    props.isActive ? `2px solid ${props.theme.colors.lightLight}` : 'none'};
  cursor: pointer;
`;

export const LanguageSwitch = withRouter(({ router }) => {
  const onLanguageSwitch = e => {
    const url = e.target.id === PL ? '/' : `/${e.target.id}`;
    Router.push(url);
  };

  return (
    <LanguageSwitchHolder>
      {SUPPORTED_LANGUAGES.map(language => {
        const isActive =
          language === PL
            ? router.pathname === '/'
            : router.pathname === `/${language}`;

        return (
          <LanguageCell
            id={language}
            key={language}
            onClick={onLanguageSwitch}
            isActive={isActive}
          >
            {language}
          </LanguageCell>
        );
      })}
    </LanguageSwitchHolder>
  );
});

LanguageSwitch.propTypes = {
  router: object,
};
