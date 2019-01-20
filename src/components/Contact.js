import React, { Component } from 'react';
import { PrimaryHeader, SecondaryHeader, HomeWrapper, Container, Paragraf, ContactWrapper } from '../Styled/Styles';
import { NavIcon } from '../Styled/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Contact extends Component {
  render() {
    return (
      <Container>
        <HomeWrapper>
          <PrimaryHeader>Kontakt</PrimaryHeader>
            <ContactWrapper>
              <NavIcon href='tel:607846422'>
                <FontAwesomeIcon icon='mobile-alt'/>
              </NavIcon>
              <Paragraf contact>Tel: 607846422</Paragraf>
            </ContactWrapper>
            <ContactWrapper>
              <NavIcon href='mailto:contact@bialekrafal.pl'>
                <FontAwesomeIcon icon='envelope'/>
              </NavIcon>
              <Paragraf contact>Mail: contact@bialekrafal.pl</Paragraf>
            </ContactWrapper>
            <ContactWrapper>
              <NavIcon href='https://github.com/Bialek' target='_blank'>
                <FontAwesomeIcon icon={['fab','github']}/>
              </NavIcon>
              <Paragraf contact>github.com/Bialek</Paragraf>
            </ContactWrapper>
            <ContactWrapper>
              <NavIcon href='https://www.linkedin.com/in/rafał-białek/' target='_blank'>
                <FontAwesomeIcon icon={['fab','linkedin-in']}/>
              </NavIcon>
              <Paragraf contact>linkedin.com/in/rafał-białek/</Paragraf>
            </ContactWrapper>

          <SecondaryHeader>Formularz kontaktowy</SecondaryHeader>
          <SecondaryHeader>formularz w trakcie realizacji</SecondaryHeader>
        </HomeWrapper>
      </Container>   
    );
  }
}

export default Contact;