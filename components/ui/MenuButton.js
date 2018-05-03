import React from 'react';
import { bool, func } from 'prop-types';
import styled from '~/styles';

const MenuButtonHolder = styled.div`
  position: relative;
  z-index: 9;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40px;
  height: 35px;
  transition: 0.3s ease height;
  cursor: pointer;
`;

const String = styled.div`
  width: 35px;
  height: ${props => props.height}px;
  background-color: ${props =>
    props.isMenuActive
      ? props.theme.colors.darkDark
      : props.theme.colors.lightLight};
  margin-bottom: 6px;
  transition: 0.4s background-color ease;
  transition-delay: ${props => props.delay}s;
`;

export const MenuButton = ({ isMenuActive, handleToggleMenu }) => {
  return (
    <MenuButtonHolder onClick={handleToggleMenu}>
      <String height={4} isMenuActive={isMenuActive} delay={0} />
      <String height={3} isMenuActive={isMenuActive} delay={0.05} />
      <String height={2} isMenuActive={isMenuActive} delay={0.1} />
      <String height={1} isMenuActive={isMenuActive} delay={0.15} />
    </MenuButtonHolder>
  );
};

MenuButton.propTypes = {
  isMenuActive: bool.isRequired,
  handleToggleMenu: func.isRequired,
};
