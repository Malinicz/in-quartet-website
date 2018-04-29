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
`;

export const Navigation = ({ isVisible }) => {
  return (
    <NavigationHolder isVisible={isVisible}>
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
