import React from 'react';
import { object } from 'prop-types';
import { Link } from 'react-scroll';
import styled from '~/styles';

import { SocialIcons } from '~/components/ui';

import { IMAGES_URL } from '~/constants/paths';

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

export const Footer = ({ navigationConfig }) => {
  return (
    <FooterHolder>
      <Content>
        <LeftSide>
          <img src={`${IMAGES_URL}/logo-black.svg`} />
          <Navigation>
            <MenuItemsHolder>
              {Object.keys(navigationConfig).map(navItem => (
                <MenuItem key={navigationConfig[navItem].value}>
                  <LinkElement
                    to={navigationConfig[navItem].value}
                    smooth={true}
                    title={navigationConfig[navItem].label}
                  >
                    {navigationConfig[navItem].label}
                  </LinkElement>
                </MenuItem>
              ))}
            </MenuItemsHolder>
          </Navigation>
        </LeftSide>
        <RightSide>
          <SocialIcons />
          <a href="mailto:malinicz@gmail.com">
            <AuthorLogo src={`${IMAGES_URL}/malinowski-logo.svg`} />
          </a>
        </RightSide>
      </Content>
    </FooterHolder>
  );
};

Footer.propTypes = {
  navigationConfig: object.isRequired,
};
