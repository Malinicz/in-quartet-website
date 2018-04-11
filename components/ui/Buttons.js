import React from 'react';
import styled from '~/styles';
import { node, string, oneOfType, number } from 'prop-types';

export const ButtonHolder = styled.button``;

export const Button = ({ children, margin }) => {
  return <ButtonHolder margin={margin}>{children}</ButtonHolder>;
};

Button.propTypes = {
  children: node,
  margin: oneOfType([string, number]),
};

export default Button;
