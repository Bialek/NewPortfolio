import React, { Component } from 'react';

import { Container, PrimaryHeader, ProjectsWrapper, Project, ProjectSlider } from './Styled/App';

class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      projects : [
        { 
          img: [
            "/images/projects/Countries-Database/1.jpg",
            "/images/projects/Countries-Database/1.jpg",
            "/images/projects/Countries-Database/1.jpg"
          ],
          github: "https://github.com/Bialek/Countries-Database",
          files: "/projects/Countries-Database/index.html"
        },
        { 
          img: [
            "/images/projects/Countries-Database/1.jpg",
            "/images/projects/Countries-Database/1.jpg",
            "/images/projects/Countries-Database/1.jpg"
          ],
          github: "https://github.com/Bialek/Countries-Database",
          files: "/projects/Countries-Database/index.html"
        },
        { 
          img: [
            "/images/projects/Countries-Database/1.jpg",
            "/images/projects/Countries-Database/1.jpg",
            "/images/projects/Countries-Database/1.jpg"
          ],
          github: "https://github.com/Bialek/Countries-Database",
          files: "/projects/Countries-Database/index.html"
        },
        { 
          img: [
            "/images/projects/Countries-Database/1.jpg",
            "/images/projects/Countries-Database/1.jpg",
            "/images/projects/Countries-Database/1.jpg"
          ],
          github: "https://github.com/Bialek/Countries-Database",
          files: "/projects/Countries-Database/index.html"
        },
        { 
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
            </Project>
          )}
        </ProjectsWrapper>
      </Container>
    );
  }
}

export default Portfolio;