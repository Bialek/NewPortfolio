import React from 'react';
import { Container, PrimaryHeader, Paragraf, HomeImg, Loader } from '../../Styled/Styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageLoader from 'react-loading-image';


const Home = () => (
  <div> 
    <Container home>
      <ImageLoader
        src={process.env.PUBLIC_URL + '/images/me.jpg'}
        image={props => <HomeImg {...props} alt='myPhoto'/>}
        loading={() => <Loader><FontAwesomeIcon icon="spinner"/></Loader>}
        error={() => <div>Error</div>}       
      />
      <PrimaryHeader>Cześć, jestem Rafał i jestem Front-end Developerem.</PrimaryHeader>
      <Paragraf home> Komputery pasjonowały mnie od dziecka. Swoją pierwszą stronę na zlecenie wykonałem w 2015 r.</Paragraf>
      <Paragraf home>Strony i aplikacje webowe tworze w: HTML, CSS, SCSS, JavaScript, Jquery, React, Redux, NodeJs, Styled-Components. Mam doświadczenie z CMS Wordpressem. Kod staram się pisać w oparciu o najlepsze praktyki, takie jak DRY czy KISS. Strony poddaje walidacji.</Paragraf>
      <Paragraf home>Jeśli jesteś zainteresowany współpracą, zaprawszam do kontaktu</Paragraf> 
    </Container>
  </div>
);
export default Home;