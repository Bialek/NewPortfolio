import React from 'react';
import { Container, PrimaryHeader, Paragraf,  } from '../../Styled/Styles'

const Home = () => (
  <div> 
    <Container home>
      <PrimaryHeader home>Cześć, jestem Rafał i jestem Front-end Developerem.</PrimaryHeader>
      <Paragraf home> Komputery pasjonowały mnie od dziecka. Swoją pierwszą stronę na zlecenie wykonałem w 2015 r.</Paragraf>
      <Paragraf home>Strony i aplikacje webowe tworze w: HTML, CSS, SCSS, JavaScript, Jquery, React, Redux, NodeJs, Styled-Components. Mam doświadczenie z CMS Wordpressem. Kod staram się pisać w oparciu o najlepsze praktyki, takie jak DRY czy KISS. Strony poddaje walidacji.</Paragraf>
      <Paragraf home>Zrealizuje dla ciebie: strone, blog, sklep, aplikacje webową</Paragraf> 
    </Container>
  </div>
);
export default Home;