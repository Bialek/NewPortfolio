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
  font-size: ${props => (props.disable ? '0.8em' : '1.3em')};
  border-radius: 20px;
  transition: all ease-in-out 0.2s;
  svg {
    margin-left: 15px;
  }
  &:hover {
    box-shadow: ${props =>
      props.disable ? null : 'inset 0 0 6px rgba(255, 255, 255, 255.7)'};
    color: ${props => (props.disable ? null : 'rgba(255, 255, 255, 1)')};
  }
`
