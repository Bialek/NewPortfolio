import React from 'react';
<<<<<<< HEAD
import { Container, Header, Paragraf } from './Styled/App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
=======
import { Container, Header } from './Styled/App'
>>>>>>> 5f8fc5f9d7f4e0ad39e197b5b5e4d8e7844b658b

const Home = () => {
  return (
    <Container>
      <Header>Hi, I'm Rafał, I am a beginner front-end developer.</Header>
<<<<<<< HEAD
      <Paragraf><FontAwesomeIcon icon="desktop"/> Computers have interested me since childhood, curiosity turned into passions, which is why I decided to graduate from the IT school <FontAwesomeIcon icon="graduation-cap"/>. There, I wrote my first "Hello World" and started to be interested in creating websites. I made my first commissioned website in 2015.</Paragraf>
      <Paragraf>Websites and web applications <FontAwesomeIcon icon={["fab", "react"]}/> are created in: HTML, CSS, SCSS, JavaScript, Jquery, React, Redux, NodeJs, ExpressJS. I'm using Git <FontAwesomeIcon icon={["fab", "git-square"]} />. The code is written according to the best practices, such as BEM and DRY. The project is validated and tested.</Paragraf>
      <Paragraf>As a person I am communicative <FontAwesomeIcon icon="comment" />, honest and objective. I can admit guilt, I am not afraid of criticism, I have a large distance to myself. I try to solve my problems <FontAwesomeIcon icon="exclamation-triangle" /> by myself</Paragraf>
      <Paragraf>Currently, I am looking for a place for further professional development</Paragraf>
=======
      <p>Computers have interested me since childhood, curiosity turned into passions, which is why I decided to graduate from the IT school. There, I wrote my first "Hello World" and started to be interested in creating websites. I made my first commissioned website in 2015.</p>
      <p>Websites and web applications are created in: HTML, CSS, SCSS, JavaScript, Jquery, React, Redux, NodeJs, ExpressJS. I'm using Git. The code is written according to the best practices, such as BEM and DRY. The project is validated and tested.</p>
      <p>As a person I am communicative, honest and objective. I can admit guilt, I am not afraid of criticism, I have a large distance to myself. I try to solve my problems by myself</p>
      <p>Currently, I am looking for a place for further professional development</p>
>>>>>>> 5f8fc5f9d7f4e0ad39e197b5b5e4d8e7844b658b
    </Container>
  );
}

export default Home;