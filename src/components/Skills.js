import React, { Component } from 'react';
import { Container, PrimaryHeader, SecondaryHeader, Paragraf, SkillWrapper, Certificate, CertificateImg } from '../Styled/App';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skillIcons: [
        [
          '/images/skills/icon1.png',
          'HTML'
        ],
        [
          '/images/skills/icon2.png',
          'CSS'
        ],
        [
          '/images/skills/icon3.png',
          'JavaScript'
        ],
        [
          '/images/skills/icon4.png',
          'SASS'
        ],
        [
          '/images/skills/icon5.png',
          'Bootstrap'
        ],
        [
          '/images/skills/icon6.png',
          'React'
        ],
        [
          '/images/skills/icon7.png',
          'Redux'
        ],
        [
          '/images/skills/icon8.png',
          'jQuery'
        ],
        [
          '/images/skills/icon9.png',
          'Node'
        ],
        [
          '/images/skills/icon10.png',
          'NPM'
        ],
        [
          '/images/skills/icon11.png',
          'Git'
        ],
        [
          '/images/skills/icon12.png',
          'Unit tests'
        ],
      ]
    }
  }
  render() {
    return (
      <Container>
        <PrimaryHeader>Skills</PrimaryHeader>
          <div>
            {this.state.skillIcons.map((skill, k) => (
              <SkillWrapper key={k}>
                <Paragraf>{skill[1]}</Paragraf>
                <img src={process.env.PUBLIC_URL + skill[0] } alt='icon' />
              </SkillWrapper>
            ))}
          </div>
  
        <SecondaryHeader>Certificates</SecondaryHeader>
          <div>
            <Certificate href={process.env.PUBLIC_URL + '/images/certificate/kodilla.jpg'} rel='noopener noreferrer' target='_blank'>
              Kodilla Bootcamp
              <CertificateImg src={process.env.PUBLIC_URL + '/images/certificate/kodilla-m.jpg'} alt='Certificate' />
            </Certificate>
            <Certificate href={process.env.PUBLIC_URL + '/images/certificate/html.jpg'} rel='noopener noreferrer' target='_blank'>
              SoloLearn HTML
              <CertificateImg src={process.env.PUBLIC_URL + '/images/certificate/html-m.jpg'} alt='Certificate' />
            </Certificate>
            <Certificate href={process.env.PUBLIC_URL + '/images/certificate/css.jpg'} rel='noopener noreferrer' target='_blank'>
              SoloLearn CSS
              <CertificateImg src={process.env.PUBLIC_URL + '/images/certificate/css-m.jpg'} alt='Certificate' />
            </Certificate>
            <Certificate href={process.env.PUBLIC_URL + '/images/certificate/js.jpg'} rel='noopener noreferrer' target='_blank'>
              SoloLearn JavaScript
              <CertificateImg src={process.env.PUBLIC_URL + '/images/certificate/js-m.jpg'} alt='Certificate' />
            </Certificate>
          </div>
  
      </Container>
    );
  }
}

export default Skills;