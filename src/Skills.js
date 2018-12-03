import React from 'react';
import { Container, PrimaryHeader, SecondaryHeader, Paragraf, SkillWrapper, Certificate, CertificateImg } from './Styled/App';

const Skills = () => {
  return (
    <Container>
      <PrimaryHeader>Skills</PrimaryHeader>
        <div>
          <SkillWrapper>
            <Paragraf>HTML</Paragraf>
            <img src={process.env.PUBLIC_URL + "/images/icon1.png"} alt="icon" />
          </SkillWrapper>
          <SkillWrapper>
            <Paragraf>CSS</Paragraf>
            <img src={process.env.PUBLIC_URL + "/images/icon2.png"} alt="icon" />
          </SkillWrapper>
          <SkillWrapper>
            <Paragraf>JavaScript</Paragraf>
            <img src={process.env.PUBLIC_URL + "/images/icon3.png"} alt="icon" />
          </SkillWrapper>
          <SkillWrapper>
            <Paragraf>SASS</Paragraf>
            <img src={process.env.PUBLIC_URL + "/images/icon4.png"} alt="icon" />
          </SkillWrapper>
          <SkillWrapper>
            <Paragraf>Bootstrap</Paragraf>
            <img src={process.env.PUBLIC_URL + "/images/icon5.png"} alt="icon" />
          </SkillWrapper>
          <SkillWrapper>
            <Paragraf>React</Paragraf>
            <img src={process.env.PUBLIC_URL + "/images/icon6.png"} alt="icon" />
          </SkillWrapper>
          <SkillWrapper>
            <Paragraf>Redux</Paragraf>
            <img src={process.env.PUBLIC_URL + "/images/icon7.png"} alt="icon" />
          </SkillWrapper>
          <SkillWrapper>
            <Paragraf>jQuery</Paragraf>
            <img src={process.env.PUBLIC_URL + "/images/icon8.png"} alt="icon" />
          </SkillWrapper>
          <SkillWrapper>
            <Paragraf>Node</Paragraf>
            <img src={process.env.PUBLIC_URL + "/images/icon9.png"} alt="icon" />
          </SkillWrapper>
          <SkillWrapper>
            <Paragraf>NPM</Paragraf>
            <img src={process.env.PUBLIC_URL + "/images/icon10.png"} alt="icon" />
          </SkillWrapper>
          <SkillWrapper>
            <Paragraf>Git</Paragraf>
            <img src={process.env.PUBLIC_URL + "/images/icon11.png"} alt="icon" />
          </SkillWrapper>
          <SkillWrapper>
            <Paragraf>Unit tests</Paragraf>
            <img src={process.env.PUBLIC_URL + "/images/icon12.png"} alt="icon" />
          </SkillWrapper>
        </div>
        
      <SecondaryHeader>Certificates</SecondaryHeader>
        <div>
          <Certificate href={process.env.PUBLIC_URL + "/images/certificate/kodilla.jpg"} rel="noopener noreferrer" target="_blank">
            SoloLearn HTML
            <CertificateImg src={process.env.PUBLIC_URL + "/images/certificate/html-m.jpg"} alt="Certificate" />
          </Certificate>
          <Certificate href={process.env.PUBLIC_URL + "/images/certificate/kodilla.jpg"} rel="noopener noreferrer" target="_blank">
            SoloLearn CSS
            <CertificateImg src={process.env.PUBLIC_URL + "/images/certificate/css-m.jpg"} alt="Certificate" />
          </Certificate>
          <Certificate href={process.env.PUBLIC_URL + "/images/certificate/kodilla.jpg"} rel="noopener noreferrer" target="_blank">
            SoloLearn JavaScript
            <CertificateImg src={process.env.PUBLIC_URL + "/images/certificate/js-m.jpg"} alt="Certificate" />
          </Certificate>
          <Certificate href={process.env.PUBLIC_URL + "/images/certificate/kodilla.jpg"} rel="noopener noreferrer" target="_blank">
            Kodilla Bootcamp
            <CertificateImg src={process.env.PUBLIC_URL + "/images/certificate/kodilla-m.jpg"} alt="Certificate" />
          </Certificate>
        </div>

    </Container>
  );
}

export default Skills;