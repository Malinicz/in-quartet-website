import React from 'react';
import styled from '~/styles';

const FooterHolder = styled.footer``;

export const Footer = () => {
  return (
    <FooterHolder>
      <div>
        <div>in quartet logo</div>
        <nav>
          <ul>
            <li>menu item 1</li>
            <li>menu item 2</li>
            <li>menu item 3</li>
          </ul>
        </nav>
      </div>
      <div>
        <div>social icons</div>
        <div>malinowski logo</div>
      </div>
    </FooterHolder>
  );
};
