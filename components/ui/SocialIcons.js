import React from 'react';
import styled from '~/styles';

import { IMAGES_URL } from '~/constants/paths';

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

export const SocialIcons = () => {
  return (
    <SocialIconsHolder>
      <SocialIcon src={`${IMAGES_URL}/facebook-logo.png`} />
      <SocialIcon src={`${IMAGES_URL}/instagram-logo.png`} />
      <SocialIcon src={`${IMAGES_URL}/youtube-logo.png`} />
    </SocialIconsHolder>
  );
};
