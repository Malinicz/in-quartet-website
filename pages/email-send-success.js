import React, { Component } from 'react';
import styled from '~/styles';
import theme from '~/styles/theme';
import Link from 'next/link';
import Router from 'next/router';
import { object } from 'prop-types';

import { IMAGES_URL } from '~/constants/paths';
import { SUPPORTED_LANGUAGES, PL, EN } from '~/constants/supportedLanguages';

const content = {
  [PL]: {
    title: 'Wiadomość wysłana!',
    subtitle: 'Postaramy się odpowiedzieć jak najszybciej :)',
    link: 'Wróć do strony głównej',
  },
  [EN]: {
    title: 'Message sent!',
    subtitle: 'We will come back to you as soon as we can :)',
    link: 'Back to the home page',
  },
};

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
  componentDidMount() {
    if (!this.hasValidLanguageParam()) {
      return Router.push('/');
    }
  }

  hasValidLanguageParam = () => {
    const { language } = this.props.url.query;
    return SUPPORTED_LANGUAGES.includes(language);
  };

  render() {
    const { language } = this.props.url.query;

    if (!this.hasValidLanguageParam()) return null;

    return (
      <EmailSendSuccessHolder>
        <Message>
          <Logo src={`${IMAGES_URL}/logo-black.svg`} />
          <MessageHeader>{content[language].title}</MessageHeader>
          {content[language].subtitle}
          <Link href="/">
            <LinkElement>{content[language].link}</LinkElement>
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
