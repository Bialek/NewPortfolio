import React, { Component } from 'react';
import { Container, PrimaryHeader, SecondaryHeader, Paragraf, SkillWrapper, Certificate, CertificateImg, Loader } from '../Styled/Styles';
import ImageLoader from 'react-loading-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skillIcons: [
          {
            'img': '/images/skills/icon1.png',
            'name': 'HTML'
          },
          {
            'img': '/images/skills/icon2.png',
            'name': 'CSS'
          },
          {
            'img': '/images/skills/icon3.png',
            'name': 'JavaScript'
          },
          {
            'img': '/images/skills/icon4.png',
            'name': 'SASS'
          },
          {
            'img': '/images/skills/icon5.png',
            'name': 'Bootstrap'
          },
          {
            'img': '/images/skills/icon6.png',
            'name': 'React'
          },
          {
            'img': '/images/skills/icon7.png',
            'name': 'Redux'
          },
          {
            'img': '/images/skills/icon8.png',
            'name': 'jQuery'
          },
          {
            'img': '/images/skills/icon9.png',
            'name': 'Node'
          },
          {
            'img': '/images/skills/icon10.png',
            'name': 'NPM'
          },
          {
            'img': '/images/skills/icon11.png',
            'name': 'Git'
          },
          {
            'img': '/images/skills/icon12.png',
            'name': 'Unit tests'
          }         
      ],
      certificate : [
        {
          'img': '/images/certificate/kodilla.jpg',
          'miniature': '/images/certificate/kodilla-m.jpg',
          'name': 'Kodilla Bootcamp'
        },
        {
          'img': '/images/certificate/html.jpg',
          'miniature': '/images/certificate/html-m.jpg',
          'name': 'SoloLearn HTML'
        },
        {
          'img': '/images/certificate/css.jpg',
          'miniature': '/images/certificate/css-m.jpg',
          'name': 'SoloLearn CSS'
        },
        {
          'img': '/images/certificate/js.jpg',
          'miniature': '/images/certificate/js-m.jpg',
          'name': 'SoloLearn JavaScript'
        }       
      ]
    }
  }
  render() {
    return (
      <Container>
        <PrimaryHeader>Umiejetności</PrimaryHeader>
          <div>
            {this.state.skillIcons.map((skill, k) => (
              <SkillWrapper key={k}>
                <Paragraf>{skill.name}</Paragraf>
                <ImageLoader
                  src={process.env.PUBLIC_URL + skill.img}
                  image={props => <img {...props} alt='icon'/>}
                  loading={() => <Loader><FontAwesomeIcon icon="spinner"/></Loader>}
                  error={() => <div>Error</div>}       
                />
              </SkillWrapper>
            ))}
          </div>
  
        <SecondaryHeader>Certyfikaty</SecondaryHeader>
          <div>
            {this.state.certificate.map((certificate, k) => (
              <Certificate key={k} href={process.env.PUBLIC_URL + certificate.img} rel='noopener noreferrer' target='_blank'>
                {certificate.name}
                <ImageLoader
                  src={process.env.PUBLIC_URL + certificate.img}
                  image={props => <CertificateImg {...props} alt='Certificate'/>}
                  loading={() => <Loader><FontAwesomeIcon icon="spinner"/></Loader>}
                  error={() => <div>Error</div>}       
                />
              </Certificate>
            ))}
          </div>
  
      </Container>
    );
  }
}

export default Skills;