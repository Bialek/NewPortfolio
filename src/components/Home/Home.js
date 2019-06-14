import React from 'react'
import { Container, PrimaryHeader, Paragraf } from '../../Styled/Styles'

const Home = () => (
  <Container home>
    <PrimaryHeader home>
      Cześć, jestem Rafał i jestem Front-end Developerem.
    </PrimaryHeader>
    <Paragraf home>
      Komputery pasjonowały mnie od dziecka. Swoją pierwszą stronę na zlecenie
      wykonałem w 2015 r.
    </Paragraf>
    <Paragraf home>
      Strony i aplikacje webowe tworze w: HTML, CSS, SCSS, JavaScript, Jquery,
      React, Redux, NodeJs, Styled-Components.
      <br /> Mam doświadczenie z CMS Wordpressem. <br />
      Kod staram się pisać w oparciu o najlepsze praktyki, takie jak SOLID, DRY
      czy KISS.
    </Paragraf>
    <Paragraf home>
      Zrealizuje dla ciebie: strone, blog, sklep, aplikacje webową
    </Paragraf>
  </Container>
)
export default Home
