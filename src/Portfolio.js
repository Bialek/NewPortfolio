import React, { Component } from 'react';
import { Container, PrimaryHeader, ProjectsWrapper, Project, ProjectImg } from './Styled/App';

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


  render() { console.log(this.state.projects)
  
    return (
      <Container>
        <PrimaryHeader>Projects</PrimaryHeader>
        <ProjectsWrapper>
          {this.state.projects.map((project, k) =>
            <Project key={k}>
              <ProjectImg src={process.env.PUBLIC_URL + project.img[0]}/>
            </Project>
          )}
        </ProjectsWrapper>
      </Container>
    );
  }
}

export default Portfolio;