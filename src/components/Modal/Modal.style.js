import styled from 'styled-components'

export const StyledModal = styled.div`
  z-index: ${props => (props.modalActive ? '9999' : '-1')};
  background-color: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  padding: 40px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transition: opacity ease-in-out 0.4s;
  opacity: ${props => (props.modalActive ? '1' : '0')};
  img {
    max-width: 85vw;
    max-height: 85vh;
    object-fit: contain;
  }
  button {
    svg {
      color: #fff !important;
    }
  }
  .slick-slider {
    width: 100%;
  }
`
