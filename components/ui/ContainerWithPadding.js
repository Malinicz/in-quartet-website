import React from 'react';
import { node } from 'prop-types';
import styled from '~/styles';

const ContainerWithPaddingHolder = styled.div`
  padding: ${props => props.theme.spacing}px;
`;

export const ContainerWithPadding = ({ children }) => {
  return <ContainerWithPaddingHolder>{children}</ContainerWithPaddingHolder>;
};

ContainerWithPadding.propTypes = {
  children: node,
};
