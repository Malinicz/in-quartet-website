import React, { Component } from 'react';
import { object, string } from 'prop-types';
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
import { EMAIL } from '~/constants/projectConfig';

const StyledSectionHolder = styled(SectionHolder)`
  padding-top: 70px;
  padding-bottom: 50px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    padding-top: 0;
  }
`;

const StyledBackground = styled(Background)`
  top: -50px;
  left: -50px;
  width: 250px;
  height: 140px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    top: 50px;
    width: 200px;
    height: 100px;
  }
`;

const StyledSectionDescription = styled(SectionDescription)`
  padding-left: 0;
  padding-right: 0;
  padding-top: 100px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    padding-top: 30px;
  }
`;

const StyledDescriptionHeader = styled(DescriptionHeader)`
  padding-bottom: 50px;
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

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    width: 100%;
    display: block;
  }
`;

const ContentWithSubmit = styled.div`
  display: flex;

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    flex-direction: column;
  }
`;

const StyledButton = styled(Button)`
  margin: 25px 0 0 15px;
  width: 100px;

  &:disabled {
    cursor: not-allowed;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    margin: ${props => `${props.theme.spacing}px 0`};
    width: 100%;
    height: ${props => props.theme.inputHeight}px;
  }
`;

const SubmitIcon = styled.img`
  position: relative;
  z-index: 1;
  width: 40px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}px) {
    width: 30px;
  }
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
    const { sectionId, data, language } = this.props;
    const { description, form, contact1, contact2 } = data;

    return (
      <StyledSectionHolder name={sectionId}>
        <StyledSectionDescription>
          <StyledDescriptionHeader>
            <SectionTitle>{description.title}</SectionTitle>
          </StyledDescriptionHeader>
          <ContactDetails>
            <ContactName>{contact1.name}</ContactName>
            <ContactPhone href={`tel:${contact1.phone}`}>
              {contact1.phone}
            </ContactPhone>
          </ContactDetails>
          <ContactDetails>
            <ContactName>{contact2.name}</ContactName>
            <ContactPhone href={`tel:${contact2.phone}`}>
              {contact2.phone}
            </ContactPhone>
          </ContactDetails>

          <StyledForm action={`https://formspree.io/${EMAIL}`} method="POST">
            <UserDetails>
              <LabelWithInputHolder>
                <InputLabel>{form.email}</InputLabel>
                <TextInput
                  type="text"
                  name="_replyto"
                  onChange={this.onEmailChange}
                />
                <ValidationIcon isValid={isEmailValid} />
              </LabelWithInputHolder>
              <LabelWithInputHolder>
                <InputLabel>{form.name}</InputLabel>
                <TextInput type="text" name="name" />
              </LabelWithInputHolder>
            </UserDetails>
            <ContentWithSubmit>
              <LabelWithInputHolder>
                <InputLabel>{form.content}</InputLabel>
                <TextArea rows={6} name="content" />
              </LabelWithInputHolder>
              <input
                type="hidden"
                name="_next"
                value={`${SITE_URL}/${
                  language === PL
                    ? 'email-send-success'
                    : 'en/email-send-success'
                }`}
              />
              <input
                type="hidden"
                name="_subject"
                value="[INQUARTET.PL] Zapytanie"
              />
              <input type="hidden" name="_format" value="plain" />
              <input type="hidden" name="_language" value={language} />
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

ContactSection.propTypes = {
  data: object.isRequired,
  language: string,
  sectionId: string.isRequired,
};

export default ContactSection;
