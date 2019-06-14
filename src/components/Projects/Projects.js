import React, { useState } from 'react'
import { PrimaryHeader, SliderSlick, } from '../../Styled/Styles'
import { Project, ProjectsWrapper } from './Projects.style'
import uuid from 'uuid/v4'
import ProjectInfo from '../ProjectInfo/ProjectInfo'
import Modal from '../Modal/Modal'

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
        rows: 2,
        slidesPerRow: 1,
        slidesToShow: 1,
      },
    },
  ],
}

export default function Projects({ props }) {
  const [isProjectOpen, setIsProjectOpen] = useState(false)
  const [projectData, setProjectData] = useState(null)

  function onClickHandler(project) {
    setProjectData(project)
    setIsProjectOpen(true)
  }
  return (
    <>
      <ProjectsWrapper>
        <PrimaryHeader>Projekty</PrimaryHeader>
        <SliderSlick {...slickSetup}>
          {props.map(project => (
            <Project onClick={() => onClickHandler(project)} key={uuid()}>
              <h3>{project.name}</h3>
              <img
                src={process.env.PUBLIC_URL + project.img[0]}
                alt={project.name}
              />
            </Project>
          ))}
        </SliderSlick>
      </ProjectsWrapper>
      <Modal>
        <ProjectInfo
          isOpen={isProjectOpen}
          toggleOpen={setIsProjectOpen}
          project={projectData}
        />
      </Modal>
    </>
  )
}
