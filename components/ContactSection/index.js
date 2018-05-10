import React, { Component } from 'react';
import styled from '~/styles';

import { IMAGES_URL } from '~/constants/paths';

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
`;

const SubmitIcon = styled.img`
  width: 40px;
`;

export class ContactSection extends Component {
  render() {
    return (
      <SectionHolder>
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

          <StyledForm>
            <UserDetails>
              <LabelWithInputHolder>
                <InputLabel>Email *</InputLabel>
                <TextInput type="text" />
              </LabelWithInputHolder>
              <LabelWithInputHolder>
                <InputLabel>Imię</InputLabel>
                <TextInput type="text" />
              </LabelWithInputHolder>
            </UserDetails>
            <ContentWithSubmit>
              <LabelWithInputHolder>
                <InputLabel>Treść wiadomości *</InputLabel>
                <TextArea rows={6} />
              </LabelWithInputHolder>
              <StyledButton>
                <SubmitIcon src={`${IMAGES_URL}/submit-icon.png`} />
              </StyledButton>
            </ContentWithSubmit>
          </StyledForm>
          <StyledBackground />
        </StyledSectionDescription>
      </SectionHolder>
    );
  }
}

export default ContactSection;
