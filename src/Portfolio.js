import React from 'react';
import { Container, PrimaryHeader, ProjectWrapper, ProjectImg } from './Styled/App';

const Portfolio = () => {
  return (
    <Container>
      <PrimaryHeader>Projects</PrimaryHeader>
      <ProjectWrapper>
        <ProjectImg></ProjectImg>
      </ProjectWrapper>
    </Container>
  );
}

export default Portfolio;