import React from 'react';
import styled from '~/styles';

const MenuButtonHolder = styled.div`
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
  background-color: ${props => props.theme.colors.lightLight};
  margin-bottom: 6px;
`;

export const MenuButton = () => {
  return (
    <MenuButtonHolder>
      <String height={4} />
      <String height={3} />
      <String height={2} />
      <String height={1} />
    </MenuButtonHolder>
  );
};
