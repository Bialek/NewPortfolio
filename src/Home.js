import React from 'react';
import { Container, PrimaryHeader, Paragraf } from './Styled/App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
  return (
    <Container>
      <PrimaryHeader>Hi, I'm Rafał, I am a beginner front-end developer.</PrimaryHeader>
      <Paragraf><FontAwesomeIcon icon="desktop"/> Computers have interested me since childhood, curiosity turned into passions, which is why I decided to graduate from the IT school <FontAwesomeIcon icon="graduation-cap"/>. There, I wrote my first "Hello World" and started to be interested in creating websites. I made my first commissioned website in 2015.</Paragraf>
      <Paragraf>Websites and web applications <FontAwesomeIcon icon={["fab", "react"]}/> are created in: HTML, CSS, SCSS, JavaScript, Jquery, React, Redux, NodeJs, ExpressJS. I'm using Git <FontAwesomeIcon icon={["fab", "git-square"]} />. The code is written according to the best practices, such as BEM and DRY. The project is validated and tested.</Paragraf>
      <Paragraf>As a person I am communicative <FontAwesomeIcon icon="comment" />, honest and objective. I can admit guilt, I am not afraid of criticism, I have a large distance to myself. I try to solve my problems <FontAwesomeIcon icon="exclamation-triangle" /> by myself</Paragraf>
      <Paragraf>Currently, I am looking for a place for further professional development</Paragraf>

    </Container>
  );
}

export default Home;