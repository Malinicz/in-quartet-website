import React from 'react';
import styled from '~/styles';

import { IMAGES_URL } from '~/constants/paths';

const SocialIconsHolder = styled.div`
  display: flex;
  justify-content: flex-end;
  z-index: 1;

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
      <a
        href="https://www.facebook.com/InQuartet-1971646383052816/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialIcon src={`${IMAGES_URL}/facebook-logo.png`} />
      </a>
      <a
        href="https://www.instagram.com/inquartet"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialIcon src={`${IMAGES_URL}/instagram-logo.png`} />
      </a>
      <a
        href="https://www.youtube.com/channel/UCXPjoXURR7a35aumpPExozQ"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialIcon src={`${IMAGES_URL}/youtube-logo.png`} />
      </a>
    </SocialIconsHolder>
  );
};
