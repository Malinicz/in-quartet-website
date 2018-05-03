import React from 'react';
import { bool } from 'prop-types';
import styled from '~/styles';

const NavigationHolder = styled.nav`
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
  opacity: ${props => (props.isVisible ? 0.95 : 0)};
  transition: 0.5s ease height, 0.4s ease opacity;
  transition-delay: ${props => props.delay}s;
`;

export const Navigation = ({ isVisible }) => {
  return (
    <NavigationHolder isVisible={isVisible}>
      <Block top={0} height="40%" isVisible={isVisible} />
      <Block top="40%" height="30%" isVisible={isVisible} />
      <Block top="70%" height="20%" isVisible={isVisible} />
      <Block top="90%" height="10%" isVisible={isVisible} />
      <ul>
        <li>
          <a href="#">menu item</a>
        </li>
        <li>
          <a href="#">menu item 2</a>
        </li>
        <li>
          <a href="#">menu item 3</a>
        </li>
      </ul>
    </NavigationHolder>
  );
};

Navigation.propTypes = {
  isVisible: bool.isRequired,
};
