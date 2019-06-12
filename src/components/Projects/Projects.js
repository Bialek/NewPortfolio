import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PrimaryHeader, Paragraf, SliderSlick } from '../../Styled/Styles'
import { Project, ProjectsWrapper } from './Projects.style'
import Modal from '../Modal/Modal'
const uuid = require('uuid/v4')

const slickSetup = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  rows: 2,
  slidesPerRow: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        rows: 1,
        slidesPerRow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
}

const renderModal = (data) => (
  <Modal>

  </Modal>
)

export default function Projects({ props }) {
  return (
    <ProjectsWrapper>
      <PrimaryHeader>Projekty</PrimaryHeader>
      <SliderSlick {...slickSetup}>
        {props.map(project => (
          <Project onClick={() => renderModal(project)} key={uuid()}>
            <h3>{project.name}</h3>
            <img
              src={process.env.PUBLIC_URL + project.img[0]}
              alt={project.name}
            />
          </Project>
        ))}
      </SliderSlick>
    </ProjectsWrapper>
  )
}
