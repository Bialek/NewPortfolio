import React, { Component } from 'react';
import { Container, PrimaryHeader, SecondaryHeader, Paragraf, Button, SkillWrapper, Certificate, CertificateImg, Loader, SliderSlick, Modal } from '../Styled/Styles'; 
import ImageLoader from 'react-loading-image'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
const uuidv4 = require('uuid/v4'); 
const SlickButtonFix = ({currentSlide, slideCount, children, ...props}) => ( 
  <button {...props}>{children}</button> 
); 
export default class Skills extends Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      modalActive: false, 
      skillIcons: [ 
        { 'img': '/images/skills/icon1.png', 'name': 'HTML' }, 
        { 'img': '/images/skills/icon2.png', 'name': 'CSS' }, 
        { 'img': '/images/skills/icon3.png', 'name': 'JavaScript' }, 
        { 'img': '/images/skills/icon4.png', 'name': 'SASS' }, 
        { 'img': '/images/skills/icon5.png', 'name': 'Bootstrap' }, 
        { 'img': '/images/skills/icon6.png', 'name': 'React' }, 
        { 'img': '/images/skills/icon7.png', 'name': 'Redux' }, 
        { 'img': '/images/skills/icon8.png', 'name': 'jQuery' }, 
        { 'img': '/images/skills/icon9.png', 'name': 'Node' }, 
        { 'img': '/images/skills/icon10.png', 'name': 'NPM' }, 
        { 'img': '/images/skills/icon11.png', 'name': 'Git' }, 
        { 'img': '/images/skills/icon12.png', 'name': 'Unit tests' } 
      ], 
      certificate: [ 
        { 'img': '/images/certificate/kodilla.jpg', 'miniature': '/images/certificate/kodilla-m.jpg', 'name': 'Kodilla Bootcamp' },
        { 'img': '/images/certificate/html.jpg', 'miniature': '/images/certificate/html-m.jpg', 'name': 'SoloLearn HTML' }, 
        { 'img': '/images/certificate/css.jpg', 'miniature': '/images/certificate/css-m.jpg', 'name': 'SoloLearn CSS' }, 
        { 'img': '/images/certificate/js.jpg', 'miniature': '/images/certificate/js-m.jpg', 'name': 'SoloLearn JavaScript' }
      ], 
      thumbnailsSlider: { 
        arrows: true, 
        infinite: true, 
        speed: 500, 
        centerMode: true,
        slidesToShow: 3, 
        slidesToScroll: 1, 
        nextArrow: <SlickButtonFix><FontAwesomeIcon icon='angle-right'/></SlickButtonFix>, 
        prevArrow: <SlickButtonFix><FontAwesomeIcon icon='angle-left'/></SlickButtonFix>,
        swipeToSlide: true,
        focusOnSelect: true,
        beforeChange: (current, next) => this.slider2.slickGoTo(next),
        responsive: [ 
          { 
            breakpoint: 768, 
            settings: { 
              slidesToShow: 2 
            } 
          }, 
          { 
            breakpoint: 480, 
            settings: { 
              slidesToShow: 1 
            } 
          } 
        ] 
      }, 
      modalSlider: { 
        arrows: true, 
        dots: true, 
        slidesToShow: 1, 
        slidesToScroll: 1, 
        nextArrow: <SlickButtonFix><FontAwesomeIcon icon='angle-right'/></SlickButtonFix>, 
        prevArrow: <SlickButtonFix><FontAwesomeIcon icon='angle-left'/></SlickButtonFix>, 
        responsive: [ 
          { 
            breakpoint: 768, 
            settings: { 
              arrows: false, 
            } 
          } 
        ] 
      } 
    }; 
  }  
  onClickHandler = (value) => { 
    this.setState({ modalActive: value, }); 
  }
  render() { 
    return ( 
      <Container> 
        <PrimaryHeader>Umiejetności</PrimaryHeader> 
        <div> 
          {this.state.skillIcons.map((skill) => ( 
            <SkillWrapper key={uuidv4()}> 
              <Paragraf>{skill.name}</Paragraf> 
              <ImageLoader 
                src={process.env.PUBLIC_URL + skill.img} 
                image={props => <img {...props} 
                alt='icon'/>} 
                loading={() => <Loader><FontAwesomeIcon icon="spinner"/></Loader>} 
                error={() => <div>Error</div>} 
              /> 
            </SkillWrapper> 
          ))} 
        </div> 
        <SecondaryHeader>Certyfikaty</SecondaryHeader> 
        <SliderSlick 
          {...this.state.thumbnailsSlider} 
          ref={slider => (this.slider1 = slider)} 
        > 
          {this.state.certificate.map(certificate => ( 
            <Certificate key={uuidv4()} onClick={() => this.onClickHandler(true)}> 
              {certificate.name} 
              <ImageLoader 
                src={process.env.PUBLIC_URL + certificate.miniature} 
                image={props => <CertificateImg {...props} 
                alt='Certificate'/>} 
                loading={() => <Loader><FontAwesomeIcon 
                icon="spinner"/></Loader>} 
                error={() => <div>Error</div>} 
              /> 
            </Certificate> 
          ))} 
        </SliderSlick> 
        <Modal modalActive={this.state.modalActive}> 
          <Button onClick={() => this.onClickHandler(false)}> 
            <FontAwesomeIcon icon="times"></FontAwesomeIcon> 
          </Button> 
          <SliderSlick 
            {...this.state.modalSlider} 
            ref={slider => (this.slider2 = slider)} 
          > 
            {this.state.certificate.map(certificate => ( 
              <img key={uuidv4()} src={process.env.PUBLIC_URL + certificate.img} alt="certificate" /> 
            ))} 
          </SliderSlick> 
        </Modal> 
      </Container> 
    ) 
  } 
}