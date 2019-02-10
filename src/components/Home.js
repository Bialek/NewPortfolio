import React from 'react';
import { Container, PrimaryHeader, Paragraf, HomeImg, Loader } from '../Styled/Styles'
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
      <PrimaryHeader>Cześć, jestem Rafał i jestem początkującym Front-end Developerem.</PrimaryHeader>
      <Paragraf home> Komputery pasjonowały mnie od dziecka, dlatego też zdecydowałem ukończyć szkołe informatyczną. Tam też napisałem swoje pierwsze „Hello World” i zacząłem interesować się tworzeniem stron. Swoją pierwszą stronę na zlecenie wykonałem w 2015 r.</Paragraf>
      <Paragraf home>Strony i aplikacje webowe tworze w: HTML, CSS, SCSS, JavaScript, Jquery, React, Redux, NodeJs, ExpressJS. Dodatkowo korzystam z Gita. Kod staram się pisać w oparciu o najlepsze praktyki, takie jak DRY czy KISS. Strony poddaje walidacji.</Paragraf>
      <Paragraf home> Jako osoba jestem komunikatywny szczery, obiektywny, potrafię przyznać się do winy, nie boje się krytyki, mam duży dystans do siebie. Powierzone zadania wykonuję sumiennie i odpowiedzialnie, zaistniałe problemy staram się rozwiązywać samodzielnie.</Paragraf>
      <Paragraf home>Aktualnie poszukuję miejsca z ciekawymi projektami i inspirującymi osobami.</Paragraf> 
    </Container>
  </div>
);
export default Home;