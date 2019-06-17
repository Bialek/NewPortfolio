import styled from 'styled-components'

export const ProjectInfoContainer = styled.div`
  position: fixed;
  position: fixed;
  top: 0;
  left: 55px;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, #020107 0%, #201b46 70%);
  padding: 50px 30px;
  overflow: auto;
  transform: ${props => (props.isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform ease-in-out 0.4s;
  img {
    width: 85%;
    max-height: 50vh;
    margin: 0 auto;
    display: block;
    object-fit: contain;
  }
`
export const ProjectButtons = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  :first-of-type {
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    padding: 10px 0;
  }
`

export const ProjectSpan = styled.div`
  box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.3);
  font-size: 0.8em;
  padding: 10px 13px;
  margin: 5px;
  color: #fff;
  border-radius: 20px;
`

export const ProjectLink = styled.a`
  display: inline-flex;
  justify-content: space-between;
  margin: 20px;
  box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.3);
  padding: 13px 20px;
  color: #fff;
  text-decoration: none;
  font-size: 1.3em;
  border-radius: 20px;
  transition: box-shadow ease-in-out 0.2s;
  svg {
    margin-left: 15px;
  }
  :hover {
    box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.9);
  }
`
