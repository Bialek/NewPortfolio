import { keyframes } from 'styled-components';      


export const rotateLoader = keyframes`
    0% {
        transform: rotate(0deg)
    }
    100% {
        transform: rotate(360deg);
    }
`


export const movingSkyAnimation = keyframes`
  0% {
    transform: translateY(400px) translateX(400px)
  }
  100% {
    transform: translateY(-540px) translateX(-960px)
  }
`

export const shootingStarAnimation = keyframes`
	0% {
		transform: translateY(-1000px) translateX(-2000px) rotate(120deg);
		opacity: 1;
		height: 5px;
	}

	100% {
		transform: translateY(300px) translateX(300px) rotate(120deg);
		opacity: 1;
		height: 800px;
	}
` 