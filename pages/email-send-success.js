import React, { Component } from 'react';
import styled from '~/styles';
import theme from '~/styles/theme';
import Link from 'next/link';
import { object } from 'prop-types';

import { IMAGES_URL } from '~/constants/paths';
import { PL } from '~/constants/supportedLanguages';
import content from '~/constants/content';

const EmailSendSuccessHolder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-image: url('${IMAGES_URL}/gradient-pink.png');
    background-size: cover;
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2em;
  font-family: ${theme.fontSecondary};
  text-align: center;
`;

const Logo = styled.img`
  width: 260px;
  margin-bottom: 70px;
`;

const MessageHeader = styled.div`
  font-size: 1.6em;
`;

const LinkElement = styled.a`
  margin-top: 50px;
  color: ${theme.colors.lightLight};
  cursor: pointer;
`;

class EmailSendSuccess extends Component {
  render() {
    const { language } = this.props.url.query;

    const data = content[language].emailSendSuccess;

    return (
      <EmailSendSuccessHolder>
        <Message>
          <Logo src={`${IMAGES_URL}/logo-black.svg`} />
          <MessageHeader>{data.title}</MessageHeader>
          {data.subtitle}
          <Link href={language === PL ? '/' : '/en'}>
            <LinkElement>{data.link}</LinkElement>
          </Link>
        </Message>
      </EmailSendSuccessHolder>
    );
  }
}

EmailSendSuccess.propTypes = {
  url: object,
};

export default EmailSendSuccess;
