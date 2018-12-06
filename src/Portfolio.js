import React, { Component } from 'react';
import Slider from "react-slick";
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


  render() {
    const settings = {
      dots: false,
      arrow: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Container>
        <PrimaryHeader>Projects</PrimaryHeader>
        <ProjectsWrapper>
          {this.state.projects.map((project, k) =>
            <Project key={k}>
              <Slider {...settings}>
                <div>
                <ProjectImg src={process.env.PUBLIC_URL + project.img[0]}/>
                </div>
                <div>
                <ProjectImg src={process.env.PUBLIC_URL + project.img[1]}/>
                </div>
                <div>
                <ProjectImg src={process.env.PUBLIC_URL + project.img[2]}/>
                </div>
              </Slider>

              {/*  */}
            </Project>
          )}
        </ProjectsWrapper>
      </Container>
    );
  }
}

export default Portfolio;