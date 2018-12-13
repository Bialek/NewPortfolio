import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PrimaryHeader, SecondaryHeader, Paragraf } from '../Styled/App';
import { ProjectsWrapper, Project, ProjectSlider, ProjectContent, ProjectLink } from '../Styled/Portfolio';

class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      projects : [
        { 
          name: 'Wyszukiwarka Zdjęć Unsplash',
          description: 'Projekt zbudowany od podstaw. Aplikacja służy do tworzenia katalogów zdjęć po przez wyszukiwaną fraze. Zdjęcia w katalogu może sortować według trzech wartości. Korzystamy tutaj z Api z strony Unsplash. W projekcje wykorzystałem: React, Redux, Redux-thunk oraz Styled-component.',
          img: [
            "/images/projects/unsplash-images-search-engine/1.jpg",
            "/images/projects/unsplash-images-search-engine/2.jpg",
            "/images/projects/unsplash-images-search-engine/3.jpg"
          ],
          github: "https://github.com/Bialek/unsplash-images-search-engine",
          files: "/projects/unsplash-images-search-engine/index.html"
        },
        { 
          name: 'Baza danych państw ',
          description: 'Jeden z projektów zrealizowanych na Bootcampie Kodilla. Do projektu dodałem asynchroniczne pobieranie danych z zewnetrznego Api, przez co ilość państw wzrosła z 8 do ponad 250. Dodałem również style z zrealizowane przy użyciu Styled-Component oraz podstrone z ulubionymi państwami.',
          img: [
            "/images/projects/Countries-Database/1.jpg",
            "/images/projects/Countries-Database/2.jpg",
            "/images/projects/Countries-Database/3.jpg"
          ],
          github: "https://github.com/Bialek/Countries-Database",
          files: "/projects/Countries-Database/index.html"
        },
        { 
          name: 'Photo-layout',
          description: 'Moja autorska wersja strony całkowicie odmienna od pliku PSD który dostałem, strone zrealizowałem z biblioteką Fullpage.js, pozostałe elementy dynamiczne wykonane w jQuery. Style wykonane w Scss. Stylą brakuje metodologii :(',
          img: [
            "/images/projects/Photo-layout-fullpage.js/1.jpg",
            "/images/projects/Photo-layout-fullpage.js/2.jpg",
            "/images/projects/Photo-layout-fullpage.js/3.jpg"
          ],
          github: "https://github.com/Bialek/Photo-layout-fullpage.js",
          files: "/projects/Photo-layout-fullpage.js/index.html"
        },
        { 
          name: 'ZTP-layout',
          description: 'Zadanie rektutacyjne, zrealizowane na podstawie dostarczonego pliku PSD. Style wykonane w Sass, metodologia BEM. Projekt poddany walidacji. Framework JavaScript to jQuery. Na projekt miałem zaledwie 4 dni.',
          img: [
            "/images/projects/ZTP-layout/1.jpg",
            "/images/projects/ZTP-layout/2.jpg",
            "/images/projects/ZTP-layout/3.jpg"
          ],
          github: "https://github.com/Bialek/ZTP-layout",
          files: "/projects/ZTP-layout/index.html"
        },
        { 
          name: 'Chat',
          description: 'Chat pozwala na komunikacje z osobami znajdującymi się na stronie. Najłatwiejszym sposobem do przetestowania są dwie oddzielne karty w przeglądarce. Aplikacja korzysta z świetnego Api jakim jest Socket.io, pozwalajacy na stałą komunikacje z serwerem. Back-end wykonany w Node.js a projekty udostępniony na Heroku.',
          img: [
            "/images/projects/Chat/1.jpg",
            "/images/projects/Chat/2.jpg",
            "/images/projects/Chat/3.jpg"
          ],
          github: "https://github.com/Bialek/Kodilla-Bootcamp/tree/master/module-18-chat",
          files: "https://limitless-fjord-29023.herokuapp.com/"
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <PrimaryHeader>Projekty</PrimaryHeader>
        <ProjectsWrapper>
          {this.state.projects.map((project, k) =>
            <Project key={k}>
              
              <ProjectContent>
                <ProjectSlider
                  infiniteLoop={true}
                  autoPlay={true}
                  interval={1500}
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
      </div>
    );
  }
}

export default Portfolio;