import React from 'react';
import styled from '~/styles';

import { IMAGES_URL } from '~/constants/paths';
import navigationConfig from '~/constants/navigationConfig';

const FooterHolder = styled.footer`
  background-image: url('${IMAGES_URL}/gradient-gray.png');
  background-size: cover;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: ${props => `50px ${props.theme.spacing}px`};
  max-width: ${props => props.theme.maxWidth}px;
`;

const LeftSide = styled.div``;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Navigation = styled.nav`
  font-family: ${props => props.theme.fontSecondary};
  font-size: 1.1em;
`;

const SocialIconsHolder = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SocialIcon = styled.img`
  margin-left: 10px;
`;

const MenuItemsHolder = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const MenuItem = styled.li``;

const LinkElement = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.darkDark};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const AuthorLogo = styled.img`
  margin-bottom: 1.2em;
`;

export const Footer = () => {
  return (
    <FooterHolder>
      <Content>
        <LeftSide>
          <img src={`${IMAGES_URL}/logo-black.svg`} />
          <Navigation>
            <MenuItemsHolder>
              {navigationConfig.map(navItem => (
                <MenuItem key={navItem.value}>
                  <LinkElement to={navItem.value} title={navItem.label}>
                    {navItem.label}
                  </LinkElement>
                </MenuItem>
              ))}
            </MenuItemsHolder>
          </Navigation>
        </LeftSide>
        <RightSide>
          <SocialIconsHolder>
            <SocialIcon src={`${IMAGES_URL}/facebook-logo.png`} />
            <SocialIcon src={`${IMAGES_URL}/instagram-logo.png`} />
            <SocialIcon src={`${IMAGES_URL}/youtube-logo.png`} />
          </SocialIconsHolder>
          <a href="mailto:malinicz@gmail.com">
            <AuthorLogo src={`${IMAGES_URL}/malinowski-logo.svg`} />
          </a>
        </RightSide>
      </Content>
    </FooterHolder>
  );
};
