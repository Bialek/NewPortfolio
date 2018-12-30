import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Merriweather:400,700,900');

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: none;
		font-family: 'Merriweather', serif;
	}
	svg {
		margin: 0 10px;
	}
`