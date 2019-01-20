import React from 'react';
import { Container, PrimaryHeader, Paragraf, HomeWrapper, HomeImg, Loader } from '../Styled/Styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImageLoader from 'react-loading-image';


const Home = () => (
  <HomeWrapper> 
    <Container>
      <ImageLoader
        src={process.env.PUBLIC_URL + '/images/me.jpg'}
        image={props => <HomeImg {...props} alt='myPhoto'/>}
        loading={() => <Loader><FontAwesomeIcon icon="spinner"/></Loader>}
        error={() => <div>Error</div>}       
      />
      <PrimaryHeader>Cześć, jestem Rafał i jestem początkującym Front-end Developerem.</PrimaryHeader>
      <Paragraf> Komputery<FontAwesomeIcon icon="desktop"/>pasjonowały mnie od dziecka, dlatego też zdecydowałem ukończyć technikum informatyczne.<FontAwesomeIcon icon="graduation-cap"/>. Tam też napisałem swoje pierwsze „Hello World” i zacząłem interesować się tworzeniem stron. Swoją pierwszą stronę na zlecenie wykonałem w 2015 r.</Paragraf>
      <Paragraf>Strony i aplikacje webowe<FontAwesomeIcon icon={["fab", "react"]}/>tworze w: HTML, CSS, SCSS, JavaScript, Jquery, React, Redux, NodeJs, ExpressJS. Dodatkowo korzystam z Gita<FontAwesomeIcon icon={["fab", "git-square"]} />. Kod staram się pisać w oparciu o najlepsze praktyki, takie jak DRY czy KISS. Strony poddaje walidacji.</Paragraf>
      <Paragraf> Jako osoba jestem komunikatywny<FontAwesomeIcon icon="comment" /> szczery, obiektywny, potrafię przyznać się do winy, nie boje się krytyki, mam duży dystans do siebie. Powierzone zadania wykonuję sumiennie i odpowiedzialnie, zaistniałe problemy<FontAwesomeIcon icon="exclamation-triangle" />staram się rozwiązywać samodzielnie.</Paragraf>
      <Paragraf>Aktualnie poszukuję miejsca, w który zostałbym wartościowym członkiem zespołu.</Paragraf> 
    </Container>
  </HomeWrapper>
);
export default Home;