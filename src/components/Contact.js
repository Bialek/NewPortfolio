import React, { Component } from 'react';
import { PrimaryHeader, SecondaryHeader, ContactWrapper, Container, Paragraf, ContactItem } from '../Styled/Styles';
import { NavIcon } from '../Styled/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Contact extends Component {
  render() {
    return (
      <Container home>
        <div>
          <PrimaryHeader>Kontakt</PrimaryHeader>
          <ContactWrapper>
            <ContactItem>
              <NavIcon href='tel:607846422'>
                <FontAwesomeIcon icon='mobile-alt'/>
              </NavIcon>
              <Paragraf contact>Tel: 607846422</Paragraf>
            </ContactItem>
            <ContactItem>
              <NavIcon href='mailto:contact@bialekrafal.pl'>
                <FontAwesomeIcon icon='envelope'/>
              </NavIcon>
              <Paragraf contact>contact@bialekrafal.pl</Paragraf>
            </ContactItem>
            <ContactItem>
              <NavIcon href='https://github.com/Bialek' target='_blank'>
                <FontAwesomeIcon icon={['fab','github']}/>
              </NavIcon>
              <Paragraf contact>github.com/Bialek</Paragraf>
            </ContactItem>
            <ContactItem>
              <NavIcon href='https://www.linkedin.com/in/rafał-białek/' target='_blank'>
                <FontAwesomeIcon icon={['fab','linkedin-in']}/>
              </NavIcon>
              <Paragraf contact>linkedin.com/in/rafał-białek/</Paragraf>
            </ContactItem>
          </ContactWrapper>

          <SecondaryHeader>Formularz kontaktowy</SecondaryHeader>
          <SecondaryHeader>formularz w trakcie realizacji</SecondaryHeader>
        </div>
      </Container>   
    );
  }
}

export default Contact;