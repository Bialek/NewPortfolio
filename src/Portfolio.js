import React, { Component } from 'react';

import { Container, PrimaryHeader, SecondaryHeader, Paragraf, ProjectsWrapper, Project, ProjectSlider } from './Styled/App';

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
              <SecondaryHeader>{project.name}</SecondaryHeader>
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
              <Paragraf>{project.description}</Paragraf>
              <a href={project.github}>Code</a>
              <a href={project.files}>Demo</a>
            </Project>
          )}
        </ProjectsWrapper>
      </Container>
    );
  }
}

export default Portfolio;