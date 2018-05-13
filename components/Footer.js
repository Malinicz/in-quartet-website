import React from 'react';
import { Link } from 'react-scroll';
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
  padding: ${props =>
    `50px ${props.theme.spacing}px 30px ${props.theme.spacing}px`};
  max-width: ${props => props.theme.maxWidth}px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftSide = styled.div`
  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    padding-bottom: 30px;
  }
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    align-items: center;
  }
`;

const Navigation = styled.nav`
  font-family: ${props => props.theme.fontSecondary};
  font-size: 1.1em;

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    text-align: center;
  }
`;

const SocialIconsHolder = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    padding-bottom: 50px;
  }
`;

const SocialIcon = styled.img`
  margin-left: 10px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    margin: 0 20px;
  }
`;

const MenuItemsHolder = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const MenuItem = styled.li``;

const LinkElement = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.darkDark};
  cursor: pointer;
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
              {Object.values(navigationConfig).map(navItem => (
                <MenuItem key={navItem.value}>
                  <LinkElement
                    to={navItem.value}
                    smooth={true}
                    title={navItem.label}
                  >
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
