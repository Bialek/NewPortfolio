import styled from 'styled-components'

export const ProjectsWrapper = styled.div`
  padding-left: 55px;
  padding-top: 20px;
  max-width: 100vw;
  max-height: 100vh;
`

export const ProjectSlider = styled.div`
  width: 300px;
  margin-right: 15px;
  margin-bottom: 50px;
  @media screen and (max-width: 500px) {
    width: auto;
  }
  img {
    min-width: 300px;
    @media screen and (max-width: 500px) {
      min-width: auto;
      width: 100%;
    }
  }
`

export const Project = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  height: 40vh;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  h3 {
    position: absolute;
    color: #fff;
    text-align: center;
    font-size: 1.5em;
    font-weight: 700;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
`
