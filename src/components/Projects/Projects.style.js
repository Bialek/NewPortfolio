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
  }
  h3 {
    position: absolute;
    color: #fff;
    text-align: center;
    font-size: 1.5em;
    font-weight: 700;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5)
  }
`
export const ProjectContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`

export const ProjectLink = styled.a`
  display: inline-flex;
  justify-content: space-between;
  margin: 20px;
  box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.3);
  padding: 13px 20px;
  color: rgba(255, 255, 255, 255.6);
  text-decoration: none;
  font-size: 1.3em;
  border-radius: 20px;
  transition: all ease-in-out 0.2s;
  svg {
    margin-left: 15px;
  }
  &:hover {
    box-shadow: inset 0 0 6px rgba(255, 255, 255, 255.7);
    color: rgba(255, 255, 255, 1);
  }
`
