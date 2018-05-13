import React, { Component } from 'react';
import styled from '~/styles';

import {
  SectionHolder,
  SectionDescription,
  DescriptionHeader,
  SectionTitle,
  Background,
  Form,
  TextInput,
  TextArea,
  InputLabel,
  Button,
  LabelWithInputHolder,
} from '~/components/ui';
import ValidationIcon from './ValidationIcon';

import validateEmail from './emailValidation';

import { IMAGES_URL, SITE_URL } from '~/constants/paths';
import { PL } from '~/constants/supportedLanguages';

const StyledSectionHolder = styled(SectionHolder)`
  margin-top: 70px;
  padding-bottom: 50px;
`;

const StyledBackground = styled(Background)`
  top: -50px;
  left: -50px;
  width: 250px;
  height: 140px;
`;

const StyledSectionDescription = styled(SectionDescription)`
  padding-left: 0;
  padding-right: 0;
  padding-top: 100px;
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5em;
  font-family: ${props => props.theme.fontSecondary};
  font-size: 1.3em;
`;

const ContactName = styled.p`
  margin: 0;
`;

const ContactPhone = styled.a`
  font-size: 0.95em;
`;

const StyledForm = styled(Form)`
  margin-top: 3em;
`;

const UserDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: ${props => props.theme.spacing}px;
  margin-bottom: ${props => props.theme.spacing}px;
`;

const ContentWithSubmit = styled.div`
  display: flex;
`;

const StyledButton = styled(Button)`
  margin: 25px 0 0 15px;
  width: 100px;

  &:disabled {
    cursor: not-allowed;
  }
`;

const SubmitIcon = styled.img`
  position: relative;
  z-index: 3;
  width: 40px;
`;

export class ContactSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmailValid: null,
    };
  }

  onEmailChange = e => {
    let isEmailValid = e.target.value.trim()
      ? validateEmail(e.target.value)
      : null;
    this.setState({ isEmailValid });
  };

  render() {
    const { isEmailValid } = this.state;

    return (
      <StyledSectionHolder>
        <StyledSectionDescription>
          <DescriptionHeader>
            <SectionTitle>Kontakt</SectionTitle>
          </DescriptionHeader>
          <ContactDetails>
            <ContactName>Dominika Szczypka</ContactName>
            <ContactPhone href="tel:+48603540013">+48 603 540 013</ContactPhone>
          </ContactDetails>
          <ContactDetails>
            <ContactName>Justyna Poprawska</ContactName>
            <ContactPhone href="tel:+48501303089">+48 501 303 089</ContactPhone>
          </ContactDetails>

          <StyledForm
            action="https://formspree.io/malinicz@gmail.com"
            method="POST"
          >
            <UserDetails>
              <LabelWithInputHolder>
                <InputLabel>Email *</InputLabel>
                <TextInput
                  type="text"
                  name="_replyto"
                  onChange={this.onEmailChange}
                />
                <ValidationIcon isValid={isEmailValid} />
              </LabelWithInputHolder>
              <LabelWithInputHolder>
                <InputLabel>Imię</InputLabel>
                <TextInput type="text" name="name" />
              </LabelWithInputHolder>
            </UserDetails>
            <ContentWithSubmit>
              <LabelWithInputHolder>
                <InputLabel>Treść wiadomości *</InputLabel>
                <TextArea rows={6} name="content" />
              </LabelWithInputHolder>
              <input
                type="hidden"
                name="_next"
                value={`${SITE_URL}/email-send-success?language=${PL}`}
              />
              <StyledButton type="submit" disabled={!isEmailValid}>
                <SubmitIcon src={`${IMAGES_URL}/submit-icon.png`} />
              </StyledButton>
            </ContentWithSubmit>
          </StyledForm>
          <StyledBackground />
        </StyledSectionDescription>
      </StyledSectionHolder>
    );
  }
}

export default ContactSection;
