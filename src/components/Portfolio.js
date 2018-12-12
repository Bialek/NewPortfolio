import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, PrimaryHeader, SecondaryHeader, Paragraf } from '../Styled/App';
import { ProjectsWrapper, Project, ProjectSlider, ProjectContent, ProjectLink } from '../Styled/Project';

class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      projects : [
        { 
          name: 'Countries Database',
          description: 'Project from kodilla bootcamp. I added API, Styled Component and favorite site. I extend database of coutries from 8 to more that 250',
          img: [
            "/images/projects/Countries-Database/1.jpg",
            "/images/projects/Countries-Database/1.jpg",
            "/images/projects/Countries-Database/1.jpg"
          ],
          github: "https://github.com/Bialek/Countries-Database",
          files: "/projects/Countries-Database/index.html"
        },
        { 
          name: 'Baza danych państw ',
          description: 'Jeden z projektów zrealizowanych na Bootcampie Kodilla. Do projektu dodałem asynchroniczne pobieranie danych z zewnetrzne Api, przez co ilość państw wzrosła z 8 do ponad 250. Dodałem również style z zrealizowane przy użyciu Styled-Component oraz podstrone z ulubionymi państwami.',
          img: [
            "/images/projects/Countries-Database/1.jpg",
            "/images/projects/Countries-Database/1.jpg",
            "/images/projects/Countries-Database/1.jpg"
          ],
          github: "https://github.com/Bialek/Countries-Database",
          files: "/projects/Countries-Database/index.html"
        },
        { 
          name: 'Countries Database',
          description: 'Project from kodilla bootcamp. I added API, Styled Component and favorite site. I extend database of coutries from 8 to more that 250',
          img: [
            "/images/projects/Countries-Database/1.jpg",
            "/images/projects/Countries-Database/1.jpg",
            "/images/projects/Countries-Database/1.jpg"
          ],
          github: "https://github.com/Bialek/Countries-Database",
          files: "/projects/Countries-Database/index.html"
        },
        { 
          name: 'Countries Database',
          description: 'Project from kodilla bootcamp. I added API, Styled Component and favorite site. I extend database of coutries from 8 to more that 250',
          img: [
            "/images/projects/Countries-Database/1.jpg",
            "/images/projects/Countries-Database/1.jpg",
            "/images/projects/Countries-Database/1.jpg"
          ],
          github: "https://github.com/Bialek/Countries-Database",
          files: "/projects/Countries-Database/index.html"
        },
        { 
          name: 'Countries Database',
          description: 'Project from kodilla bootcamp. I added API, Styled Component and favorite site. I extend database of coutries from 8 to more that 250',
          img: [
            "/images/projects/Countries-Database/1.jpg",
            "/images/projects/Countries-Database/1.jpg",
            "/images/projects/Countries-Database/1.jpg"
          ],
          github: "https://github.com/Bialek/Countries-Database",
          files: "/projects/Countries-Database/index.html"
        }
      ]
    }
  }

  render() {
    return (
      <Container>
        <PrimaryHeader>Projects</PrimaryHeader>
        <ProjectsWrapper>
          {this.state.projects.map((project, k) =>
            <Project key={k}>
              
              <ProjectContent>
                <ProjectSlider
                  infiniteLoop={true}
                  autoPlay={true}
                  interval={1000}
                  swipeable={true}
                  showArrows={false}
                  showStatus={false}
                  showIndicators={false}
                  showThumbs={false}
                >
                  <div>
                    <img src={process.env.PUBLIC_URL + project.img[0] } alt='project'  />
                  </div>
                  <div>
                    <img src={process.env.PUBLIC_URL + project.img[1] } alt='project'  />
                  </div>
                  <div>
                    <img src={process.env.PUBLIC_URL + project.img[2] } alt='project'  />
                  </div>
                </ProjectSlider>
                <div>
                <SecondaryHeader>{project.name}</SecondaryHeader>
                  <Paragraf>{project.description}</Paragraf>
                  <ProjectLink href={project.github} target="_blank">
                    Code
                    <FontAwesomeIcon icon={["fab", "github"]} />
                  </ProjectLink>
                  <ProjectLink href={project.files} target="_blank">
                    Demo
                    <FontAwesomeIcon icon='desktop' />
                  </ProjectLink>
                </div>
              </ProjectContent>
            </Project>
          )}
        </ProjectsWrapper>
      </Container>
    );
  }
}

export default Portfolio;