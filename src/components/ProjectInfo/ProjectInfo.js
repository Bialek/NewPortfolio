import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  PrimaryHeader,
  Paragraf,
  SliderSlick,
  Button,
} from '../../Styled/Styles'
import {
  ProjectInfoContainer,
  ProjectContent,
  ProjectLink,
  ProjectButtons,
} from './ProjectInfo.style'

const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
)

const slickSetup = {
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: (
    <SlickButtonFix>
      <FontAwesomeIcon icon="angle-right" />
    </SlickButtonFix>
  ),
  prevArrow: (
    <SlickButtonFix>
      <FontAwesomeIcon icon="angle-left" />
    </SlickButtonFix>
  ),
}

export default function ProjectInfo(props) {
  return (
    <ProjectInfoContainer isOpen={props.isOpen}>
      <Button onClick={() => props.toggleOpen(false)}>
        <FontAwesomeIcon icon="times" />
      </Button>
      {props.project && (
        <>
          <SliderSlick {...slickSetup}>
            {props.project.img.map((image, key) => (
              <div key={key}>
                <img src={process.env.PUBLIC_URL + image} alt="project" />
              </div>
            ))}
          </SliderSlick>
          <div>
            <PrimaryHeader>{props.project.name}</PrimaryHeader>
            <Paragraf>{props.project.description}</Paragraf>
            <ProjectButtons>
              <ProjectLink href={props.project.github} target="_blank">
                Code
                <FontAwesomeIcon icon={['fab', 'github']} />
              </ProjectLink>
              <ProjectLink href={props.project.files} target="_blank">
                Demo
                <FontAwesomeIcon icon="desktop" />
              </ProjectLink>
            </ProjectButtons>
          </div>
        </>
      )}
    </ProjectInfoContainer>
  )
}
