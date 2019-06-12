import styled from 'styled-components'
import {
  movingSkyAnimation,
  shootingStarAnimation,
} from '../../Styled/Keyframes'

export const Stars = styled.span`
  z-index: 10;
  width: ${props => props.starSize};
  height: ${props => props.starSize};
  border-radius: 50%;
  background-color: transparent;
  box-shadow: ${props => props.starNumber};
  animation: ${movingSkyAnimation} 150s linear infinite;
  position: absolute;
  &:after {
    content: ' ';
    top: -300px;
    left: -300px;
    width: ${props => props.starSize};
    height: ${props => props.starSize};
    border-radius: 50%;
    position: absolute;
    background-color: transparent;
    box-shadow: ${props => props.starNumber};
  }
  &:before {
    content: ' ';
    bottom: -300px;
    right: -300px;
    width: ${props => props.starSize};
    height: ${props => props.starSize};
    border-radius: 50%;
    position: absolute;
    background-color: transparent;
    box-shadow: ${props => props.starNumber};
  }
`
export const ShotingStars = styled.span`
  z-index: 10;
  width: 5px;
  height: 85px;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  position: absolute;
  bottom: 0;
  right: 0;
  background: linear-gradient(to top, rgba(255, 255, 255, 0), white);
  animation: ${shootingStarAnimation} 10s linear infinite;
`
